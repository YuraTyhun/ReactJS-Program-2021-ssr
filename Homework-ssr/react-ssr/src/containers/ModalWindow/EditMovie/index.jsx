import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { editMovie } from '../../../store/actions';
import { convertData, setValidation } from '../../../util';
import MovieForm from '../../../components/MovieForm';

const EditMovie = ({ 
    modalTitle, 
    movie: { 
        id, title, release_date, poster_path, genres, overview, runtime,
        budget, revenue, tagline, vote_average, vote_count 
    }
}) => {

    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const dispatch = useDispatch();

    const initialValues = {
        id,
        title,
        release_date,
        poster_path,
        genres,
        overview,
        runtime: runtime || 0,
        budget,
        revenue,
        tagline: tagline || 'Empty tagline',
        vote_average,
        vote_count
    };

    const submitForm = (values) => {
        const data = {
            ...values,
            ...convertData(values)
        }

        dispatch(editMovie(data));
        console.log(values);
    }

    return activeModal === 'edit' && (
        <Formik initialValues={initialValues} onSubmit={submitForm} validationSchema={setValidation()}>
            {(formik) => (
                <Form>
                    <h1 className="modal-window-title">{modalTitle}</h1>
                    <MovieForm formik={formik} isEditMode/>
                </Form>
            )}
        </Formik>
    )
}

EditMovie.propTypes = {
    modalTitle: PropTypes.string.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        overview: PropTypes.string,
        runtime: PropTypes.number,
        budget: PropTypes.number, 
        revenue: PropTypes.number, 
        tagline: PropTypes.string, 
        vote_average: PropTypes.number, 
        vote_count: PropTypes.number
    }).isRequired
};

export default EditMovie;