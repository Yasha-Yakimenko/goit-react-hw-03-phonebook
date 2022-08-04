import { FilterInput } from './Filter.styled.jsx';
import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
  <FilterInput>
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} />
  </FilterInput>
);
Filter.propTypes = {
  onChange:PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
};
export default Filter;

