import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorCard from "./AuthorCard";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <Sidebar />
        <AuthorList authors={authors} />
        <AuthorCard />
      </div>
      /
    </div>
  );
}

export default App;
