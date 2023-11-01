/* eslint-disable */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { useAuth } from '../../utils/context/authContext';
import { getAllDisasters } from '../../api/disasterData';
import { createItem } from '../../api/itemData';

const initialState = {
  itemName: '',
  count: '',
  id: null,
};
// this is a comment
function ItemForm({ itemObj }) {
  const [items, setItems] = useState([]);
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  useEffect(() => {
    getAllDisasters(user.uid).then(setItems);

    if (itemObj.id) setFormInput(itemObj);
  }, [itemObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput };
    console.warn('Payload: ', payload);
    createItem(payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput1" label="Enter the donation Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the donation Name"
          name="itemName"
          value={formInput.itemName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Enter the amount in which you would be willing to donate" className="mb-3">
        <Form.Control
          type="text"
          placeholder="If giving currency please use USD"
          name="count"
          value={formInput.count}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Categories">
        <Form.Select
          aria-label="Categories"
          name="categoryId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.categoryId} // FIXME: modify code to remove error
          required
        >
          <option value="">Select a category to put this Item on</option>
          {
            items.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.categoryName}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <div>
        <Button type="submit" variant="outline-warning" style={{ marginBottom: '30px' }}>{itemObj.id ? 'Update' : 'Post'} Your Donation Item</Button>
      </div>
    </Form>
  );
}

ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    itemName: PropTypes.string,
    count: PropTypes.string,
    id: PropTypes.number,
  }),

};

ItemForm.defaultProps = {
  itemObj: initialState,

};

export default ItemForm;
