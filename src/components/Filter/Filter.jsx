import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        <h2 className={styles.title}>Find contact by name</h2>
        <input
          type="text"
          value={value}
          onInput={onChange}
          className={styles.input}
          name="name"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
