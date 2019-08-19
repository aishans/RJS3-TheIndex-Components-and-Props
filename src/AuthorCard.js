import React from "react";

function AuthorCard() {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={props.authors[2].imageUrl}
            alt={props.authors[2].first_name + " " + props.authors[2].last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>
              {props.authors[2].first_name + " " + props.authors[2].last_name}
            </span>
          </h5>
          <small className="card-text">
            {props.authors[2].books.length} books
          </small>
        </div>
      </div>
    </div>
  );
}
export default AuthorCard;
