import MemberCard from "./MemberCard";

function MemberSection({ section, data }) {
  

  const imageHost =
    "https://raw.githubusercontent.com/kartheesan05/knowi/80d8b37b2be240797b4838d2cf02aa5e3a0a1851/public/photos/";

  return (
    <div id={section} className="member-section">
      <div className="member-text-box">
        <h1>{section}</h1>
      </div>
      {data.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          designation={member.designation}
          imageUrl={member.pic ? imageHost + member.pic : null}
        />
      ))}
    </div>
  );
}

export default MemberSection;
