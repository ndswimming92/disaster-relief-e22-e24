import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createDisaster, updateDisaster } from '../../api/disasterData';
// import { useAuth } from '../../utils/context/authContext';

const intialState = {
  disasterName: '',
  image: '',
  description: '',
  location: '',
  severity: 0,
};

function DisasterForm({ disasterObj }) {
  const [formInput, setFormInput] = useState(intialState);
  const router = useRouter();

  useEffect(() => {
    if (disasterObj.id) {
      setFormInput(disasterObj);
    }
  }, [disasterObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (disasterObj.id) {
      updateDisaster(formInput).then(() => router.push('/disaster'));
    } else {
      const payload = { ...formInput };
      createDisaster(payload).then(router.push('/disaster'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-dark bg-opacity-75 p-4 rounded-3 text-white mt-4">
        <Form.Group className="mb-3" controlId="disasterName">
          <Form.Label>Disaster Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Name"
            name="disasterName"
            value={formInput.disasterName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Description"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Location"
            name="location"
            value={formInput.location}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="severity">
          <Form.Label>Severity (1 - 5 : least to greatest impact)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Severity"
            name="severity"
            value={formInput.severity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="image"
            value={formInput.image}
            onChange={handleChange}
          >
            <option>Select Image</option>
            <option value="tornado">Tornado</option>
            <option value="housefire">Housefire</option>
            <option value="flood">Flood</option>
            <option value="wildfire">Wildfire</option>
            <option value="hurricane">Hurricane</option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" className="mt-3 py-2 px-4 border-2 border-light" type="submit">
          {disasterObj.id ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </>
  );
}

DisasterForm.propTypes = {
  disasterObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    severity: PropTypes.number,
    id: PropTypes.number,
  }),
};

DisasterForm.defaultProps = {
  disasterObj: intialState,
};

export default DisasterForm;
