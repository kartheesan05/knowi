import Image from "next/image";
import React from "react";

function MemberCard({ name, designation, imageUrl }) {
  return (
    <div className="member-card">
      <div className="image-wrapper">
        <Image src={imageUrl} width={250} height={250} alt="photo" priority />
      </div>
      <div className="member-det">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
      <a href="https://linkedin.com" target="_blank">
        <img className="linkedin" src="/linkedin.svg" alt="linkedin" />
      </a>
    </div>
  );
}

export default MemberCard;
