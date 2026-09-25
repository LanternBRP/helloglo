type TeamMember = {
  name: string;
  title: string;
};

const team: TeamMember[] = [
  { name: "Peter Tomassi", title: "Chief Executive Officer" },
  { name: "Ryan Stadlman", title: "Chief Creative Officer" },
  { name: "Archana Haran", title: "Director Technical Program Management" },
  { name: "Tyler Heinerikson", title: "Head of Product" },
  { name: "Steven Cable", title: "Senior Financial Analyst" },
  { name: "Ady Das", title: "Chief Technologist" },
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
            <article className="team-profile" key={member.name}>
              <div className="team-identity">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
