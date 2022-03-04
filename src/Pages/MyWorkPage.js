import React from "react";
import APICaller from "../Data/APICaller";
import Table from "react-bootstrap/Table";

import "../css/my-work.css";

function MyWork() {
  const { projects, error, loading } = APICaller();

  if (loading) return <h1>Loading Data...</h1>;
  if (error) console.log(error);
  return (
    <div className="my-work__page">
      <div>
        <h1 className="my-work--title">My Projects</h1>
        <h4 className="my-work--subtitle">
          The table below pulls data from GitHubs API and updates as new Projects
          and new Repositories are added in GitHub
        </h4>
      </div>
      <Table striped bordered hover className="my-work__table">
        <thead>
          <tr className="my-work__table--items">
            <th>Project Name</th>
            <th>Language</th>
            <th>GitHub Repository</th>
          </tr>
        </thead>
        <tbody className="my-work__table--items">
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.language}</td>
              <td>
                <a href={project.html_url}>{project.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyWork;
