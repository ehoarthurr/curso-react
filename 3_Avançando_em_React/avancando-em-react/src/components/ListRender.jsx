import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Arthur", "João", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Arthur", age: 30 },
    { id: 2, name: "Pedro", age: 25 },
    { id: 3, name: "Ana", age: 28 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * (users.length + 1));

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
