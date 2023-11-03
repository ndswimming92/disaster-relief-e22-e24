/* eslint-disable */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { useAuth } from '../../utils/context/authContext';
import { getAllDisasters } from '../../api/disasterData';
import { addItemToDisaster } from '../../api/itemData';
import { getAllCategories } from '../../api/categoryData';

const initialState = {
  itemName: '',
  count: '',
};
// this is a comment
function ItemForm({ itemObj, disasterId }) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  console.warn('ID: ', disasterId);

  useEffect(() => {
    getAllDisasters(user.uid).then(setItems);

    if (itemObj.id) setFormInput(itemObj);
  }, [itemObj, user]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput };
    console.warn("Payload", payload);
    addItemToDisaster(payload, disasterId);
    setFormInput(initialState);
  };

  return (

    <Form className="bg-dark bg-opacity-75 p-4 rounded-3 text-white" onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingSelect" label="Categories">
      <Form.Select
        aria-label="Categories"
        name="categoryId"
        onChange={handleChange}
        className="mb-3"
        value={formInput.categoryId} 
        required
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.categoryName}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
        <FloatingLabel controlId="floatingInput1" label="Enter the donation Name" className="mb-3 text-black-50">
          <Form.Control
            type="text"
            placeholder="Enter the donation Name"
            name="itemName"
            value={formInput.itemName}
            onChange={handleChange}
            required />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Enter the amount in which you would be willing to donate" className="mb-3 text-black-50">
          <Form.Control
            type="text"
            placeholder="If giving currency please use USD"
            name="count"
            value={formInput.count}
            onChange={handleChange}
            required />
        </FloatingLabel>

        <div>
          <Button variant="dark" className="mt-3 py-2 px-4 border-2 border-light" type="submit" style={{ marginBottom: '30px' }}>{itemObj.id ? 'Update' : 'Submit'} Your Pledged Item</Button>
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
  disasterId: PropTypes.number.isRequired,

};

ItemForm.defaultProps = {
  itemObj: initialState,

};

export default ItemForm;
