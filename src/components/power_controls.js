import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setPowerLevel } from '../actions';

class PowerController extends Component {
  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return (<div className={className}>
        <label className="controller-label">Initial Power Level</label>{'  '}
        <input type="number" className="form-control" {...field.input}/>
        <button className="btn btn-default">Calculate Powers</button>
        <div className="text-help">
          {touched ? error : ''}
        </div>
    </div>
    );
  }
    
  onSubmit(values) {
      this.props.setPowerLevel(values.power);
  }
    
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className="form-inline" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field className="form-control" name="power" component={this.renderField}></Field>
        </form>
      </div>
    );
  }
}

function validate(values) {
    const errors = {};
    
    if(!values.power) {
        errors.power = "Please enter a number";
    } else if(values.power > 100 || values.power < 1) {
        errors.power = "Please enter a number between 1 to 100";
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'ControllerForm',
})(
    connect(null, { setPowerLevel })(PowerController)
);