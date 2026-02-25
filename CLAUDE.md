# Rideout Delivery - Marketing Website

## Project Overview

Marketing website for **Rideout Delivery**, a moving and delivery company based in Ottawa, Ontario, Canada. The site is designed to generate leads via phone calls and a quote request form.

**Phone**: +1 (613) 325-0274 (primary contact method — no email)
**Primary Goal**: Generate leads via phone calls and quote requests
**Target Audience**: People in Ottawa needing moving, delivery, or junk removal services

## Tech Stack

- **Pure HTML/CSS/JavaScript** — No frameworks or build tools
- **Vanilla JS** — Modern ES6+ JavaScript
- **CSS Custom Properties** — For theming and design tokens
- **SEO Optimized** — Schema.org structured data, Open Graph, Twitter Cards
- **Light theme** — Professional service business standard

## File Structure

```
/
├── index.html          # Main landing page
├── styles.css          # All styles (design system + components)
├── script.js           # Mobile menu, smooth scroll, form validation, animations
├── CLAUDE.md           # AI context file
├── _config.yml         # Jekyll config — excludes files from published site
├── CNAME               # Domain configuration for GitHub Pages
├── robots.txt          # SEO crawling rules
├── sitemap.xml         # SEO sitemap
```

## Design System

### Color Palette

```css
--color-primary:      #1E40AF  /* Deep blue — CTAs, headers */
--color-primary-dark:  #1E3A8A  /* Darker blue — hover states */
--color-accent:        #F59E0B  /* Amber/gold — highlights, accents */
--color-accent-dark:   #D97706  /* Darker amber — hover */
--color-bg:            #FFFFFF  /* White background */
--color-bg-light:      #F8FAFC  /* Light gray — alternating sections */
--color-bg-dark:       #0F172A  /* Dark — footer, hero overlay */
--color-text:          #1F2937  /* Dark gray — body text */
--color-text-light:    #6B7280  /* Medium gray — secondary text */
--color-border:        #E5E7EB  /* Light border */
```

### Typography

**Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`

## Page Sections

1. **Header** — Sticky with logo, nav links, phone CTA, mobile hamburger
2. **Hero** — Dark gradient, headline, two CTAs (Get Quote + Call Now)
3. **Services** — 4 cards: Local Moves, Long Distance, Delivery, Junk Removal
4. **Why Choose Us** — 4 trust points: Licensed, Competitive, Professional, Reliable
5. **Service Area** — Two-column list: Local areas + Long distance destinations
6. **Quote Form** — Name, phone, service type, addresses, date, details
7. **FAQ** — 6 accordion questions
8. **Footer** — Brand info, services links, quick links, licensed badge

## JavaScript Features

- Mobile hamburger menu toggle
- Smooth scroll with header offset
- FAQ accordion (single-open)
- Quote form client-side validation
- Intersection Observer fade-in animations
- Date picker minimum date enforcement

## SEO

- Schema.org `LocalBusiness` + `MovingCompany` structured data
- Open Graph and Twitter Card meta tags
- Target keywords: ottawa movers, ottawa moving company, local moves ottawa, long distance movers ottawa, junk removal ottawa, delivery service ottawa

## Deployment

**Hosting**: GitHub Pages
**Repository**: https://github.com/mtuck063/rideout-delivery-website
**Branch**: Deploys from `main` branch

### Git Workflow

**IMPORTANT**: Always use `git commit --amend --no-edit` for commits.

```bash
git add <files> && git commit --amend --no-edit && git push --force-with-lease
```

This project maintains a clean single-commit history with "v1.0".

## Development Guidelines

- Maintain light theme consistency
- Use CSS custom properties from design system
- Phone is the primary contact — make tel: links prominent
- No tracking or analytics
- Test on mobile (majority of traffic for local services)
- Keep copy honest and straightforward — no unsubstantiated claims

## Common Tasks

### Update Phone Number
Search for `613-325-0274` and `+16133250274` to find all instances.

### Connect Form to Backend
Replace the placeholder form action with a Formspree endpoint or similar service.

### Add Domain
Update `CNAME` file with the actual domain, then configure DNS.
