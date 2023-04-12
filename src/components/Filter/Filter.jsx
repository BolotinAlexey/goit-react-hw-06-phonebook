import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

function Filter({ handlerChangeFilter, value }) {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name:</Label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
        value={value}
      />
    </>
  );
}

Filter.propTypes = {
  handlerChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
