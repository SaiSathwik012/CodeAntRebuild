import React from "react";
import { FiDatabase } from "react-icons/fi"
function RepositoryItem({ repo }) {
  return (
    <div className="repository-item">
      <div className="repo-header">
        <div className="repo-name">
          {repo.name}
          <span className="repo-visibility">{repo.visibility}</span>
        </div>
      </div>
      <div className="repo-details">
        <span>{repo.language} <div style={{  height: "10px",
  width: "10px",
  backgroundColor: "#1570EF",
  borderRadius: "50%",
  display: "inline-block"}}></div></span>
        <span><FiDatabase />{repo.size}</span>
        <span>Updated {repo.updated}</span>
      </div>
    </div>
  );
}

export default RepositoryItem;
