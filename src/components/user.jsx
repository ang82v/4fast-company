import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ user, onDelete, onBookMark }) => {
  //console.log(...rest);
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        <Qualitie qualities={user.qualities} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>
        <BookMark onClick={() => onBookMark(user._id)} />
      </td>
      <td>{user.rate}</td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
