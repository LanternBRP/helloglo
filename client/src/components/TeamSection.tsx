/**
 * Operational Signal Desk team section: editorial rows, warm-white ground,
 * thin Cyn rules, and typographic portrait placeholders until photography arrives.
 */
type TeamMember = {
  name: string;
  title: string;
  initials: string;
  discipline: string;
  bio?: string[];
};

const team: TeamMember[] = [
  {
    name: "Peter Tomassi",
    title: "Chief Executive Officer",
    initials: "PT",
    discipline: "Product / Growth",
    bio: [
      "Peter is a product and growth executive whose career has focused on using emerging technology to rethink established industries and customer experiences. His work has spanned early interactive content with Apple and Microsoft, SaaS product development at EducationDynamics, and growth leadership with technology marketplaces including Redbubble and Zazzle.",
      "At Glo, Peter brings product innovation, growth, data science, and applied intelligence to staffing and recruiting. He leads the product experience across recruiters, candidates, and clients, turning fragmented workflows and data into faster, better-informed decisions. Peter holds undergraduate and graduate degrees from Columbia University.",
    ],
  },
  { name: "Ryan Stadlman", title: "Chief Creative Officer", initials: "RS", discipline: "Creative" },
  {
    name: "Archana Haran",
    title: "Director Technical Program Management",
    initials: "AH",
    discipline: "Program Management",
    bio: [
      "Archana is Director of Technical Program Management at Lantern, where she leads high-impact programs and bridges business goals with execution. Earlier in her career, she worked around the world as a Senior Business Analyst, translating complex business requirements into enterprise technology that works. Her experience includes American Express, Deutsche Bank, National Grid, Honeywell Aerospace, and NASA.",
      "At Ellucian, Archana supported the Banner HR module, now Ellucian HCM. She led requirements-gathering sessions and workshops with HR and recruiting stakeholders, translated institutional hiring policies into system configurations, and trained end users as they adopted new recruiting workflows. That work gave her a practical understanding of recruiting technology in higher education, where faculty, staff, and student-worker hiring follow different approval processes, budget rules, and compliance requirements.",
      "Whether optimizing business processes, leading agile transformations, or executing large-scale marketing programs, Archana brings a data-driven, customer-focused, and impact-oriented approach.",
    ],
  },
  {
    name: "Tyler Heinerikson",
    title: "Head of Product",
    initials: "TH",
    discipline: "Product / Engineering",
    bio: [
      "Tyler is a product engineer, technology leader, and entrepreneur with experience across software development, SaaS, AI, product management, and business development. He combines hands-on engineering with product and business strategy, including practical work evaluating AI systems and incorporating emerging technology into real products.",
      "At Glo, Tyler translates product requirements into working technology, shapes system architecture, oversees development, and manages the platform’s technical execution. He previously founded and built CampConnect, giving him experience across the full lifecycle of turning an idea into a functioning SaaS business.",
    ],
  },
  { name: "Steven Cable", title: "Senior Financial Analyst", initials: "SC", discipline: "Finance" },
  { name: "Ady Das", title: "CTO", initials: "AD", discipline: "Technology" },
];

export default function TeamSection() {
  return (
    <section className="team-section" aria-labelledby="team-heading">
      <div className="container">
        <div className="team-heading-row">
          <h2 id="team-heading">People who turn complexity into product.</h2>
          <p>Product, engineering, AI, growth, and operating leadership focused on making staffing and recruiting work move more clearly.</p>
        </div>

        <div className="team-roster">
          {team.map((member) => (
            <article className={`team-profile${member.bio ? " has-bio" : " is-reserved"}`} key={member.name}>
              <div className="team-portrait" aria-hidden="true">
                <small>{member.discipline}</small>
                <span>{member.initials}</span>
              </div>
              <div className="team-identity">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
              {member.bio ? (
                <div className="team-bio">
                  {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              ) : (
                <div className="team-bio team-bio-reserved" aria-label={`${member.name} biography to be added`} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
