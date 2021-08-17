import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormInput = ({ label, name, type, placeholder, readOnly, isIdField, error }) => {
    const itemClasses = classNames({
        'form-input-field': true,
        'id-field': isIdField
    });

    return (
        <div className="form-input-container">
            <label htmlFor={name} className="form-input-label">{label}</label>
            <Field
                className={itemClasses}
                name={name}
                type={type}
                placeholder={placeholder}
                readOnly={readOnly} />
            {error && <span className="form-input-error">{error}</span>}
            
        </div>

    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

FormInput.defaultProps = {
    label: '',
    placeholder: '',
    error: ''
};

export default FormInput;