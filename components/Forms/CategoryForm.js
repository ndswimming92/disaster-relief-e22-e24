import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
// import { useRouter } from 'next/router';
import { createCategory } from '../../api/categoryData';

const initialState = {
  categoryName: '',
  description: '',
};

function CategoryForm() {
  const [formInput, setFormInput] = useState(initialState);
  // const router = useRouter();

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
    console.warn('Payload: ', payload);
    createCategory(payload);
  };

  return (
    <>
      <Form className="bg-dark bg-opacity-75 p-4 rounded-3 text-white" onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category Name"
            name="categoryName"
            value={formInput.categoryName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category Description"
            name="description"
            value={formInput.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="dark" className="mt-3 py-2 px-4 border-2 border-light" type="submit">
          Submit
        </Button>

      </Form>
    </>
  );
}

export default CategoryForm;

// CategoryForm.propTypes = {
//   categoryObj: PropTypes.shape({
//     categoryName: PropTypes.string,
//     categoryDescription: PropTypes.string,
//     id: PropTypes.string,
//   }),
// };

// CategoryForm.defaultProps = {
//   categoryObj: initialState,
// };
