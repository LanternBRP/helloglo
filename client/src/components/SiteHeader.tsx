/**
 * Operational Signal Desk header: a Lantern parent-brand anchor paired with the
 * Glo product mark, product-specific command navigation, and a dominant demo CTA.
 */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getNavigationContext, navGroups, normalizeNavigationPath } from "@/lib/navigation";

const LOGO = "/manus-storage/glo-cyan-no-tm_09e4b011.svg";
const LANTERN_LOGO = "/manus-storage/lantern_logo_nav_transparent_9b35580b.svg";
const LANTERN_HOME = "https://lanternglobal.ai";
const EVENT_TICKER_MESSAGE = "Join Glo at Staffing World 2026 • October 12–14 • Denver, Colorado";
const EVENT_TICKER_ITEMS = Array.from({ length: 4 });

export default function SiteHeader() {
  const [location, navigate] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownSuppressed, setDropdownSuppressed] = useState(false);
  const [openMenu, setOpenMenuState] = useState<string | null>(null);
  const openMenuRef = useRef<string | null>(null);
  const hoverSuppressedRef = useRef(false);
  const pointerGroupRef = useRef<string | null>(null);
  const pointerPositionRef = useRef({ x: -10000, y: -10000 });
  const suppressionOriginRef = useRef<{ x: number; y: number } | null>(null);
  const currentPath = normalizeNavigationPath(location);
  const activePath = currentPath === "/integrations/" ? "/platform/integrations/"
    : currentPath === "/built-for/" ? "/who-we-serve/"
    : currentPath === "/built-for/healthcare-staffing/" ? "/who-we-serve/healthcare-staffing/"
    : currentPath === "/recruiting-crm/" ? "/recruitment-crm/"
    : currentPath;
  const pageContext = getNavigationContext(location);

  const setOpenMenu = (menuId: string | null) => {
    openMenuRef.current = menuId;
    setOpenMenuState(menuId);
  };

  useEffect(() => {
    const updateHeaderState = () => {
      setScrolled(window.scrollY > 8);
      if (openMenuRef.current || pointerGroupRef.current) {
        hoverSuppressedRef.current = true;
        suppressionOriginRef.current = { ...pointerPositionRef.current };
        setDropdownSuppressed(true);
        setOpenMenu(null);
      }
    };
    const notePointerMovement = (event: PointerEvent) => {
      pointerPositionRef.current = { x: event.clientX, y: event.clientY };
    };
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("pointermove", notePointerMovement, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("pointermove", notePointerMovement);
    };
  }, []);

  useEffect(() => {
    hoverSuppressedRef.current = false;
    suppressionOriginRef.current = null;
    pointerGroupRef.current = null;
    setDropdownSuppressed(false);
    setOpenMenu(null);
  }, [location]);

  const go = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}${dropdownSuppressed ? " is-dropdown-suppressed" : ""}`}>
      <Link
        href="/staffing-world-glo-up/"
        className="event-ticker"
        aria-label="Staffing World 2026, October 12 through 14 in Denver, Colorado"
      >
        <span className="event-ticker-viewport" aria-hidden="true">
          <span className="event-ticker-track">
            {[0, 1].map((group) => (
              <span className="event-ticker-sequence" key={group}>
                {EVENT_TICKER_ITEMS.map((_, index) => (
                  <span className="event-ticker-item" key={`${group}-${index}`}>
                    {EVENT_TICKER_MESSAGE}
                  </span>
                ))}
              </span>
            ))}
          </span>
        </span>
      </Link>
      <div className="container flex h-[78px] items-center justify-between gap-5">
        <div className="brand-family-lockup" aria-label="Lantern and Glo">
          <a href={LANTERN_HOME} className="lantern-parent-link" aria-label="Lantern Global home">
            <img src={LANTERN_LOGO} alt="Lantern" className="lantern-parent-mark" />
          </a>
          <span className="brand-family-divider" aria-hidden="true" />
          <Link href="/" className="brand-lockup" aria-label="Glo home">
            <img src={LOGO} alt="Glo" className="brand-mark" />
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className={`nav-group${pageContext?.divisionId === group.id ? " is-active" : ""}${openMenu === group.id ? " is-open" : ""}`}
              onPointerEnter={(event) => {
                pointerPositionRef.current = { x: event.clientX, y: event.clientY };
                pointerGroupRef.current = group.id;
                if (!hoverSuppressedRef.current) setOpenMenu(group.id);
              }}
              onPointerMove={(event) => {
                pointerPositionRef.current = { x: event.clientX, y: event.clientY };
              }}
              onPointerLeave={(event) => {
                pointerGroupRef.current = null;
                setOpenMenu(null);
                const origin = suppressionOriginRef.current;
                if (hoverSuppressedRef.current && origin && Math.hypot(event.clientX - origin.x, event.clientY - origin.y) >= 12) {
                  hoverSuppressedRef.current = false;
                  suppressionOriginRef.current = null;
                  setDropdownSuppressed(false);
                }
              }}
              onFocus={() => {
                hoverSuppressedRef.current = false;
                suppressionOriginRef.current = null;
                setDropdownSuppressed(false);
                setOpenMenu(group.id);
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
              }}
            >
              <button
                className="nav-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === group.id}
                aria-controls={`nav-menu-${group.id}`}
                onClick={() => {
                  hoverSuppressedRef.current = false;
                  suppressionOriginRef.current = null;
                  setDropdownSuppressed(false);
                  setOpenMenu(openMenu === group.id ? null : group.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpenMenu(null);
                    event.currentTarget.blur();
                  }
                }}
              >
                {group.label}
                <span className="nav-chevron" aria-hidden="true" />
              </button>
              <div className="nav-menu" id={`nav-menu-${group.id}`}>
                <span className="nav-menu-label">Explore {group.label.toLowerCase()}</span>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className={`nav-menu-link${activePath === link.href ? " is-current" : ""}`} aria-current={activePath === link.href ? "page" : undefined} onClick={() => setOpenMenu(null)}>
                    <span>{link.label}</span>
                    <span className="action-glyph">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/about/" className={`nav-trigger${pageContext?.divisionId === "company" ? " is-active" : ""}`} aria-current={currentPath === "/about/" ? "page" : undefined}>About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="glo-button hidden sm:inline-flex">
            <Link href="/book-a-demo/" aria-current={currentPath === "/book-a-demo/" ? "page" : undefined}>Book a demo <span className="action-glyph">↗</span></Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mobile-menu-button lg:hidden" aria-label="Open menu">
                <span className="menu-lines" aria-hidden="true"><i /><i /><i /></span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="mobile-sheet border-0 px-6 pb-8 pt-7">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="mobile-brand-family border-b border-white/10 pb-6">
                <a href={LANTERN_HOME} className="mobile-lantern-link" aria-label="Lantern Global home">
                  <img src={LANTERN_LOGO} alt="Lantern" className="mobile-lantern-mark" />
                </a>
                <span className="mobile-brand-divider" aria-hidden="true" />
                <Link href="/" className="mobile-glo-link" aria-label="Glo home" onClick={() => setMobileOpen(false)}>
                  <img src={LOGO} alt="Glo" className="mobile-brand-mark" />
                </Link>
              </div>
              <div className="mt-6 space-y-7 overflow-y-auto pb-8">
                {navGroups.map((group) => (
                  <section key={group.label}>
                    <p className={`mobile-nav-group-title${pageContext?.divisionId === group.id ? " is-active" : ""}`}>{group.label}</p>
                    <div className="space-y-1">
                      {group.links.map((link) => (
                        <button key={link.href} onClick={() => go(link.href)} className={`mobile-nav-link${activePath === link.href ? " is-current" : ""}`} type="button" aria-current={activePath === link.href ? "page" : undefined}>
                          {link.label}<span className="action-glyph">↗</span>
                        </button>
                      ))}
                    </div>
                  </section>
                ))}
                <button onClick={() => go("/about/")} className={`mobile-nav-link${pageContext?.divisionId === "company" ? " is-current" : ""}`} type="button" aria-current={currentPath === "/about/" ? "page" : undefined}>About<span className="action-glyph">↗</span></button>
                <Button onClick={() => go("/book-a-demo/")} className="glo-button mt-4 w-full">Book a demo <span className="action-glyph">↗</span></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {pageContext && (
        <nav className="page-context-bar" aria-label={`${pageContext.divisionLabel} page navigation`}>
          <div className="container page-context-inner">
            <div className="page-context-location">
              <span>{pageContext.divisionLabel}</span>
              <i aria-hidden="true" />
              <strong>{pageContext.pageLabel}</strong>
            </div>
            {pageContext.siblingLinks.length > 0 && (
              <div className="page-context-links">
                {pageContext.siblingLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={`page-context-link${activePath === link.href ? " is-current" : ""}`} aria-current={activePath === link.href ? "page" : undefined}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
