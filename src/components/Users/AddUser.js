import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // const userChangeHandler = (e) => {
  //   setUserName(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    const validUserName = enteredName.trim().length > 0;
    const validAge = +enteredAge > 0;
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
      name: enteredName,
      age: +enteredAge,
    };
    console.log(newUser);

    props.onSaveNewUser(newUser);

    // setUserName("");
    nameInputRef.current.value = ''
    // setAge("");
    ageInputRef.current.value = ''
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
            // onChange={userChangeHandler}
            // value={userName}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            // onChange={ageChangeHandler}
            // value={age}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
