import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to="/dashboard">
        <h1>
          My Application
        </h1>
      </Link>
    </div>
  );
};

export default connect(state => state)(Navigation);
