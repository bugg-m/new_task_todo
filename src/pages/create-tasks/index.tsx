import { useState } from "react";

const CreateTask = ({ setNewTask }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (e: any) => {
    e.preventDefault();
    window.alert(
      "title: " +
        title +
        "   description: " +
        description +
        "   with id: " +
        Date.now()
    );
    setNewTask({
      title: title,
      description: description,
      id: Date.now(),
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <div className="gap-5 flex justify-center items-center flex-col">
          <input
            className="w-4/5 p-3 h-10 outline-none border-2 border-gray-700 rounded-md"
            name="title"
            placeholder="Task title*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="w-4/5 p-3 outline-none border-2 border-gray-700 rounded-md"
            name="description"
            placeholder="Task description*"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            minLength={20}
            maxLength={200}
          ></textarea>

          <input
            className="w-2/5 h-10 outline-none border-2 border-gray-600 bg-gray-400 hover:bg-gray-800 hover:text-gray-50 text-gray-900 rounded-md"
            type="submit"
            value="Create task"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
