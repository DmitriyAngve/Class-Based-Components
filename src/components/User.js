// import { Component } from "react/cjs/react.production.min";
import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

// ~ ADDING A CLASS-BASED COMPONENT ~
// STEP 1:
// 1.1 Start with the class keyword: "class User"
// 1.2 Adding methods to this class: "render()" this is specific method expected by React, which React will call when it finds a component being used in JSX code. This method find out what should be rendered to the screen (equivalent to "return" statement to functional compoments)
// 1.3 Add "return" (same as) to render() method, except "props".
// 1.4 Need import Component from React and "extend" component ("class User extends Component")
// 1.5 Add "this" to props ("{this.props.name}")
// ~ ADDING A CLASS-BASED COMPONENT ~
