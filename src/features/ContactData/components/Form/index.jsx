import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";

ContactForm.propTypes = {
  contactForm: PropTypes.array,
  onChange: PropTypes.func,
};

function ContactForm({ contactForm = [], onChange = null }) {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    console.log({
      value,
    });
  };
  return (
    <div>
      {contactForm.map((data) => (
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder={data.title}
          key={data.key}
          style={{ margin: "8px 0" }}
        />
      ))}
      <Button onClick={handleSubmit}>Register</Button>
    </div>
  );
}

export default ContactForm;
