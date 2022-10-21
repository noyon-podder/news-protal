import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, author, image_url, details, rating, category_id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <div>
          <div className="d-flex align-items-center justify-content-between my-4">
            <h6 className="fw-bold mb-0">
              <b>Author : </b>
              {author?.name}
            </h6>
            <span className="text-muted">
              <b>Published Date: </b>
              {author?.published_date}
            </span>
            <div>
              <FaStar className="text-warning me-2"></FaStar>
              <span>{rating?.number}</span>
            </div>
          </div>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
