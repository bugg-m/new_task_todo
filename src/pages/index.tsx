import { useState } from "react";
import CreateTask from "./create-tasks";
import TaskWithApi from "./task-api-ids";
import Tasks from "./tasks";

const TodoApp = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    id: Number,
  });
  return (
    <div className="w-full min-h-screen p-10 flex justify-center items-center flex-col gap-10">
      <div className="border-2 border-gray-600 p-5 rounded w-1/3">
        <CreateTask setNewTask={setNewTask} />
      </div>
      <div className="border-2 border-gray-600 p-5 rounded w-full">
        <Tasks newTask={newTask} />
      </div>
      {/* <div className="border-2 border-gray-600 p-5 rounded w-full">
        <TaskWithApi />
      </div> */}
    </div>
  );
};

export default TodoApp;
