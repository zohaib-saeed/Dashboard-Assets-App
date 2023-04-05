import React, { useState } from "react";
import AllTeams from "./AllTeams";
import Team from "./Team";

const Organisation = ({ view, setView }) => {
  const [teamView, setTeamView] = useState("all-teams");
  return (
    <React.Fragment>
      {teamView === "all-teams" && (
        <AllTeams
          teamView={teamView}
          setTeamView={setTeamView}
          view={view}
          setView={setView}
        />
      )}
      {teamView === "team" && (
        <Team teamView={teamView} setTeamView={setTeamView} />
      )}
    </React.Fragment>
  );
};

export default Organisation;
