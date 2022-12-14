import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

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
// ~ CONVERT USERFINDER COMPONENT TO CLASS-BASED ~
