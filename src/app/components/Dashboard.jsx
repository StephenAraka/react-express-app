import React from 'react';
import { connect } from 'react-redux';


const Dashboard = ({ groups }) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map(group => group.name)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
};

export default connect(mapStateToProps)(Dashboard);