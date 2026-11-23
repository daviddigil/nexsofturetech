# Deploying nexsofture.tech to Hostinger

The site is a **static export**: plain HTML, CSS and JS plus one PHP file for the contact form. It runs on any Hostinger plan (Premium, Business or Cloud). No Node.js is needed on the server.

## 1. Build
```powershell
npm install
npm run build
```
The build creates the `out/` folder. **Upload the contents of `out/`** (not the folder itself).

## 2. Upload
**Option A: hPanel File Manager**
1. hPanel → Websites → nexsofture.tech → **File Manager** → `public_html`
2. Delete the default `default.php` / `index.php` if present.
3. Zip the *contents* of `out/` → upload → **Extract** inside `public_html`.
4. Make sure the hidden file `.htaccess` is there. Turn on "show hidden files" if you can't see it.

**Option B: FTP** (FileZilla): hPanel → Files → FTP Accounts → upload `out/*` to `/public_html`.

## 3. Domain & SSL
- If the domain is registered elsewhere, point the nameservers to `ns1.dns-parking.com` / `ns2.dns-parking.com`, or set an A record to your Hostinger IP.
- hPanel → Security → **SSL** → install the free SSL. The `.htaccess` file already forces HTTPS and non-www.

## 4. Contact form email
1. hPanel → Emails → create `info@nexsofture.tech`. Enquiries go there, with a copy to nexsofturetech@gmail.com.
2. To change recipients, edit `TO_EMAIL` / `CC_EMAIL` in `public/api/contact.php`.
3. Rebuild and upload, then submit a test message from `/en/contact/`.
4. Add SPF/DKIM in hPanel → Emails → DNS so the mail doesn't land in spam.

## 5. Updating content
Edit files in `src/content/` (products, services, posts, ui text) or `src/config/site.ts` (contact details). Then run `npm run build` and re-upload `out/`.

## 6. Local preview
```powershell
npm run build
npx serve out
```
