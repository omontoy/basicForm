import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    const validUserName = userName.trim().length > 0;
    const validAge = age > 0;
    const validForm = validUserName && validAge;

    if (!validForm) {
      setError({
        title: "Invalid Form",
        message: "Please enter valid inputs",
      });
      return;
    }

    setError(null);

    const newUser = {
      id: Math.random(),
      name: userName,
      age,
    };

    props.onSaveNewUser(newUser);

    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="usern ame">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={userChangeHandler}
            value={userName}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={ageChangeHandler}
            value={age}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
