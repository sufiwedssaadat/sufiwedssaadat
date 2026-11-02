# Royal Blue & White Wedding Website

A responsive multi-page wedding website using royal blue, white, and bright antique-gold accents. The design includes ornamental frames, elegant script headings, gold details, and Islamic-inspired blessings.

## Run in VS Code
1. Extract this ZIP.
2. Open the `royal_blue_white_wedding_site` folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension.
4. No Node.js, npm, or build step is required.

## Pages
- `index.html` — royal cover / homepage
- `invitation.html` — formal wedding invitation
- `blessings.html` — Qur’anic verse and blessing
- `programme.html` — event schedule
- `venue.html` — address and map link
- `couple.html` — bride and groom
- `family.html` — family greetings
- `dua.html` — special note and dua
- `thank-you.html` — thank-you page

## Update details
Edit `assets/data.js` to change names, date, time, venue, map URL, programme schedule, and messages. Most details update throughout the site automatically.

Current requested details:
- Bride: Sufiya Anjum
- Groom: Dr Shahadat Hussain
- Date: Saturday, 28 November 2026
- Time: 6:00 PM (editable)
- Venue: Motihari, Bihar

Exact venue/address and event schedule are sample details. Confirm them before publishing. Review religious text and translations before print or public distribution.

## Hosting
This is a static website suitable for GitHub Pages, Netlify, or any basic static web host. Decorative fonts load from Google Fonts; system fallbacks are included.


## Two switchable themes
Every page now has a theme switch:
1. **White & Royal Blue** — white background, royal-blue text, gold accents (default).
2. **Royal Blue Night** — deep royal-blue background, bright-gold headings and white body text.

The selected theme is remembered in the same browser. Visitors can switch themes on any page.


## Individual card image assets
The `assets/cards/` directory contains nine separate PNG files cropped from the provided wedding-card collage. Each HTML page references its matching image:
- Home → `homepage-cover.png`
- Invitation → `wedding-invitation.png`
- Programme → `programme.png`
- Venue → `venue.png`
- Couple → `couple.png`
- Families → `family-greetings.png`
- Blessings → `blessings.png`
- Dua → `dua-gallery.png`
- Thank You → `thank-you.png`

To replace an image, overwrite the matching PNG in `assets/cards/` while keeping the same filename, or update that page's `<img src="...">` path. These are cropped from a collage, so the image text may not be as crisp as a separately designed high-resolution card; use them as design references or decorative card artwork.


## Mobile-fitted card images
Each page's matching card image is now displayed as a separate responsive card. Images keep their natural aspect ratio (`height: auto`, `object-fit: contain`) rather than being cropped to a fixed height. On phones, the card width adapts to the viewport with safe side margins; the full card remains visible without horizontal scrolling.


## Image-only page layout
Each page displays its matching card image without an extra caption underneath. Images retain their natural proportions and scale to the available mobile width; no fixed-height crop is applied.
