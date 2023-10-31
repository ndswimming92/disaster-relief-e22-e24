import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createItem } from '../../api/itemData';

const initialState = {
  disasterName: '',
  donationCategory: '',
  donationItem: '',
};

function ItemForm({ itemObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemObj.id) {
      const payload = { ...formInput };
      createItem(payload).then(router.push('/item'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>disaster</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Disaster Name"
            name="disasterName"
            value={formInput.disasterName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Donation Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Donation Category"
            name="donationCategory"
            value={formInput.donationCategory}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Donation Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Donation Item"
            name="donationItem"
            value={formInput.donationItem}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Item
        </Button>

      </Form>
    </>
  );
}

ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    disaster: PropTypes.string,
    donationCategory: PropTypes.string,
    donationItem: PropTypes.string,
    id: PropTypes.string,
  }),
};

ItemForm.defaultProps = {
  itemObj: initialState,
};
