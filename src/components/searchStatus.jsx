import React from "react";

const searchUsers = ({ allUsers }) => {
  const renderPrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    return "человек тусанет";
  };

  return (
    <>
      <span
        className={"badge m-2 p-2 bg-" + (allUsers > 0 ? "primary" : "danger")}
        style={{ fontSize: "20px" }}
      >
        {allUsers > 0
          ? `${allUsers} ${renderPrase(allUsers)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </>
  );
};

export default searchUsers;
