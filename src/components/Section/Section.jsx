import React from 'react';
import PropTypes from 'prop-types'; 
import css from './Section.module.css'

const Section = ({ title, children }) => (
    <div>
        <p className={css.title}>{title}</p>
        {children}
    </div>
)

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};