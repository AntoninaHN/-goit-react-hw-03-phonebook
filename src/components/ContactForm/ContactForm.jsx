import React, { Component } from "react";
// import React from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitContact({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span className={styles.message}>Name</span>
          <input
            type="text"
            onChange={this.onHandleChange}
            name="name"
            value={this.state.name}
            className={styles.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.label}>
          <span className={styles.message}>Number</span>
          <input
            type="tel"
            value={this.state.number}
            onChange={this.onHandleChange}
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
};
export default ContactForm;
