import React from 'react';
import PropTypes from 'prop-types'; 
import css from './Section.module.css'

function Section({ title, children }) {
    return (
        <div>
            <p className={css.title}>{title}</p>
            {children}
        </div>
    )
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};