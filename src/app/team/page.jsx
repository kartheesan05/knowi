"use client";

import { useRouter } from "next/navigation";
import MembersPage from "@/components/MembersPage";
import ParticlesComponent from "@/components/particles";

function Team() {
  const router = useRouter();

  function goBack() {
    router.push("/");
  }

  return (
    <>
      <div className="back-button" onClick={goBack}>
        <span>Back</span>
      </div>
      <ParticlesComponent id="particles" />
      <MembersPage />
    </>
  );
}

export default Team;
