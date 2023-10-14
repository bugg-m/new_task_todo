import axios from "axios";
import { useEffect, useState } from "react";

const Tasks = ({ newTask }: any) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    try {
      axios
        .get("https://run.mocky.io/v3/b30da477-3c05-41d4-8b09-13f8544fe914")
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            setTask(data);
          } else {
            console.log("Task not found");
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="mb-5 text-4xl font-semibold">Tasks</h2>
      <div className="flex justify-center items-start gap-5 ">
        {task?.map((item: any, index) => {
          return (
            <div
              key={index}
              className="w-1/3 flex justify-center flex-col items-center py-5 h-full"
            >
              <h2 className="mb-5 w-4/5 flex justify-center items-center h-14 rounded-lg bg-gray-700 text-2xl text-gray-50">
                {item.title}
              </h2>
              <div className="flex flex-col justify-center items-center gap-5">
                {item?.tasks?.map((taskItem: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-4/5 h-44 p-3 bg-gray-300 text-gray-700 rounded-lg text-base font-normal flex flex-col justify-center items-start gap-3"
                    >
                      <div>
                        <span>
                          <strong>Title:- </strong>
                          {taskItem.title}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Description:- </strong>
                          {taskItem.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
