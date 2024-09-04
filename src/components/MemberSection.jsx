import React, { useState, useEffect } from "react";
import MemberCard from "./MemberCard";
import membersData from "@/members.json";

function MemberSection({ section }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(membersData);
  }, []);

  const imageHost =
    "https://raw.githubusercontent.com/kartheesan05/knowi/80d8b37b2be240797b4838d2cf02aa5e3a0a1851/public/photos/";

  return (
    <div id={section} className="member-section">
      <div className="member-text-box">
        <h1>{section}</h1>
      </div>
      {members.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          designation={member.designation}
          imageUrl={imageHost + member.pic}
        />
      ))}
    </div>
  );
}

export default MemberSection;
