import * as Yup from 'yup';
import emptyImage from '../../public/images/noimg.jpg';
import { URL_REGEX } from './constants';

export const handleImgError = (event) => {
    event.target.src = 'images/noimg.jpg';
}

export const convertData = (movie) => {
    return {
        poster_path: movie.poster_path || emptyImage,
        runtime: Number(movie.runtime),
        budget: Number(movie.budget),
        revenue: Number(movie.revenue),
        vote_average: Number(movie.vote_average),
        vote_count: Number(movie.vote_count)
    }
}

export const formatRating = rating => (rating || 0).toFixed(1);

export const formatRuntime = runtime => runtime ? `${runtime} min` : '';

export const getYear = (date) => new Date(date).getFullYear(); 

export const buildQueryString = ({
    sortBy, search, filter
}) => `?sortBy=${sortBy}&sortOrder=desc&filter=${filter}&search=${search}&searchBy=title&limit=30` 

export const setValidation = () => Yup.object().shape({
    title: Yup.string().required('Fill in the movie title'),
    release_date: Yup.string().required('Select the release date'),
    poster_path: Yup.string()
        .matches(URL_REGEX, 'The value must be a valid URL' )
        .required('Fill in the movie poster url'),
    genres: Yup.array().min(1, 'Select at least one genre'),
    overview: Yup.string().required('Fill in the movie overview'),
    runtime: Yup.number()
        .required('Fill in the runtime')
        .min(0, 'The value must be greater than or equal to 0')
        .integer('The value must be an integer')
        .typeError('The value must be a number'),
    budget: Yup.number()
        .min(0, 'The value must be greater than or equal to 0')
        .integer('The value must be an integer')
        .typeError('The value must be a number'),
    revenue: Yup.number()
        .min(0, 'The value must be greater than or equal to 0')
        .integer('The value must be an integer')
        .typeError('The value must be a number'),
    tagline: Yup.string().required('Fill in the movie tagline'),
    vote_average: Yup.number()
        .min(0, 'The value must be greater than or equal to 0')
        .max(10, 'The value must be less than or equal to 10')
        .typeError('The value must be a number')
        .test(
            'validateVoteAverage',
            'The value must have 1 digit after decimal',
            value => /^\d+(\.\d)?$/.test(value)
        ),
    vote_count: Yup.number()
        .min(0, 'The value must be greater than or equal to 0')
        .integer('The value must be an integer')
        .typeError('The value must be a number')
});