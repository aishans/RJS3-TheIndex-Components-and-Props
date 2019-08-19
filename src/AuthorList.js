import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
    const authorsList = props.authors.map(author =>(
        <AuthorCard author={author} />
        <
    ))
  return (
        <div>className= "content col-10</div>
            <div>className= "authors"</div>
                <h3>Authors</h3>
                <div> className = "row"{authorsList}</div>
        
    );
  );
}
export default AuthorList;
