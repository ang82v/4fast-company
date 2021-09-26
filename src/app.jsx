import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api/index";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  //console.log(users); // получили всех пользователей
  const handleDelete = (idProduct) => {
    console.log("удаляем ", idProduct);
    const newUsers = users.filter((item) => item._id !== idProduct);
    setUsers(newUsers);
  };

  const handleToogleBookmark = (idProduct) => {
    console.log("избранное для " + users.idProduct);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <h1>Тусовщики</h1>
        <SearchStatus allUsers={users.length} />
        <Users
          onDelete={handleDelete}
          onBookMark={handleToogleBookmark}
          users={users}
        />
      </main>
    </div>
  );
}

export default App;
