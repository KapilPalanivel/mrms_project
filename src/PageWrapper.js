import React from 'react';
import PropTypes from 'prop-types';
import './PageWrapper.css'; // Add your CSS for the page wrapper

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
