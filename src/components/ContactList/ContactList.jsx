import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

function ContactList({ contacts, onRemoveContact }) {
  const contact = contacts.map(({ id, name, number }) => (
    <li key={id} className={styles.list}>
      <span>{name + ` : ` + number}</span>
      <button
        className={styles.button}
        type="button"
        name="delte"
        onClick={() => onRemoveContact(id)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{contact}</ul>;
}

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
export default ContactList;
