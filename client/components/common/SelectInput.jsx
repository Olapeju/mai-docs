import React, { PropTypes } from 'react';

const SelectInput = ({ name, label, onChange, defaultOption,
    value, error, options }) => (
    <div className="input-field col s12">
      <label htmlFor={name}>{label}</label>
      {/* Note, value is set here rather than on the option - docs:
        https://facebook.github.io/react/docs/forms.html */}
      <select
        name={name}
        value={value}
        onChange={onChange}>
        <option value="">{defaultOption}</option>
        {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>))
        }
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;