import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createDisaster, updateDisaster } from '../../api/disasterData';
import { useAuth } from '../../utils/context/authContext';

const intialState = {
  image: '',
  name: '',
  description: '',
  location: '',
  severity: '',
};

function DisasterForm({ disasterObj }) {
  const [formInput, setFormInput] = useState(intialState);
  const router = useRouter();
  const { user } = useAuth();

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
      updateDisaster(formInput).then(() => router.push(`/disaster/${disasterObj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createDisaster(payload).then(({ name }) => {
        const patchPayload = { id: name };

        updateDisaster(patchPayload).then(() => {
          router.push('/disaster');
        });
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Disaster Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Severity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Severity"
            name="severity"
            value={formInput.severity}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {disasterObj.id ? 'Update Disaster' : 'Submit Disaster'}
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
    severity: PropTypes.bool,
    id: PropTypes.string,
  }),
};

DisasterForm.defaultProps = {
  disasterObj: intialState,
};

export default DisasterForm;
