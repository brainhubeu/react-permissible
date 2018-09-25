import React from 'react';
import PropTypes from 'prop-types';

const Accessible = ({ permission, oneperm }) => (
  <div className="accessible-component">
    <p>
      {oneperm ? 'One of' : 'Whole set of'} <code>{permission}</code> is necessary to see this component.
    </p>
  </div>
);

Accessible.propTypes = {
  permission: PropTypes.string,
  oneperm: PropTypes.bool,
};

export default Accessible;
