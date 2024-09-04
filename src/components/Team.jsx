import React from "react";
import "./App.css";
import MembersPage from "./MembersPage";
import ParticlesComponent from "./components/particles";
import { useNavigate } from "react-router-dom";
import "./team.scss";

function Team() {
    const navigate = useNavigate()

    function goBack() {
        navigate('/')
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
