<?php
/**
 * Nexsofture Tech: contact form mailer for Hostinger.
 * Receives POST from /[lang]/contact/ and emails the team.
 *
 * Setup: create the mailbox info@nexsofture.tech in hPanel → Emails. FROM_EMAIL must be a
 * mailbox on your domain or Hostinger will reject it.
 */
declare(strict_types=1);

const TO_EMAIL   = 'info@nexsofture.tech';        // where enquiries go
const CC_EMAIL   = 'nexsofturetech@gmail.com';    // backup copy
const FROM_EMAIL = 'info@nexsofture.tech';        // must be a mailbox on your domain (create it in hPanel → Emails)
const ALLOWED_ORIGINS = ['https://nexsofture.tech', 'https://www.nexsofture.tech'];

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, bool $ok, string $msg = ''): void {
    http_response_code($code);
    echo json_encode(['ok' => $ok, 'message' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(405, false, 'Method not allowed');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) respond(403, false, 'Forbidden');

// Honeypot: bots fill hidden fields
if (!empty($_POST['website'])) respond(200, true);

// Simple rate limit: 1 message / 30s per session
session_start();
if (isset($_SESSION['last_submit']) && time() - $_SESSION['last_submit'] < 30) respond(429, false, 'Too many requests');

function clean(string $key, int $max = 500): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v); // header-injection guard
    return mb_substr(strip_tags($v), 0, $max);
}

$name     = clean('name', 120);
$email    = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL) ?: '';
$phone    = clean('phone', 40);
$company  = clean('company', 120);
$interest = clean('interest', 120);
$budget   = clean('budget', 60);
$locale   = clean('locale', 5);
$message  = mb_substr(strip_tags(trim((string)($_POST['message'] ?? ''))), 0, 5000);

if ($name === '' || $email === '' || $message === '') respond(422, false, 'Missing required fields');

$subject = "New enquiry: {$name}" . ($interest ? " · {$interest}" : '');
$body = "New website enquiry (nexsofture.tech, {$locale})\n\n"
      . "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nCompany: {$company}\n"
      . "Interested in: {$interest}\nBudget: {$budget}\n\nMessage:\n{$message}\n\n"
      . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\nTime: " . gmdate('c') . "\n";

$headers = [
    'From: Nexsofture Website <' . FROM_EMAIL . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Cc: ' . CC_EMAIL,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM_EMAIL);

if ($sent) {
    $_SESSION['last_submit'] = time();
    respond(200, true);
}
respond(500, false, 'Mail failed');
