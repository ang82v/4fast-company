import React, { useState } from "react";
import api from "../api/index";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (idProduct) => {
    console.log(idProduct);
    const newUsers = users.filter((item) => item._id !== idProduct);
    setUsers(newUsers);
  };

  const renderPrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    return "человек тусанет";
  };

  return (
    <>
      <h1>Тусовщики</h1>
      <span
        className={
          "badge m-2 p-2 bg-" + (users.length > 0 ? "primary" : "danger")
        }
        style={{ fontSize: "20px" }}
      >
        {users.length > 0
          ? `${users.length} ${renderPrase(users.length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретиля, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      key={item._id}
                      className={"badge m-1 bg-" + item.color}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
