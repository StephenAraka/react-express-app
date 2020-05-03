import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../redux/actions/createTask';

const TaskList = ({ tasks, name, id, createTask }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map(task =>
        <div key={task.id}>
          {task.name}{task.id}
        </div>
      )}
    </div>
    <button onClick={() => createTask(id)}>Add New</button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.createTask.filter(task => task.group === groupID)
  }
};

const mapDispatchToProps = {
  createTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
