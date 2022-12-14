import React, { Component } from "react";
import { CloseOutlined } from "@ant-design/icons";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo_array: [
        { name: "F/1.2 camera" },
        { name: "F/1.1 camera" },
        { name: "F/1.0 camera" },
        { name: "camera" },
      ],
      task: "",
    };
  }

  onChangeTask = (e) => {
    this.setState({
      
      task: e.target.value,
    });
  };

  addTask = () => {
    let { todo_array, task } = this.state;
    let obj = {
      id: todo_array.length === 0 ? 1 : todo_array[todo_array.length - 1].id + 1,
      name: task,
    };
    todo_array.push(obj);
    this.setState({
      todo_array: todo_array,
      task: "",
    });
  };

  delete = (object) => {
    let { todo_array } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array.splice(i, 1);
    this.setState({
      todo_array: todo_array,
    });
  };

  render() {
    return (
      <div>
        <div>
          <span className="spanedit">Add Equipment</span><br></br>
          <input
            id="standard-basic"
            autoComplete="off"
            value={this.state.task}
            onChange={this.onChangeTask}
             style={{width:'80%'}}
          />
          
          <button className="todosweep" onClick={this.addTask}>
            Add
          </button>
        </div>

        {this.state.todo_array.length > 0 ? (
          <div>
            <table className="centerTable" style={{ marginTop: 20 }}>
              {this.state.todo_array.map((object, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        {object.is_editing ? (
                          <input
                            id="standard-basic"
                            value={this.state.edit_task}
                            onChange={(e) => this.editTask(e.target.value)}
                          />
                        ) : object.is_done ? (
                          <s>{object.name}</s>
                        ) : (
                          <span>{object.name}</span>
                        )}
                      </td>
                      <td>
                        {object.is_editing ? (
                          <div>
                            <button
                              className="button_style"
                              variant="outlined"
                              color="primary"
                              size="small"
                              onClick={(e) => this.saveEditTask(object)}
                            >
                              Save
                            </button>
                            <button
                              className="button_style"
                              variant="outlined"
                              color=""
                              size="small"
                              onClick={(e) => this.edit(object)}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              className="buttontodo"
                              onClick={(e) => this.delete(object)}
                            >
                              <CloseOutlined />
                            </button>
                            <hr/>
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}
