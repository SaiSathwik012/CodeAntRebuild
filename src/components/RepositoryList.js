import React from "react";
import RepositoryItem from "./RepositoryItem";
import Button from "@mui/material/Button"; 
;

const repositories = [
  { name: "design-system", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Public</Button>, language: "React", size: "7320 KB", updated: "1 day ago" },
  { name: "codeant-ci-app", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Private</Button>, language: "JavaScript", size: "5871 KB", updated: "2 days ago" },
  { name: "analytics-dashboard", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Private</Button>, language: "Python", size: "4521 KB", updated: "5 days ago" },
  { name: "mobile-app", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Public</Button>, language: "Swift", size: "3096 KB", updated: "3 days ago" },
  { name: "e-commerce-platform", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Private</Button>, language: "Java", size: "6210 KB", updated: "6 days ago" },
  { name: "blog-website", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Public</Button>, language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
  { name: "social-network", visibility: <Button variant="outlined" size="small" style={{  fontSize: "0.7rem", padding: "1px 2px" , borderRadius:"10px"}}>Private</Button>, language: "PHP", size: "5432 KB", updated: "7 days ago" },
];

function RepositoryList() {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <RepositoryItem key={index} repo={repo} />
      ))}
    </div>
  );
}

export default RepositoryList;
