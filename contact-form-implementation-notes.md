# Contact and demo form implementation notes

The homepage final CTA opens `/contact/`. Book a Demo remains the primary product action in the Lantern | Glo header and on product pages.

The Contact Us page reuses the Book a Demo page’s focused, asymmetric form composition but uses contact-specific fields. Visitors can identify the inquiry as general, current-customer, product, integration, partnership or media, privacy, security-program, or responsible-disclosure. The selected inquiry type remains available as confirmation context.

Both public forms now use polished customer-facing confirmation states. They do not reveal the internal inbox address, include hidden recipient fields, display routing panels, or mention preview and staging infrastructure. The form-bottom note links to the Privacy Policy and asks visitors not to include sensitive personal or candidate data.

The current static frontend validates form interactions and confirmation behavior, but it does not contain a secure server-side delivery endpoint. Production delivery still requires a server-side email handler, a verified sending domain, abuse controls, failure handling, and duplicate-submit protection. A client-side email draft is not used because it would expose the destination and depend on the visitor’s email application.
