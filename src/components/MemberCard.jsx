import Image from "next/image";
import React from "react";

function MemberCard({ name, designation, imageUrl, linkedin }) {
  return (
    <div className="member-card">
      <div className="image-wrapper">
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="photo"
            priority
          />
        ) : (
          <img alt="photo" />
        )}
      </div>
      <div className="member-det">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
      {linkedin !== "no acc" && <a href={linkedin} target="_blank">
        <img className="linkedin" src="/linkedin.svg" alt="linkedin" />
      </a>}
    </div>
  );
}

export default MemberCard;
