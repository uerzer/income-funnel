# Income Blueprint Funnel

Brunson-style value ladder funnel for async info product business.

## Funnel Structure

```
Ad/Social → Landing Page (Free opt-in)
               ↓
          Tripwire Page ($17 OTO)
               ↓
          Thank You Page (Download + upsell)
               ↓
          Email Sequence (5 days)
               ↓
          Core Offer ($197 Academy)
               ↓
          Profit Maximizer ($997 DWY)
```

## Pages

| Page | Purpose | Price |
|------|---------|-------|
| `index.html` | Landing page, lead capture | Free |
| `tripwire.html` | One-time offer after opt-in | $17 |
| `thank-you.html` | Delivery + upsell to Academy | — |

## Products

### Lead Magnet (Free)
- **7-Day Remote Income Blueprint**
- 7 methods to make $1000+ online
- No coding, no experience needed
- PDF + video training

### Tripwire ($17)
- **Automation Toolkit**
- 50+ scripts and templates
- Cold emails that convert
- Proposal templates
- AI prompt library

### Core Offer ($197)
- **Income Automation Academy**
- 6-week course
- Build 3 income streams
- Private community
- Weekly Q&A

### Profit Maximizer ($997)
- **Done-With-You Setup**
- Custom automation built for you
- 30 days support
- Results guarantee

## Tech Stack

- **Hosting**: GitHub Pages (free)
- **Payments**: Polar.sh or Gumroad
- **Email**: Mailchimp/ConvertKit (free tier)
- **Delivery**: Notion/Email

## Deploy

```bash
node deploy.mjs
```

Follow the printed instructions to push to GitHub Pages.

## Conversion Targets

| Metric | Target |
|--------|--------|
| Landing → Opt-in | 30%+ |
| Opt-in → Tripwire | 10%+ |
| Tripwire → Purchase | 5%+ |
| Email Open Rate | 35%+ |
| Email Click Rate | 10%+ |
| Academy Conversion | 3%+ |

## Files

```
funnel/
├── README.md              # This file
├── deploy.mjs             # Deployment script
├── playbook.md            # Full funnel strategy
├── email-sequence.md      # 5-day email copy
├── index.html             # Landing page (main)
├── tripwire.html          # $17 offer page
├── thank-you.html         # Download page
└── lead-magnet/
    └── 7-day-blueprint.md # Free PDF content
```

## Next Steps

1. [ ] Configure Polar.sh account
2. [ ] Set up email service
3. [ ] Deploy to GitHub Pages
4. [ ] Test funnel end-to-end
5. [ ] Drive traffic (organic/paid)
6. [ ] Optimize conversion rates

---

Built Feb 5, 2026
