# Anna Wooten — Website

Built with **Astro** + **Decap CMS** + **Netlify**

## For Developers

```bash
npm install
npm run dev       # Local development at localhost:4321
npm run build     # Build for production
```

## For Content Editors (Ana)

1. Go to `yoursite.com/admin/`
2. Log in with your email and password
3. Edit content and click **Publish**
4. Changes go live automatically in ~30-60 seconds

## Project Structure

```
├── public/
│   └── admin/
│       ├── index.html       # CMS entry point
│       └── config.yml       # CMS configuration (what Ana can edit)
├── src/
│   ├── content/
│   │   ├── homepage.json    # Homepage text content
│   │   └── services/        # Session/service entries
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout
│   └── pages/
│       └── index.astro      # Homepage
```

## Setup Checklist

- [x] GitHub repository
- [x] Netlify connected
- [ ] Enable Netlify Identity (Integrations → Identity)
- [ ] Enable Git Gateway (Identity → Services → Git Gateway)
- [ ] Invite Ana via Netlify Identity
