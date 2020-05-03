import React from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';

const Dashboard = ({ groups }) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map((group) => (
      <div key={group.id}>
        <TaskList id={group.id} name={group.name} />
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: state.defaults.groups
  }
};

export default connect(mapStateToProps)(Dashboard);