import React from 'react';
import PropTypes from 'prop-types'; 
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className={css.buttons}>
            {options.map(option => (
                <button className={css.button} key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};