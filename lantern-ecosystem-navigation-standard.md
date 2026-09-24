# Lantern Ecosystem Navigation Standard

**Status:** Required ecosystem pattern  
**Reference implementation:** Glo website, September 2026  
**Pattern:** Parent brand | Active product

This standard defines the navigation system for every Lantern product website. The goal is to make movement between Lantern and its products feel like one coherent ecosystem while allowing each product to retain its own navigation, content, and conversion path.

> Every product site must present **Lantern logo | Product logo** at the left of the shared header. Lantern remains the parent-brand anchor; the product receives equal or greater visual emphasis as the active destination.

## 1. Universal structure

| Position | Required element | Behavior |
|---|---|---|
| 1 | Lantern wordmark | Uses the approved Lantern asset and links in the same tab to `https://lanternglobal.ai`. |
| 2 | Vertical divider | A thin, neutral rule establishes the parent-product relationship. It is structural, not decorative. |
| 3 | Product wordmark | Uses the product’s approved logo and links to that product’s homepage. |
| 4 | Product navigation | Labels and dropdown destinations belong to the active product, not the Lantern corporate site. |
| 5 | Primary product action | The right edge holds the product’s dominant conversion action. For Glo, this is **Book a Demo**. |

The lockup must read in one glance as **Lantern | Product**. Do not replace either wordmark with typed text, merge the logos, or allow the parent logo to overpower the product logo.

## 2. Brand hierarchy and assets

The Lantern mark should be visually restrained in the same way a parent-company mark is treated in a product-family header. Its visible height should be approximately equal to the navigation text block and modestly smaller than, or optically subordinate to, the active product mark. The product mark may receive greater perceived emphasis through scale, color, or its native brand treatment.

| Rule | Requirement |
|---|---|
| Approved artwork | Use the supplied SVG or approved production asset for each brand. |
| Proportions | Preserve intrinsic aspect ratios. Never stretch, redraw, crop away required artwork, or rebuild a wordmark in a font. |
| Color | Do not recolor either logo unless an approved light/dark variant exists. |
| Background | Never add a white box behind a transparent logo. |
| Effects | Do not add CSS glow, colored shadow, or halo. A logo’s intrinsic effect may remain. |
| Optical sizing | Measure the visible artwork, not only the SVG canvas. Products with transparent bounds require an optical correction. |

### Glo reference assets

| Brand | Current approved asset | Destination |
|---|---|---|
| Lantern | `/images/lantern_logo_nav_transparent_9b35580b.svg` | `https://lanternglobal.ai` |
| Glo | `/images/glo-cyan-no-tm_09e4b011.svg` | `/` |

Other product teams must substitute their approved product wordmark and product-home destination while retaining the same parent-product order and behavior.

## 3. Desktop reference dimensions

These are the measured Glo reference values. Other product logos may require different CSS canvas dimensions to achieve the same **visible** hierarchy.

| Element | Glo reference value | Ecosystem rule |
|---|---:|---|
| Primary navigation row | `78px` high | Keep one consistent ecosystem row height. |
| Content container | Maximum `1420px` | Centered, with responsive side padding. |
| Side padding | `clamp(1.15rem, 4vw, 4.5rem)` | Preserve generous clearance at all widths. |
| Lantern image box | `8rem × 1.75rem` | Parent remains restrained. |
| Brand gap | `0.78rem` on each side of the divider | Keep both logos visually distinct. |
| Divider | `1px × 1.75rem` | Use Base at approximately 54% opacity on dark ground. |
| Glo image box | `4.9rem × 4.1rem` | Optical size compensates for transparent SVG bounds. |
| Glo optical offset | `translateY(0.2rem)` | Product-specific; do not copy without measuring. |
| Complete Glo lockup | Approximately `232px` wide | Must leave clear space before navigation. |
| Desktop navigation breakpoint | `1024px` | Below this width, use the mobile menu. |
| Primary trigger type | `0.88rem`, weight `600` | Keep labels compact and readable. |
| Primary action | Minimum `2.75rem` high | Remains visually dominant at the right edge. |

At a `1280px` viewport, the Glo implementation retains approximately `172px` between the family lockup and the primary navigation. Other products should preserve comparable breathing room rather than compressing the header to fit an oversized product mark.

## 4. Color and material contract

| Token | Value | Header use |
|---|---:|---|
| Base 2 | `#282C37` | Top-of-page header ground. |
| Base | `#F0E9DC` | Primary navigation text and neutral divider source. |
| Core Cyn | `#CAFFFF` | Active or focused navigation text. |
| Cyn | `#30C6BE` | Active rules, focus outlines, and compact state accents. |
| Core Amber | `#FAD295` | Optional campaign rail ground. |
| Amber | `#FFB85A` | Primary conversion action. |

At the top of the page, the header uses solid Base 2 with no backdrop blur. After the visitor scrolls more than `8px`, the header changes to `rgba(40, 44, 55, 0.86)` with `saturate(110%) blur(18px)`. The transition lasts `180ms` using `cubic-bezier(.23,1,.32,1)`.

## 5. Navigation and dropdown behavior

Desktop navigation uses product-specific divisions and direct links. A current division uses Core Cyn text with a `2px` Cyn rule. A current dropdown destination uses a Cyn left rule and a restrained Cyn surface tint.

Dropdowns must be controlled by application state, not CSS `:hover` alone.

| Interaction | Required behavior |
|---|---|
| Pointer entry | Open the intended dropdown. |
| Pointer leave | Close the dropdown. |
| Trigger click | Toggle the dropdown. |
| Keyboard focus | Open the dropdown and expose `aria-expanded="true"`. |
| Escape | Close immediately and remove trigger focus. |
| Route change | Close every dropdown. |
| Scroll | Close any open dropdown once. Keep it closed while the pointer remains stationary. |
| Deliberate re-entry | Reopen only after the pointer leaves and enters the trigger again, or after click/focus. |

This scroll rule is mandatory. It prevents sticky-header hit-test changes from making a dropdown disappear and reappear as the visitor scrolls.

### Glo dropdown reference

| Property | Value |
|---|---:|
| Width | `17rem` |
| Offset below trigger | `0.7rem` |
| Internal padding | `0.7rem` |
| Ground | Base `#F0E9DC` |
| Text | Base 2 `#282C37` |
| Border | Base 2 at 18% opacity |
| Entrance | `translateY(-6px) scale(0.98)` to neutral |
| Transition | `180ms` with the standard ease-out curve |

Every trigger must expose `aria-haspopup`, `aria-expanded`, and `aria-controls`. Current links must use `aria-current="page"`. Focus outlines use `2px` or `3px` Cyn/Core Cyn with sufficient offset to remain visible.

## 6. Interior-page context rail

Interior pages retain the universal header and add a secondary context rail below it. The rail shows the current product division and page. Desktop may also show sibling destinations; phone and tablet hide the sibling list and retain a compact location label.

| Element | Glo reference |
|---|---:|
| Desktop rail minimum height | `3rem` |
| Tablet/phone rail minimum height | `2.75rem` |
| Ground | `rgba(31,34,43,.58)` |
| Separator | `2px` Cyn rule between division and page |
| Current sibling | Core Cyn text with `2px` Cyn lower rule |
| Compact label | Truncates at `60vw` where needed |

The homepage does not display a context rail.

## 7. Mobile header and drawer

At widths below `1024px`, the desktop navigation is replaced by a menu trigger, but the **Lantern | Product** family relationship remains visible.

### Glo reference values

| Element | Phone header | Mobile drawer |
|---|---:|---:|
| Lantern image box | `5.6rem × 1.3rem` | `6.75rem × 1.5rem` |
| Brand gap | `0.55rem` | `0.72rem` |
| Divider | `1px × 1.3rem` | `1px × 1.5rem` |
| Glo image box | `4rem × 3.25rem` | `4.45rem × 3.3rem` |
| Drawer width | — | `min(90vw, 390px)` |

The drawer repeats the parent-product lockup, retains both destinations, presents product divisions and current states, and ends with the product’s dominant action. Do not remove the parent brand on mobile.

## 8. Optional campaign rail

A campaign ticker may sit above the universal header when a time-sensitive event or announcement is active. It is an optional layer, not part of the permanent parent-product identity.

The Glo Staffing World reference uses a `1.9rem` desktop height and `1.75rem` phone height, Core Amber ground, Base 2 text, and a `2px` Cyn lower rule. Its two equal sequences animate for `42s` linearly and pause on hover or keyboard focus. Under `prefers-reduced-motion: reduce`, animation stops and one centered message remains.

The ticker must not alter the family-lockup order, navigation labels, or product action. When present, it is the top edge of the same sticky header stack.

## 9. Implementation QA checklist

Before publishing another Lantern product site, verify the following:

| Area | Acceptance test |
|---|---|
| Identity | Lantern appears first, divider second, active product third. |
| Destinations | Lantern opens `lanternglobal.ai` in the same tab; product logo opens product home. |
| Hierarchy | Parent mark is restrained; product remains clearly active. |
| Assets | Approved transparent logos retain their aspect ratios and intrinsic treatments. |
| Alignment | Both visible wordmarks, divider, nav labels, and primary action share one optical center line. |
| Clearance | No collision with navigation, dropdowns, primary action, or mobile trigger. |
| Active route | Current division and current destination are visible and accessible. |
| Dropdown scroll | An open menu closes once on scroll and does not flash or reopen until deliberate re-entry. |
| Keyboard | Focus opens, Escape closes, and focus outlines remain visible. |
| Mobile | Both brands and divider remain present in the header and drawer. |
| Sticky state | Top and scrolled materials remain readable over every page ground. |
| Context rail | Interior pages show their location; the homepage does not. |
| Motion | Optional campaign motion pauses and respects reduced-motion preferences. |

## 10. Reuse guidance

Copy the **behavioral system and hierarchy**, not Glo’s raw SVG dimensions. Each product team must measure its approved wordmark’s visible bounds, then tune the image box so the parent-product relationship matches this reference. The non-negotiable sequence is:

> **Lantern → divider → active product → product navigation → primary product action**

Glo is the implemented reference pattern for the Lantern ecosystem.
