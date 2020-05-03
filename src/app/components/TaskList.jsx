import React from 'react';
import { connect } from 'react-redux';


const TaskList = ({ tasks }) => (
  <div>
    {tasks.map(task => task.name)}
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