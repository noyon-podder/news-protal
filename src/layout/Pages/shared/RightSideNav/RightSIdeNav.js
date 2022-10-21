import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSIdeNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2 w-100" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin /> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarousel />
    </div>
  );
};

export default RightSIdeNav;
