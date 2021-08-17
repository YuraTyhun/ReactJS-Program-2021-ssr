import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { genres } from '../../util/constants';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MultipleSelect = ({ fieldName, formik, label }) => {

    const handleChange = (e, value) => {
        formik.setFieldValue(fieldName, value);
    }

    return (
        <div className="form-input-container">
            <label htmlFor={fieldName} className="form-input-label">{label}</label>
            <Autocomplete
                multiple
                name={fieldName}
                id={fieldName}
                options={genres}
                value={formik.values.genres}
                className="form-input-field"
                disableCloseOnSelect
                getOptionLabel={(name) => name}
                getOptionSelected={(option, value) => option === value}
                renderOption={(genre, { selected }) => (
                    <React.Fragment>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {genre}
                    </React.Fragment>
                )}
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" placeholder="Select genre" />
                )}
            />
            <span className="form-input-error">{formik.errors.genres}</span>
        </div>
    )
}

export default MultipleSelect;