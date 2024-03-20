"use client";

import { Button } from "./ui/button";

import { useState, useEffect } from "react";

// import { deleteItem } from "./FetchData";

interface Task {
  id: number;
  website: string;
  username: string;
  password: string;
}

export const TaskTable = () => {
  const [data, setData] = useState<Task[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/memos");
      const body = await res.json();
      setData(body.data);
    };

    setTimeout(() => {
      fetchData(), 500;
    });
  }, []);

  const handelClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // get the id of the task
    const id = event.currentTarget.id;

    // delete the task from the database
    try {
      const res = await fetch(`/api/memos/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      // update the state
      setData((prev) => {
        return prev ? prev.filter((task) => task.id !== Number(id)) : prev;
      });
    } catch (e) {
      console.log("Error:", e);
    }
  };

  return (
    <div className="w-full bg-white mx-auto shadow-lg rounded-lg overflow-hidden my-5">
      {!data && <div className="text-center py-5">Loading...</div>}
      {data && (
        <table className="w-full leading-normal border border-collapse">
          <thead>
            <tr className="w-full bg-slate-100 border-2 border-collapse border-gray-400">
              <th className="w-1/4 text-left ps-4  px-4 border border-gray-400">
                Website
              </th>
              <th className="w-1/4 text-center ps-4  px-4border border-gray-400">
                User Name
              </th>
              <th className="w-1/3 text-center ps-4  px-4 border border-gray-400">
                Password
              </th>
              <th className="w-1/6 text-center ps-4  px-4 border border-gray-400">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={task.id}>
                <td className="w-1/4 px-4 py-4  border border-gray-400 ">
                  {task.website}
                </td>
                <td className="w-1/3 px-4 py-4  border border-gray-400 ">
                  {task.username}
                </td>
                <td className="w-1/3 px-4 py-4  border border-gray-400 ">
                  {task.password}
                </td>
                <td className="w-1/6 px-4 py-4 text-xl border text-center border-gray-400 font-semibold">
                  <Button
                    className="text-4xl text-red-600"
                    id={task.id.toString()}
                    variant="outline"
                    onClick={(e) => handelClick(e)}
                  >
                    -
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
