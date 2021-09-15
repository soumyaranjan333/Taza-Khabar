import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="col">
        <div className="card h-100">
          <img
            src={
              !imageUrl
                ? "https://ak.picdn.net/shutterstock/videos/14402038/thumb/1.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{
                  left: "81%",
                  zIndex:1
                }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end">
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-sm "
              >
                Read More..
              </a>{" "}
            </div>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
