/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
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
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={disasterObj.image} alt={disasterObj.disasterName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{disasterObj.disasterName}</Card.Title>
        <Link href={`/disaster/${disasterObj.id}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/disaster/edit/${disasterObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteADisaster} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
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
