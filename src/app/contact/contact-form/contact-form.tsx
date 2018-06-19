import './contact-form.css';

import * as React from 'react';

export interface Props {
  _?: string;
}

export interface State {
  loading: boolean;
}

export default class ContactForm extends React.Component<Props, State> {
  render() {
    return (
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input type="text" name="email"/>
        </div>

        <div>
          <label htmlFor="text">Text</label>
          <textarea name="text" cols={30} rows={10} />
        </div>

        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}
