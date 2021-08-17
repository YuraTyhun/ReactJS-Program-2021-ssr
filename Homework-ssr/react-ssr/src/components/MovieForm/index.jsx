import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../../containers/FormInput';
import Button from '../Button';
import MultipleSelect from '../MultipleSelect';
import { formInputsList } from '../../util/constants';

const MovieForm = ({ formik, isEditMode }) => {
    return (
        <>
            {isEditMode && <FormInput label="MOVIE ID" name="id" isIdField readOnly/>}
            {formInputsList.map(input => input.fieldName ? 
                <MultipleSelect key={input.id} label={input.label} fieldName={input.fieldName} formik={formik}/> :
                <FormInput 
                    key={input.id} 
                    label={input.label} 
                    name={input.name} 
                    type={input.type} 
                    placeholder={input.placeholder}
                    error={formik.errors[input.name]}/>
            )}
            <div className="modal-window-action">
                <Button
                    type="reset"
                    className="modal-window-action-btn"
                    title="RESET"
                />
                <Button
                    type="submit"
                    className="modal-window-action-btn"
                    title="SAVE"
                    disabled={!formik.isValid}
                />
            </div>
        </>
    )
}

MovieForm.propTypes = {
    formik: PropTypes.instanceOf(Object).isRequired,
    isEditMode: PropTypes.bool
};
  
MovieForm.defaultProps = {
    isEditMode: false
};

export default MovieForm;