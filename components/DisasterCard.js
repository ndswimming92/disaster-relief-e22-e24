/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleDisaster } from '../api/disasterData';

function DisasterCard({ disasterObj, onUpdate }) {
  const deleteADisaster = () => {
    if (window.confirm(`Do you want to delete ${disasterObj.disasterName}?`)) {
      deleteSingleDisaster(disasterObj.id).then(() => onUpdate());
    }
  };

  return (
    <div className="d-flex bg-white p-2 w-100">
      <div className="bg-white">
        <Image src={`http://localhost:3000/${disasterObj.image}.png`} width={150} height={150} priority />
      </div>
      <Card style={{ width: '15rem' }} className="rounded-0 border-0 w-75">
        <Card.Body>
          <Card.Title>{disasterObj.disasterName}</Card.Title>
          <Card.Text>{disasterObj.description}</Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex flex-column justify-content-center gap-2 ms-5 me-2">
        <Link href={`/Disaster/${disasterObj.id}`} passHref>
          <Button variant="secondary">Details</Button>
        </Link>
        <Link href={`/Disaster/edit/${disasterObj.id}`} passHref>
          <Button className="bg-dark bg-opacity-75 border-0">Edit</Button>
        </Link>
        <Button variant="dark" onClick={deleteADisaster}>
          Delete
        </Button>

      </div>
    </div>
  );
}

DisasterCard.propTypes = {
  disasterObj: PropTypes.shape({
    image: PropTypes.string,
    disasterName: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    severity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,

};

export default DisasterCard;
