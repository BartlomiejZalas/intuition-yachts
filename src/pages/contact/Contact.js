import React, { Component } from "react";
import { translate } from "react-i18next";
import RegularPageWrapper from "../../components/RegularPageWrapper";
import Input from './Input';

class Contact extends Component {

  state = {
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
    const message = {
      toName: this.state.form.name.value,
      toEmail: this.state.form.email.value,
      subject: this.state.form.subject.value,
      message: this.state.form.message.value
    };
    console.log(message);
  }

  changedInputHandler = (event, inputId) => {
    const formUpdated = { ...this.state.form };
    const fieldUpdated = { ...formUpdated[inputId] };
    fieldUpdated.value = event.target.value;
    fieldUpdated.touched = true;
    formUpdated[inputId] = fieldUpdated;
    fieldUpdated.valid = fieldUpdated.value === '' ? false : true;

    this.setState({
      ...this.state,
      form: formUpdated
    })
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

    return (
      <RegularPageWrapper title={this.props.t('pages.contact.title')}>
        <div className="row">
          <div className="col-md-6">
            <h2 className="py-2">{this.props.t('pages.contact.contactdata')}</h2>
            <div dangerouslySetInnerHTML={{ __html: this.props.t('pages.contact.content') }} />
          </div>
          <div className="col-md-6">
            <h2 className="py-2">{this.props.t('pages.contact.contactform')}</h2>
            <form>
              {inputs}
              <button className="btn btn-primary" 
              onClick={e => this.submitHandler(e)}
              disabled={!this.isFormReadyToSubmit()}
              >
                {this.props.t('pages.contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </RegularPageWrapper>
    );
  }
}
export default translate()(Contact);