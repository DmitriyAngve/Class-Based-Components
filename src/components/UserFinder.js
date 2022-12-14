import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// class UserFinder extends Component {
//   constructor() {
//     super();
//     this.state = {
//       filteredUsers: DUMMY_USERS,
//       searchTerm: "",
//     };
//   }

// Example if DUMMY_USERS are loaded from a database
class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send HTTP request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;

// ~ CONVERT USERFINDER COMPONENT TO CLASS-BASED AND LIFECYCLE METHODS ~
// STEP: 1
// 1.1 Import Component from react
// 1.2 Define a class named "UserFinder" extends from "Component"
// 1.3 Need a "constructor()" because I got some state which should be initialized
// 1.4 Setting this state to an object: "this.state ={}"
// 1.5 Got two state in "this.state":
// 1.5.1 "filteredUsers" (come from useState() array) that equal to "DUMMY_USERS"
// 1.5.2 "searchTerm" (come from another useState() array) that equal  to an empty string
// 1.6 Next got a function here to search change handler ("searchChangeHandler") which I'll implement as a method in the "UserFinder" class, that should be executed to update the state, at least a part of the state it should update that search term. "searchChangeHandler() {this.setState();}"
// 1.7 Get to event object because this is bound to the change event on the input (" <input type="search" onChange={searchChangeHandler} />") and then use the event object to read the value entered by the user ("searchChangeHandler(event) {...") and therefore I, can expect this "event" object in "this.SetState({})" to then set our state always to an object, which is then merged by React, and updates the search term part of that state to event target value. ("this.setState({ searchTerm: event.target.value }")
// 1.8 Only "searchTerm" will be merged, "filteredUsers" won't be lost.
// 1.9 Add a "render()" where we should return our JSX code.
// 1.10 In JSX code "<input type="search" onChange={this.searchChangeHandler.bind(this)} />" (this and bind(this) - always needed)
// 1.11 Add in "<Users users={this.state.filteredUsers}" (this.state!)
// STEP: 2
// ~ LIFECYCLE METHODS ~
// 2.1 "componentDidUpdate() {}" - this methods will be called automatically by React whenever this Component is re-evaluated, because it's state changed
// 2.2 In this object I set a new state for the filtered users. "this.setState({filter: DUMMY_USERS.filteredUsers((user) =>user.name.toLowerCase().icludes(searchTerm.toLowerCase()))".
// 2.3 Explanation: "filteredUsers" come from "constructor()" of class UserFinder
// 2.4 To avoid an infinite loop need check whether the state we're interested in changed (in this case is "searchTerm"). For that component did update recevies two argument which help: "prevProps" and "prevState", it's the Last props and Last state snapshot before the current component update
// 2.5 With that I can add "ifcheck": if (prevState.searchTerm !== this.state.searchTerm). "this.state.searchTerm" - current seacrhTerm.
// 2.6 Explanation: only if the previous searchTerm is not equal to the current one, the logic below will be executed. "Ifcheck" to prevent infinite loop. In useEffect we use dependency, don't need to do this.
// ~ LIFECYCLE METHODS ~
// "super()" - don't forget

// ~~~ If we are loaded DUMMY_USERS from a database or a server ~~~
// STEP: 1
// Initially "filteredUsers" will be an empty array.
// Then when the Component is rendered for the first time I wanna send a request to the server.
// I wanna fetch the users when this component is rendered for the first time, and this is what I do with "componentDidMount()"
// In this component I could send your http request and handle all of that
// And I would update my state and set state in this case to: "this.setState({ filteredUsers: DUMMY_USERS })"
// This component runs only once, and here don't need "ifcheck" equivalent of that is useEffect with no dependencies or even with dependencies if would execute this function when the component is mounted for the first time, because it's treats the dependencies
// ~~~ If we are loaded DUMMY_USERS from a database or a server ~~~
// GO TO User.js ----->>>
// ~ CONVERT USERFINDER COMPONENT TO CLASS-BASED AND LIFECYCLE METHODS ~

//

//~ CONTEXT AND CLASS-BASED COMPONENTS ~
// The context consumer component can be used in both: functional and class-based components.
// STEP: 1
// In "render()" methods
//~ CONTEXT AND CLASS-BASED COMPONENTS ~

/*
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };
*/
