import React from "react";

const NewsItem = (props) => {
  const fallbackImage =
    "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg";

  let {
    title,
    description,
    imageUrl,
    newsUrl,
    PublishedTime,
    Source,
    author,
    content,
  } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "22rem" }}>
        <img
          src={imageUrl || fallbackImage}
          className="card-img-top"
          style={{ height: "15rem", width: "22rem" }}
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">Content: {content}...</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated: {new Date(PublishedTime).toGMTString()}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              Source: {Source || "Wikipedia"}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">Author: {author || "unknown"}</small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
