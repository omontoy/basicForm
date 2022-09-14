import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const saveNewUser = (newUser) => {
    setUsers((prevUsers) => (
      [...prevUsers, newUser]
    ));
  };

  return (
    <div>
      <AddUser onSaveNewUser={saveNewUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
