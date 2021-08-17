import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addMovie } from '../../../store/actions';
import { convertData, setValidation } from '../../../util';
import MovieForm from '../../../components/MovieForm';

const AddMovie = ({ modalTitle }) => {
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const dispatch = useDispatch();

    const initialValues = {
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: 0,
        budget: 0,
        revenue: 0,
        tagline: '',
        vote_average: 0,
        vote_count: 0
    };

    const submitForm = (values) => {
        const data = {
            ...values,
            ...convertData(values)
        }
        dispatch(addMovie(data));
    }

    return activeModal === 'add' && (
        <Formik initialValues={initialValues} onSubmit={submitForm} validationSchema={setValidation()}>
            {(formik) => (
                <Form>
                    <h1 className="modal-window-title">{modalTitle}</h1>
                    <MovieForm formik={formik} />
                </Form>
            )}
        </Formik>
    )
}

AddMovie.propTypes = {
    modalTitle: PropTypes.string.isRequired,
};

export default AddMovie;