import { Link, useLocation } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const EFFECTIVE_DATE = "September 17, 2026";

const legalPages = [
  ["Privacy Policy", "/privacy/"],
  ["Security", "/security/"],
  ["Terms of Service", "/terms/"],
] as const;

function EmailLink({ children, address }: { children?: React.ReactNode; address: string }) {
  return <a href={`mailto:${address}`}>{children ?? address}</a>;
}

function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function LegalNavigation({ currentPath }: { currentPath: string }) {
  return (
    <nav className="legal-page-navigation" aria-label="Legal pages">
      {legalPages.map(([label, href]) => (
        <Link key={href} href={href} aria-current={currentPath === href ? "page" : undefined}>{label}</Link>
      ))}
    </nav>
  );
}

function TermsContent() {
  return (
    <>
      <p>These Terms of Service (“Terms”) govern your use of the website located at <a href="https://helloglo.com">https://helloglo.com</a> (the “Site”), operated by Lantern LLC, together with its affiliates Lantern BRP, LLC and Lantern BRP Labs, LLC (collectively, “Lantern,” “we,” “us,” or “our”). By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.</p>
      <p>These Terms apply only to your use of this marketing website. Use of Lantern’s software products or services is governed by a separate written agreement between you (or your organization) and Lantern, and to the extent of any conflict, that agreement controls with respect to the applicable product or service.</p>

      <LegalSection id="eligibility" title="1. Eligibility">
        <p>You must be at least 18 years old, and have the legal capacity to enter into a binding agreement, to submit information through any form on the Site (e.g., a demo request or newsletter sign-up) or to otherwise enter into these Terms as a binding agreement. Individuals under 18 may view informational content on the Site.</p>
      </LegalSection>
      <LegalSection id="changes" title="2. Changes to the Site and These Terms">
        <p>We may modify, suspend, or discontinue the Site, or any part of it, at any time. We may also update these Terms from time to time; continued use of the Site after changes take effect constitutes your acceptance of the revised Terms. The “Effective Date” above reflects the date of the most recent revision.</p>
      </LegalSection>
      <LegalSection id="use" title="3. Use of the Site">
        <p>You may use the Site for lawful purposes related to learning about Lantern and its offerings. You agree not to:</p>
        <ul>
          <li>Access the Site through automated means (e.g., scraping, bots, or scripts) except as permitted by a published robots.txt file;</li>
          <li>Attempt to gain unauthorized access to the Site or any related systems or networks;</li>
          <li>Interfere with or disrupt the operation of the Site;</li>
          <li>Upload or transmit viruses, malware, or other harmful code; or</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
        </ul>
      </LegalSection>
      <LegalSection id="submissions" title="4. User Submissions and Feedback">
        <p>If you submit feedback, ideas, or suggestions through the Site, you grant Lantern a perpetual, irrevocable, royalty-free license to use them for any purpose, without obligation or compensation to you. Do not submit anything through the Site that you consider confidential or proprietary.</p>
      </LegalSection>
      <LegalSection id="intellectual-property" title="5. Intellectual Property">
        <p>All content on the Site, including text, graphics, logos, and images, is owned by Lantern or its licensors and is protected by intellectual property laws. Except as expressly permitted, you may not copy, reproduce, distribute, or create derivative works from Site content without our prior written consent.</p>
      </LegalSection>
      <LegalSection id="trademarks" title="6. Trademarks">
        <p>LANTERN and associated logos are trademarks of Lantern LLC and its affiliates Lantern BRP, LLC and Lantern BRP Labs, LLC. Other trademarks appearing on the Site are the property of their respective owners.</p>
      </LegalSection>
      <LegalSection id="third-party-links" title="7. Third-Party Links">
        <p>The Site may link to third-party websites that are not owned or controlled by Lantern. We are not responsible for the content or practices of any linked third-party site.</p>
      </LegalSection>
      <LegalSection id="professional-advice" title="8. No Professional Advice">
        <p>Content on the Site is provided for general informational purposes only and does not constitute legal, financial, tax, or other professional advice.</p>
      </LegalSection>
      <LegalSection id="warranties" title="9. Disclaimer of Warranties">
        <p className="legal-uppercase">THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>
      </LegalSection>
      <LegalSection id="liability" title="10. Limitation of Liability">
        <p className="legal-uppercase">TO THE FULLEST EXTENT PERMITTED BY LAW, LANTERN AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      </LegalSection>
      <LegalSection id="indemnification" title="11. Indemnification">
        <p>You agree to indemnify and hold Lantern harmless from any claims, damages, or expenses (including reasonable attorneys’ fees) arising out of your violation of these Terms or misuse of the Site.</p>
      </LegalSection>
      <LegalSection id="copyright" title="12. Copyright Complaints">
        <p>If you believe content on the Site infringes your copyright, notify us at <EmailLink address="tobias.lederberg@lanternglobal.ai" /> with a description of the work claimed to be infringed, the material you believe is infringing, and your contact information.</p>
      </LegalSection>
      <LegalSection id="export" title="13. Export Compliance">
        <p>You agree to comply with all applicable export control and trade sanctions laws in connection with your access to and use of the Site.</p>
      </LegalSection>
      <LegalSection id="governing-law" title="14. Governing Law and Venue">
        <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws principles, and without regard to the United Nations Convention on Contracts for the International Sale of Goods. Any dispute not otherwise resolved will be brought exclusively in the state or federal courts located in Delaware, and you consent to personal jurisdiction there.</p>
      </LegalSection>
      <LegalSection id="severability" title="15. Severability">
        <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</p>
      </LegalSection>
      <LegalSection id="no-waiver" title="16. No Waiver">
        <p>Our failure to enforce any provision of these Terms is not a waiver of our right to do so later.</p>
      </LegalSection>
      <LegalSection id="assignment" title="17. Assignment">
        <p>You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</p>
      </LegalSection>
      <LegalSection id="entire-agreement" title="18. Entire Agreement">
        <p>These Terms, together with our <Link href="/privacy/">Privacy Policy</Link>, constitute the entire agreement between you and Lantern regarding use of the Site.</p>
      </LegalSection>
      <LegalSection id="force-majeure" title="19. Force Majeure">
        <p>We will not be liable for any failure or delay in performance resulting from causes beyond our reasonable control.</p>
      </LegalSection>
      <LegalSection id="contact" title="20. Contact">
        <p>Questions about these Terms can be directed to <EmailLink address="tobias.lederberg@lanternglobal.ai" />.</p>
      </LegalSection>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <p>Lantern LLC, together with its affiliates Lantern BRP, LLC and Lantern BRP Labs, LLC (collectively, “Lantern,” “we,” “us,” or “our”), operates the website located at <a href="https://helloglo.com">https://helloglo.com</a> (the “Site”). This Privacy Policy describes how we collect, use, and share personal information in connection with the Site.</p>
      <p>This Policy does not apply to information processed through Lantern’s software products or services on behalf of our business customers. That processing is governed by the applicable customer agreement.</p>

      <section className="legal-summary" aria-labelledby="privacy-summary-title">
        <h2 id="privacy-summary-title">Summary of Key Points</h2>
        <ul>
          <li><strong>What information do we collect?</strong> Information you provide through contact, demo-request, or newsletter forms, and basic technical information collected automatically when you visit the Site.</li>
          <li><strong>Do we process sensitive personal information?</strong> No.</li>
          <li><strong>Do we sell your information?</strong> No.</li>
          <li><strong>Do we use visitor information to train AI models?</strong> No.</li>
          <li><strong>What are your privacy rights?</strong> You may request access to, correction of, or deletion of your information, and opt out of marketing communications, by contacting us.</li>
        </ul>
      </section>

      <LegalSection id="information" title="1. Information We Collect">
        <p><strong>In short:</strong> we collect what you give us directly, and basic technical information automatically.</p>
        <div className="legal-table-wrap">
          <table>
            <thead><tr><th>Category</th><th>Examples</th><th>Source</th></tr></thead>
            <tbody>
              <tr><td>Identifiers</td><td>Name, email address, phone number</td><td>You, directly</td></tr>
              <tr><td>Commercial/professional information</td><td>Company name, job title</td><td>You, directly</td></tr>
              <tr><td>Internet or network activity</td><td>IP address, browser/device type, pages viewed</td><td>Automatic</td></tr>
            </tbody>
          </table>
        </div>
        <p>We do not knowingly collect sensitive personal information (health, biometric, government ID numbers, precise geolocation) through the Site.</p>
      </LegalSection>
      <LegalSection id="use" title="2. How We Use Information">
        <p><strong>In short:</strong> to respond to you, run the Site, and communicate with you.</p>
        <p>We use personal information to respond to inquiries, operate and secure the Site, send marketing communications (you can opt out at any time), and comply with legal obligations.</p>
      </LegalSection>
      <LegalSection id="ai" title="3. Artificial Intelligence">
        <p><strong>In short:</strong> we do not use Site visitor data to train AI models.</p>
        <p>We do not use personal information submitted through this Site to train, fine-tune, or otherwise improve any large language model or other generative AI system, whether developed by Lantern or a third party.</p>
      </LegalSection>
      <LegalSection id="sharing" title="4. How We Share Information">
        <p><strong>In short:</strong> with service providers who help us run the Site, and when required by law. We do not sell your information.</p>
        <p>We may share personal information with vendors and service providers who perform functions on our behalf (e.g., hosting, email delivery, analytics), and where required by law or to protect the rights, property, or safety of Lantern or others. We do not sell personal information.</p>
      </LegalSection>
      <LegalSection id="cookies" title="5. Cookies and Tracking Technologies">
        <p><strong>In short:</strong> we use standard cookies to operate and understand use of the Site.</p>
        <p>The Site uses cookies and similar technologies. You can control cookies through your browser settings. We do not currently respond to Do Not Track or Global Privacy Control browser signals, as no uniform technology standard has been finalized. The Site does not run advertising or retargeting pixels.</p>
      </LegalSection>
      <LegalSection id="retention-security" title="6. Data Retention and Security">
        <p><strong>In short:</strong> we keep information as long as needed, and take reasonable steps to protect it.</p>
        <p>We retain personal information for as long as necessary for the purposes described in this Policy. We maintain reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is completely secure. Additional detail about our security program is available on our <Link href="/security/">Security page</Link>.</p>
      </LegalSection>
      <LegalSection id="children" title="7. Children’s Privacy">
        <p>We do not knowingly collect personal information from children under 13, and the Site is not directed to children.</p>
      </LegalSection>
      <LegalSection id="rights" title="8. Your Privacy Rights">
        <p><strong>In short:</strong> you can ask us to access, correct, or delete your information, and opt out of marketing, by contacting us.</p>
        <p>You may request access to, correction of, or deletion of the personal information we hold about you, and may opt out of marketing communications at any time using the unsubscribe link in any email or by contacting us directly. Depending on your state of residence, you may have additional rights under applicable law; contact us to make a request.</p>
      </LegalSection>
      <LegalSection id="international" title="9. International Users">
        <p>The Site is operated in the United States. If you access the Site from outside the United States, your information will be transferred to, stored, and processed in the United States.</p>
      </LegalSection>
      <LegalSection id="third-party-links" title="10. Third-Party Links">
        <p>The Site may link to third-party websites. We are not responsible for the privacy practices of those sites.</p>
      </LegalSection>
      <LegalSection id="changes" title="11. Changes to This Policy">
        <p>We may update this Policy from time to time. The “Effective Date” above reflects the date of the most recent revision.</p>
      </LegalSection>
      <LegalSection id="contact" title="12. Contact Us">
        <p>Questions about this Policy can be directed to <EmailLink address="tobias.lederberg@lanternglobal.ai" />.</p>
      </LegalSection>
    </>
  );
}

function SecurityContent() {
  return (
    <>
      <p>Protecting the information entrusted to us by our customers, partners, and website visitors is a priority at Lantern LLC and its affiliates Lantern BRP, LLC and Lantern BRP Labs, LLC. This page describes the key elements of our security program. If you are evaluating Lantern as a vendor and need more detail than is appropriate to publish here, contact us at <EmailLink address="archana.haran@lanternglobal.ai" />. We’re glad to walk through our program directly, and additional documentation (including our SOC 2 materials, once available) can be shared under NDA.</p>

      <LegalSection id="governance" title="Governance">
        <p>Our security program is overseen at the executive level and is built around written information security policies covering access control, data classification, incident response, and vendor risk management. We conduct a risk assessment of our systems and practices at least annually.</p>
      </LegalSection>
      <LegalSection id="data-protection" title="Data Protection">
        <ul>
          <li><strong>Encryption in transit.</strong> Data transmitted between your browser or systems and Lantern is encrypted using TLS.</li>
          <li><strong>Encryption at rest.</strong> Data stored in our production systems is encrypted at rest.</li>
          <li><strong>Data classification.</strong> We classify data based on sensitivity and apply handling controls accordingly.</li>
        </ul>
      </LegalSection>
      <LegalSection id="access-control" title="Access Control">
        <ul>
          <li>Access to production systems and customer data is granted on a least-privilege, role-based basis.</li>
          <li>Multi-factor authentication (MFA) is enforced for administrative and internal system access.</li>
          <li>Access is reviewed periodically and revoked promptly upon role change or termination.</li>
        </ul>
      </LegalSection>
      <LegalSection id="infrastructure" title="Infrastructure and Application Security">
        <ul>
          <li>Our infrastructure is hosted with AWS and other cloud providers, and we rely on our providers’ physical and environmental security controls for our hosting environment.</li>
          <li>We follow a secure development process that includes code review prior to deployment.</li>
          <li>We conduct periodic vulnerability scanning and third-party penetration testing.</li>
        </ul>
      </LegalSection>
      <LegalSection id="vendors" title="Vendor and Subprocessor Management">
        <p>We evaluate the security and privacy practices of service providers and subprocessors before engagement and on an ongoing basis, and we require appropriate contractual data-protection commitments from them.</p>
      </LegalSection>
      <LegalSection id="personnel" title="Personnel Security">
        <ul>
          <li>Employees and contractors with access to sensitive systems are subject to confidentiality obligations.</li>
          <li>Security awareness training is provided at onboarding and on a periodic basis thereafter.</li>
        </ul>
      </LegalSection>
      <LegalSection id="incident-response" title="Incident Response and Business Continuity">
        <p>We maintain a documented process for identifying, investigating, and responding to potential security incidents, including internal escalation procedures and, where required by law or contract, notification to affected customers or regulators.</p>
      </LegalSection>
      <LegalSection id="assessment" title="Independent Assessment">
        <p>Lantern has completed a SOC 2 Type I examination of its security controls. A SOC 2 Type II examination is currently in progress. Summary information or the applicable report is available to customers and prospective customers under NDA upon request.</p>
      </LegalSection>
      <LegalSection id="disclosure" title="Responsible Disclosure">
        <p>If you believe you have discovered a security vulnerability affecting Lantern’s systems, please report it to <EmailLink address="tobias.lederberg@lanternglobal.ai" />, including a description of the issue and steps to reproduce it.</p>
        <p>We ask that you:</p>
        <ul>
          <li>Give us a reasonable opportunity to investigate and remediate an issue before disclosing it publicly;</li>
          <li>Avoid accessing, modifying, or deleting data belonging to others; and</li>
          <li>Avoid any action that could disrupt or degrade our services, including automated scanning that generates significant load.</li>
        </ul>
        <p>We will not pursue legal action against researchers who make a good-faith effort to comply with this policy.</p>
      </LegalSection>
      <LegalSection id="contact" title="Contact">
        <p>Security questions, and vulnerability reports, can be directed to <EmailLink address="archana.haran@lanternglobal.ai" />.</p>
      </LegalSection>
    </>
  );
}

const pageConfig = {
  "/terms/": {
    title: "Terms of Service",
    metaTitle: "Terms of Service | Glo by Lantern",
    description: "Terms governing use of the Glo by Lantern marketing website.",
    effectiveDate: EFFECTIVE_DATE,
    content: <TermsContent />,
  },
  "/privacy/": {
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | Glo by Lantern",
    description: "How Lantern collects, uses, and shares personal information through the Glo marketing website.",
    effectiveDate: EFFECTIVE_DATE,
    content: <PrivacyContent />,
  },
  "/security/": {
    title: "Security",
    metaTitle: "Security | Glo by Lantern",
    description: "Key elements of Lantern’s security program, including governance, data protection, access control, assessment, and responsible disclosure.",
    effectiveDate: null,
    content: <SecurityContent />,
  },
} as const;

export default function LegalPage() {
  const [location] = useLocation();
  const rawPath = location.split(/[?#]/)[0];
  const path = (rawPath.endsWith("/") ? rawPath : `${rawPath}/`) as keyof typeof pageConfig;
  const page = pageConfig[path] ?? pageConfig["/privacy/"];

  return (
    <div className="glo-site legal-site">
      <PageMeta title={page.metaTitle} description={page.description} path={path} />
      <SiteHeader />
      <main className="legal-page">
        <header className="legal-hero">
          <div className="container legal-hero-inner">
            <h1>{page.title}</h1>
            {page.effectiveDate && <p className="legal-effective-date"><strong>Effective Date:</strong> {page.effectiveDate}</p>}
            <LegalNavigation currentPath={path} />
          </div>
        </header>
        <div className="legal-reading-ground">
          <article className="container legal-document">
            <div className="legal-document-inner">{page.content}</div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
