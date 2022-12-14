// import { useState } from "react";
import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      // moreState: "Test",
      // nested: {},
      // data: [],
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // WRONG!!!!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => {
//       return { showUsers: !curState.showUsers };
//     });
//   };

// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;

// ~ WORKING WITH THE STATE AND EVENTS ~
// STEP 1:
// 1.1 Convert Users Component to a class-based component.
// 1.1.1 Import Component
// 1.1.2 Create new "Users" with class
// 1.1.3 Add "extends"
// 1.1.4 "render()" method with JSX code that should be render
// STEP 2:
// In this case I'm not working with props, insteady I'm relying on state and I'm pointing at a function "toggleUsersHandler" that should be executed when the button is clicked.
// 2.1 Start by adding that function (don't add a function inside of the render() - possible, but would not behave correctly). Group together functionality by grouping it all in that class - add a method named "toggleUsersHandler"
// 2.2 Now need initialize and define your state. For define you would use the constructor() - this function automatically called is whenever this clause is instantiated which happens when React encounters your class being used as a component. And in the constructor, you can do initialization work like initializing state
// 2.2.1 add "this.state = {}" SUPER CRUCIAL - YOUR STATE ALWAYS IS AN OBJECT (as opposed to how it impement in functional)
// 2.2.2 Group all the state that makes up a component into one object (no matter if these state pieces are closely related or not). Add: "showUser: true" and "moreState: "Test"" and other state... You have one state object which groups it all together
// STEP 3:
// Then if you wanna change your state like in "toggleUsersHandler" with special method "setState()" - this method on this class also provided by the component class we are inhereting from ("extends Component")
// 3.1 Add "setState()" - this method always takes an object and this object now contains the new state, you wanna set, but it won't override the old state but instead React will behind the scenes merge the object you're passing here (in "this.setState({})") with your existing state ("this.state ={showUsers: true}") //// "this.setState({ showUsers: false });"
// 3.2 I don't always wanna set this to false wanna set it to the opposite of what it was before and therefore here setState() just like the state updating function from useState() (functional) also supports such a updating function ("(curState) => !curState)") --> "this.setState((curState) => !curState);" we sould do that if our new state depends on the previous state
// 3.3 It's not enough to just return a new state value like this, because here I would be returning something invalid - because our state is an object -->> rework to return a new object just as you have to pass our object to set state: ("return { showUsers: !curState.showUsers }") - again this will be merged with the old state.
// STEP 4:
// How we update state
// 4.1 Go to JSX: add "this.state" to "{this.state.showUsers ? ..." to access "state" object and then the "showUsers" property which I set up in class, and which I manage and update in JSX
// 4.2 DO it in all places where i need that state.
// 4.3 Add to "render()" mnethod "const usersList = ("
// 4.4 Add "this" and toggle method: "<button onClick={this.toggleUsersHandler}>"
// 4.5 Need to make sure that this keyword this inside of your method refers to the surrounding class and it wouldn't by default, when your method is called upon any event like a click. For fix this use "bind": "{this.toggleUsersHandler.bind(this)}" --->>> this means tha this keyword inside of "toggleUsersHandler" method is now set to have the same context or the same value as this keyword when this code is evaluated and that this keyword (IN BIND) will refer to this class

// 4.6 Call the "super()". When I add the constructor to my class and extend to another class - need to call "super()", which calls the constructor of the super class so if the class were inheriting from
// ~ WORKING WITH THE STATE AND EVENTS ~
