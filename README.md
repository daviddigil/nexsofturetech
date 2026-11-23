# nexsofture.tech

The brand website for **Nexsofture Tech**, a Dubai-based AI product and software studio.

- **Stack:** Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · Motion · Lenis · three.js / React Three Fiber
- **Languages:** English (`/en/`) and Arabic RTL (`/ar/`)
- **SEO / AIO:** per-page metadata, hreflang, JSON-LD (Organization, LocalBusiness, SoftwareApplication, Service, FAQ, Breadcrumb, BlogPosting), sitemap.xml, a robots.txt that welcomes AI crawlers, `llms.txt` and `llms-full.txt`, and a generated OG image
- **Hosting:** Hostinger (static files + `api/contact.php` mailer). See [docs/DEPLOY-HOSTINGER.md](docs/DEPLOY-HOSTINGER.md)

## Commands
```powershell
npm install      # once
npm run dev      # http://localhost:3000/en/
npm run build    # → out/  (upload its contents to public_html)
npm start        # preview the built site
```

## Where things live
| What | File |
|---|---|
| Contact details, socials, analytics | `src/config/site.ts` |
| Products | `src/content/products.ts` |
| Services | `src/content/services.ts` |
| Home FAQ | `src/content/faq.ts` |
| Blog / insights | `src/content/posts.ts` |
| UI copy (EN + AR) | `src/content/ui.ts` |
| Brand tokens (colours, fonts) | `src/app/globals.css` |
| Brand guidelines | [docs/BRAND.md](docs/BRAND.md) · live at `/en/brand/` |
| Launch and SEO checklist | [docs/LAUNCH-CHECKLIST.md](docs/LAUNCH-CHECKLIST.md) |
| Go-to-market notes | [docs/GROWTH-PLAN.md](docs/GROWTH-PLAN.md) |

Search for `TODO` to find every placeholder that needs real data before launch.
