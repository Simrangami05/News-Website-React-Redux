import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d2e04e5f5c449dfb35209aa85cd4cec&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(75);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - Honest News Hub`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  // commented lines below are for previous and next button if you want to keep
  // const handlePreviousClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=3d2e04e5f5c449dfb35209aa85cd4cec&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center my-4">
        Honest News Hub - Latest {capitalizeFirstLetter(props.category)}{" "}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4 my-2" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 155)
                        : ""
                    }
                    content={
                      element.content ? element.content.slice(0, 65) : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    PublishedTime={element.publishedAt}
                    Source={element.source.name}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      \
      {/* commented lines below are for previous and next button if you want to keep */}
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            className="btn btn-primary btn-dark"
            type="submit"
            onClick={handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn btn-primary btn-dark"
            type="submit"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  pageSize: 12,
  country: "us",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
