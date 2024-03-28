import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
          }}
        >
          <span className="badge rounded-pill bg-warning">{source}</span>
        </div>
        <img
          src={imageUrl ? imageUrl : "https://images.wsj.net/im-906486/social"}
          className="img-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>

          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By - {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-outline-dark"
          >
            {" "}
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
