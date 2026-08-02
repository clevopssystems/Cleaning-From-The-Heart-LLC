# Temporary Carpet Cleaning Image Sources

**Development reference only. This file is not published on the website and is not linked from any page.**

Every image listed here is a **temporary royalty-free stock photograph** used to carry the visual direction on
`/services/carpet-cleaning`. None of it is Cleaning From The Heart work, none of it is a Seattle client property,
and none of it is presented on the site as either. All of it should be replaced with original Cleaning From The
Heart photography when that becomes available.

No caption or alt attribute on the page claims these are company jobs. The one caption that sits beside a stock
photo in the results area is explicitly labelled a "Reference image", and the real Results Gallery CTA
(`/gallery`) is kept visually and textually separate. The results copy also states plainly that carpet-specific
before/after photography has not been collected yet.

## Licensing

| Platform | License | Commercial use | Attribution required |
| --- | --- | --- | --- |
| Pexels | [Pexels License](https://www.pexels.com/license/) | Yes | No (credited here anyway) |

Nothing was hotlinked — every file was downloaded, cropped, re-encoded to WebP, and committed under
`public/images/services/carpet-cleaning/`. No remote image URLs appear in the page component and
`next.config.ts` remote-image settings were not touched.

---

## Carpet Cleaning — `/services/carpet-cleaning`

Directory: `public/images/services/carpet-cleaning/`, plus one full-bleed background in `public/services/`.

### 0. `public/services/carpet-cleaning-hero-background.jpg` — HERO BACKGROUND

- **Section:** Hero — full-bleed CSS background behind the dark `brand-950` gradient
- **Provenance:** supplied separately, not sourced by this task. Licensing is **unconfirmed** and should be
  verified before launch.
- **Format:** JPEG · **Dimensions:** 2400 × 1800 (4:3) · **Approx. size:** 453 KB
- Delivered at 5409 × 4057 / 3.5 MB. Because it is a CSS background it bypasses `next/image` entirely and would
  have been served raw on every hero paint, so it was downscaled and re-encoded in place (mozjpeg q74,
  progressive). The untouched original is preserved outside the repo in the session scratchpad.
- **Content note:** the photograph shows a domestic canister vacuum on an area rug over a hardwood floor. It is
  the page's primary image for the keyword "carpet cleaning Seattle", and a rug-over-hardwood shot is the exact
  imagery this build otherwise avoided. The dark gradient obscures most of it, but replacing it with wall-to-wall
  or commercial carpet would serve the page better.

### 1. `carpet-cleaning-hero.webp`

- **Section:** Open Graph / Twitter card image only. It is **not** rendered on the page — the hero uses the
  background JPEG above instead — but it remains the social preview and should stay in place.
- **Platform:** Pexels · **Source page:** https://www.pexels.com/photo/interior-of-office-5511130/
- **Final format:** WebP (q64) · **Dimensions:** 1600 × 1200 (4:3) · **Approx. size:** 303 KB
- **Alt text (in metadata):** "Commercial carpet tile in an office lounge and corridor"
- Chosen because it reads unambiguously as commercial carpet rather than a rug on a hard floor — the single most
  common failure mode in stock imagery for this service. It is the strongest candidate on hand if the hero
  background is ever reconsidered.

### 2. `high-traffic-carpet-corridor.webp`

- **Section:** "Seattle Carpet Cleaning for Cleaner, Better-Maintained Spaces" direct-answer editorial split
- **Platform:** Pexels · **Source page:** https://www.pexels.com/photo/empty-corridor-in-hotel-5371484/
- **Final format:** WebP (q76) · **Dimensions:** 1200 × 1500 (4:5, cropped from a taller portrait original) · **Approx. size:** 102 KB
- **Alt text:** "Patterned carpet running the length of a lit interior corridor"
- Supports the traffic-lane argument in the copy beside it.

### 3. `public/services/commercial-carpet-cleaning-vertical.png` — COMMERCIAL PANEL (in use)

- **Section:** "Commercial Carpet Cleaning for Seattle Businesses" — portrait panel beside the copy
- **Provenance:** supplied separately, not sourced by this task. Licensing is **unconfirmed** and should be
  verified before launch.
- **Format:** PNG · **Dimensions:** 941 × 1458 · **Approx. size:** 1.9 MB on disk
- **Alt text:** "Technician using carpet extraction equipment"
- Rendered through `ServiceImagePanel` with `aspect="none"`, so `next/image` optimizes it (≈46 KB AVIF at 750w
  in a local production build). The large PNG on disk is therefore not shipped to visitors, but a pre-optimized
  source would still shorten cold builds.
- This is the only image on the page showing a person. The alt text says "Technician", not "our technician" —
  keep it that way unless the photograph genuinely shows Cleaning From The Heart staff.

### 3b. Unused stock crops of the same section

Two files were produced for this section before the supplied PNG arrived, and nothing references them today.
Both are safe to delete; they are kept only because they are the better shapes if the layout changes again.

- `commercial-carpet-cleaning-vertical.webp` — 1200 × 1500 (4:5), 68 KB
- `commercial-carpet-cleaning.webp` — 1600 × 1000 (16:10), 47 KB

Both are Pexels, from https://www.pexels.com/photo/a-man-in-coveralls-vacuuming-in-a-cinema-8273523/ — a
cleaning technician working carpet in an empty auditorium.

### 4. `residential-carpet-bedroom.webp`

- **Section:** "Residential Carpet Cleaning for Seattle Homes" editorial split (image right)
- **Platform:** Pexels · **Source page:** https://www.pexels.com/photo/interior-design-of-a-spacious-bedroom-8031977/
- **Final format:** WebP (q76) · **Dimensions:** 1400 × 933 (3:2) · **Approx. size:** 179 KB
- **Alt text:** "Bedroom with wall-to-wall carpet running through to the hallway"
- Wall-to-wall residential carpet, deliberately not an area rug over hardwood.

### 5. `carpet-fiber-detail.webp`

- **Section:** "Treatment for Carpet Spots, Stains and Odors" — supporting panel under the copy
- **Platform:** Pexels · **Source page:** https://www.pexels.com/photo/textured-rug-in-light-room-7179501/
- **Final format:** WebP (q76) · **Dimensions:** 1600 × 900 (16:9) · **Approx. size:** 115 KB
- **Alt text:** "Close view of carpet pile in raking daylight"
- **Caption on page:** "Carpet fiber and construction change how a spot behaves, which is why the same treatment
  gives different results on different floors." (neutral; makes no claim about the property)

### 6. `office-carpet-conference-room.webp` — currently unused

- **Section:** none. It backed the "See the Standard Before You Book" section, which was removed from the page on
  2026-08-02. The file is still in `public/images/services/carpet-cleaning/` and is free to reuse or delete.
- **Platform:** Pexels · **Source page:** https://www.pexels.com/photo/modern-conference-room-in-an-office-5511295/
- **Final format:** WebP (q76) · **Dimensions:** 1400 × 933 (3:2) · **Approx. size:** 185 KB
- **Alt text:** "Meeting room with patterned carpet, a long table and upholstered chairs"
- **Caption when it was on the page:** "Reference image showing the kind of space this service is built around —
  meeting rooms, walkways, and shared areas each carry their own priority."

---

## Replacement checklist

The six files above can be replaced in place — the page component references them only by path, so no code changes
are needed as long as the new files keep the same filenames and roughly the same aspect ratios:

| Aspect | File |
| --- | --- |
| 4:3 | `carpet-cleaning-hero.webp` (OG only), `public/services/carpet-cleaning-hero-background.jpg` |
| 4:5 | `high-traffic-carpet-corridor.webp` |
| ~2:3 | `public/services/commercial-carpet-cleaning-vertical.png` |
| 3:2 | `residential-carpet-bedroom.webp`, `office-carpet-conference-room.webp` |
| 16:9 | `carpet-fiber-detail.webp` |

If aspect ratios change, update the `width` / `height` / `aspect` props at the matching call site in
`app/services/carpet-cleaning/page.tsx`. The hero background is a CSS background rather than an `<img>`, so it
carries no intrinsic dimensions in the markup and a replacement only needs to keep roughly the same shape — but
it also means `next/image` never touches it, so keep that one file small by hand.

Highest-value shots to capture first, in priority order:

1. **A crew member running an extractor on real commercial carpet.** Replaces
   `commercial-carpet-cleaning-vertical.webp`, the only human subject on the page and the one most open to
   misinterpretation. It is also the shot that would let the page show the actual method rather than imply it.
2. **A genuine before/after pair of a traffic lane or a treated spot.** This is the missing asset the results
   section currently admits to. Once it exists, the "reference image" caption can be dropped, the honesty
   disclaimer in the results copy can be removed, and carpet photos can be added to `galleryItems` in
   `lib/site.ts` (the Results page filters would need a carpet-relevant category, or the photos can be tagged
   under the existing `commercial-cleaning` / `residential-cleaning` categories).
3. **A real Seattle office floor or corridor, worked and reset** — replaces `carpet-cleaning-hero.webp`, the
   largest image on the page.
4. **A carpeted room in a real client home or rental** — replaces `residential-carpet-bedroom.webp`.
