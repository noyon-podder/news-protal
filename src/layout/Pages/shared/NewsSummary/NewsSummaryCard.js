import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({news}) => {
    const {title, author, _id, total_view, image_url , details, rating} =news;
    console.log(news);
    return (
        <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className='d-flex justify-content-center align-items-center'>
          <Image src={author?.img} roundedCircle style={{height: '60px'}}></Image>
         <div className='ms-3'>
         <h6 className='fw-bold mb-0'>{author?.name}</h6>
          <span className="text-muted">{author?.published_date}</span>
         </div>
        </div>
        <div>
            <FaRegBookmark className="me-3"/>
            <FaShareAlt/>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className="my-3" variant="top" src={image_url} />
        <Card.Text>
         {
            details.length > 250 ?
            <p>{details.slice(0, 250) + '...'} <Link to={`news/${_id}`}>Read More</Link></p>
             :
             <p>{details}</p>
         }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center'>
        <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>

        <div className='d-flex align-items-center'>
            <FaRegEye className='me-2'></FaRegEye>
            <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsSummaryCard;