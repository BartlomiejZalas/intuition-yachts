import React, { Component } from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";
import Input from './Input';
import axios from 'axios';
import { Alert } from 'reactstrap';

import './Contact.css';

class Contact extends Component {

  state = {
    messageSent: false,
    messageError: false,
    messageLoading: false,
    form: {
      name: {
        value: '',
        type: 'text',
        touched: false,
        valid: false
      },
      email: {
        value: '',
        type: 'text',
        touched: false,
        valid: false
      },
      subject: {
        value: '',
        type: 'text',
        touched: false,
        valid: false
      },
      message: {
        value: '',
        type: 'textarea',
        rows: '3',
        touched: false,
        valid: false
      }
    }
  }

  submitHandler = e => {
    e.preventDefault();
    this.setState({ messageLoading: true });
    const params = new URLSearchParams();
    params.append('name', this.state.form.name.value);
    params.append('email', this.state.form.email.value);
    params.append('subject', this.state.form.subject.value);
    params.append('message', this.state.form.message.value);
    axios.post('/mail-api/sendMail.php', params)
      .then(res => {
        this.setState({ messageSent: true, messageLoading: false });
        console.log('Message sent', res);
      }).catch(e => {
        this.setState({ messageError: true, messageLoading: false });
        console.log(e);
      });
  }

  changedInputHandler = (event, inputId) => {
    const formUpdated = { ...this.state.form };
    const fieldUpdated = { ...formUpdated[inputId] };
    fieldUpdated.value = event.target.value;
    fieldUpdated.touched = true;
    formUpdated[inputId] = fieldUpdated;
    fieldUpdated.valid = fieldUpdated.value === '' ? false : true;

    this.setState({ form: formUpdated })
  }

  isFormReadyToSubmit = () => {
    for (let field in this.state.form) {
      if (!this.state.form[field].valid) {
        return false;
      }
    }
    return true;
  }

  render() {
    const inputsArray = [];
    for (let input in this.state.form) {
      inputsArray.push({ ...this.state.form[input], id: input });
    }

    const inputs = inputsArray.map(field => (
      <div className="form-group" key={field.id}>
        <Input {...field} changed={this.changedInputHandler} />
      </div>
    ));

    const errorMessage = this.state.messageError ? <Alert color="danger">{this.props.t('pages.contact.sendMessageError')}</Alert> : null;
    const successMessage = this.state.messageSent ? <Alert color="success">{this.props.t('pages.contact.sendMessageSuccess')}</Alert> : null;
    const loadingMessage = this.state.messageLoading ? <div class="loader">Loading...</div> : null;
    const form = !this.state.messageError && !this.state.messageSent && !this.state.messageLoading ? (
      <form>
        {inputs}
        <button className="btn btn-primary"
          onClick={e => this.submitHandler(e)}
          disabled={!this.isFormReadyToSubmit()}
        >
          {this.props.t('pages.contact.form.send')}
        </button>
      </form>
    ) : null;

    return (
      <RegularPageWrapper title={this.props.t('pages.contact.title')}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="py-2">{this.props.t('pages.contact.contactdata')}</h2>
            <div dangerouslySetInnerHTML={{ __html: this.props.t('pages.contact.content') }} />
          </div>
          <div className="col-md-6">
            <h2 className="py-2">{this.props.t('pages.contact.contactform')}</h2>
            {errorMessage}
            {successMessage}
            {loadingMessage}
            {form}
          </div>
        </div>
      </RegularPageWrapper>
    );
  }
}
export default translate()(Contact);