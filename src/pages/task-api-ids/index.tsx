import axios from "axios";
import { useEffect, useState } from "react";

const TaskWithApi = () => {
  const [taskWithApi, setTaskWithApi] = useState([]);
  const [taskDetails, setTaskDetails] = useState([]);
  const [taskId, setTaskId] = useState([]);

  useEffect(() => {
    getTasksWithApi();
  }, []);

  useEffect(() => {
    taskId.map((id) => {
      return getTasksDetails(id);
    });
  }, []);

  const getTasksWithApi = () => {
    try {
      axios
        .get(
          "https://api-regional.codesignalcontent.com/task-management-system-2/backlog"
        )
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            setTaskWithApi(data);
            setTaskId(data?.map((item: any) => item.tasks));
          } else {
            console.log("Tasks not found");
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  };
  const getTasksDetails = (taskId: string) => {
    try {
      axios
        .get(
          `https://api-regional.codesignalcontent.com/task-management-system-2/tasks/${taskId}`
        )
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            setTaskDetails(data);
          } else {
            console.log("Task details not found");
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className=" mb-5 text-4xl font-semibold">Tasks From Api</h2>
      <div className="flex justify-center items-start gap-5 ">
        {taskWithApi?.map((item: any, index) => {
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
                          {taskDetails?.title}
                        </span>
                      </div>
                      <div>
                        <span>
                          <strong>Description:- </strong>
                          {taskDetails?.description}
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

export default TaskWithApi;
