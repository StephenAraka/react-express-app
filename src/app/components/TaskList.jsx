import React from 'react';
import { connect } from 'react-redux';


const TaskList = ({ groups }) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map(group => group.name)}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter( task => task.group === groupID )
  }
};

export default connect(mapStateToProps)(TaskList);