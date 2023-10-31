import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createCategories } from '../../api/categoryData';

const initialState = {
  categoryName: '',
  categoryDescription: '',
};

function ItemForm({ categoryObj }) {
  const [formInput] = useState(initialState);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoryObj.id) {
      const payload = { ...formInput };
      createCategories(payload).then(router.push());
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category Name"
            name="categoryName"
            value={formInput.categoryName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category Description"
            name="categoryDescription"
            value={formInput.categoryDescription}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Category
        </Button>

      </Form>
    </>
  );
}

ItemForm.propTypes = {
  categoryObj: PropTypes.shape({
    categoryName: PropTypes.string,
    categoryDescription: PropTypes.string,
    id: PropTypes.string,
  }),
};

ItemForm.defaultProps = {
  categoryObj: initialState,
};
