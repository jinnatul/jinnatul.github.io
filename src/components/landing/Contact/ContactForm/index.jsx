import React from "react";
import { Form  } from 'antd';
import { Button, Input } from "../../../common";
import { Center, InputField } from "./styles";

const ContactForm = () => (
  <Form>
    <InputField>
      <Input
        type="text"
        name="name"
        component="input"
        aria-label="name"
        placeholder="Full name*"
      />
    </InputField>
    <InputField>
      <Input
        id="email"
        aria-label="email"
        component="input"
        type="email"
        name="email"
        placeholder="Email*"
      />
    </InputField>
    <InputField>
      <Input
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Message*"
      />
    </InputField>
    <Center>
      <Button secondary type="submit">
        Submit
      </Button>
    </Center>
  </Form>
);

export default ContactForm;
