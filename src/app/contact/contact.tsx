import './contact.css';

import * as React from 'react';
import ContactForm from './contact-form/contact-form';

export interface Props {
  _?: string;
}

export interface State {
  loading: boolean;
}

export default class Contact extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h2>Contact page works</h2>

        <ContactForm />
      </div>
    );
  }
}
