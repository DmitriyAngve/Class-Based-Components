import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
}

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;

// ~ CONVERT USERFINDER COMPONENT TO CLASS-BASED ~
// STEP: 1
// 1.1 Import Component from react
// 1.2 Define a class named "UserFinder" extends from "Component"
// 1.3 Need a "constructor()" because I got some state which should be initialized
// 1.4 Setting this state to an object: "this.state ={}"
// 1.5 Got two state in "this.state":
// 1.5.1 "filteredUsers" (come from useState() array) that equal to "DUMMY_USERS"
// 1.5.2 "searchTerm" (come from another useState() array) that equal  to an empty string
// 1.6 Next got a function here to search change handler ("searchChangeHandler") which I'll implement as a method in the "UserFinder" class, that should be executed to update the state, at least a part of the state it should update that search term. "searchChangeHandler() {this.setState();}"
// 1.7 Get to event object because this is bound to the change event on the input and then use the event object to read the value entered by the user ("searchChangeHandler(event) {...") and therefore I, can expect this "event" object in "this.SetState({})" to then set our state always to an object, which is then merged by React and updates the search term part of that state to event target value. ("this.setState({ searchTerm: event.target.value }")
// 1.8 Only "searchTerm" will be merged, "filteredUsers" won't be lost

// ~ CONVERT USERFINDER COMPONENT TO CLASS-BASED ~
