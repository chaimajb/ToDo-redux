import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";
import TaskList from "../TaskList/TaskList";
import { addTask } from "../../reduxx/actions";
import { useDispatch } from "react-redux";

function AddTask({ taskData, setStatus }) {
    const [newTask, setNewTask] = useState("");
    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    };

    const dispatch = useDispatch();

    const AlertSubmit = () => {
        newTask === ""
            ? alert("you need to add challenge ^^")
            : dispatch(addTask({ description: newTask }));
        setNewTask("");
    };

    return (
        <>
            <div className="AddTaskContainer">
                <h1 style={{ fontSize: "80px" }}>T O D O</h1>
                <div className="addField">
                    <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Add a new challenge ..."
                        value={newTask}
                        onChange={handleNewTask}
                    />
                    <Button
                        className="add-btn"
                        style={{ width: "150px" }}
                        variant="dark"
                        onClick={AlertSubmit}
                    >
                        Add
                    </Button>
                </div>
                <TaskList />
            </div>
        </>
    );
}

export default AddTask;