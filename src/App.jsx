import { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>

      <h1>Fetch API Example</h1>

      <button onClick={getUsers}>
        Fetch Users
      </button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default App;