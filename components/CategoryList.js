import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { deleteSingleCategory } from '../api/categoryData';

const CategoryList = ({ categoryObj, onUpdate }) => {
  console.warn('catObj: ', categoryObj);
  const deleteCategory = () => {
    if (window.confirm(`Do you want to delete ${categoryObj.categoryName}?`)) {
      deleteSingleCategory(categoryObj.id).then(() => onUpdate());
    }
  };

  return (

    <tr className="fw-semibold fs-6 bg-light py-2 px-3 rounded-3 border-bottom border-2 border-dark-subtle">
      <td className="py-2 px-3">{categoryObj.categoryName}:</td>
      <td className="ps-3">{categoryObj.description}</td>
      <td className="ps-3">
        <Button className="bg-secondary btn-sm btn-outline-secondary text-white" onClick={() => deleteCategory()}>Delete</Button>
      </td>
    </tr>

  );
};

export default CategoryList;

CategoryList.propTypes = {
  categoryObj: PropTypes.shape({
    categoryName: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func,
};

CategoryList.defaultProps = {
  onUpdate: () => {},
};
