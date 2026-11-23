# Launch checklist: SEO, AIO & LLM discoverability

## Before launch: fill in real data
- [x] Phones, emails, both offices, legal name, founding year (`src/config/site.ts`)
- [ ] Social links: add to `site.social` in `src/config/site.ts` (hidden until filled)
- [ ] `src/content/products.ts`: live URLs for Quick Print UAE, ChatCart CRM, Blackboard AI, TapyTips
- [ ] Refine office map coordinates from your Google Maps pins (currently approximate)
- [x] About-page brand story confirmed
- [ ] Replace the code-drawn product visuals with real screenshots once available (optional)
- [ ] Have Privacy and Terms reviewed by a UAE legal advisor (PDPL)

## Day 1: search engines
- [ ] **Google Search Console:** add the domain property (DNS TXT), submit `https://nexsofture.tech/sitemap.xml`
- [ ] **Bing Webmaster Tools:** import from GSC and submit the sitemap. *Bing powers ChatGPT search, Copilot and DuckDuckGo.*
- [ ] **IndexNow** (Bing, Yandex, Seznam): enable in Bing Webmaster
- [ ] **Yandex Webmaster:** paste the token into `site.verification.yandex`
- [ ] Test with Google **Rich Results Test** (Organization, FAQ, Breadcrumb, SoftwareApplication)
- [ ] Test with **PageSpeed Insights** (target: 90+ mobile, 95+ desktop)

## Week 1: local & entity SEO (this is what makes AI recommend you)
- [ ] **Google Business Profile:** category "Software company", Dubai address, photos, and both the Arabic and English names
- [ ] **Apple Business Connect** and **Bing Places**
- [ ] UAE directories: Yellow Pages UAE, Connect.ae, Dubai Chamber member directory, Clutch, GoodFirms, DesignRush
- [ ] LinkedIn company page and Crunchbase profile using the same name, address and description (consistent NAP)
- [ ] Wikidata entry for Nexsofture Tech, once there is press coverage to cite

## Ongoing: AIO / GEO
- [ ] Publish 2 insights articles per month (see GROWTH-PLAN.md), each answer-first with an FAQ
- [ ] Keep `llms.txt` current (it's generated automatically from `src/content/`)
- [ ] Ask ChatGPT, Perplexity, Gemini and Claude "best AI chatbot company in Dubai" monthly and track whether you're cited
- [ ] Earn mentions: Gulf News, Khaleej Times, Arabian Business, Wamda, Product Hunt launches for each product
