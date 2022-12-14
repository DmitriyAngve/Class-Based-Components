import React from "react";

const UsersContext = React.createContext({
  users: [],
});

export default UsersContext;

//~ CONTEXT AND CLASS-BASED COMPONENTS ~
// I can still define it and provide them normally.
// React.createContext({})
// Provide with Provider component which is part of that created context object
// Pass a value={usersContext}
// The only part which changes when you're working with context is related to how use it in your class based components
// GO TO UserFinder.js ---->>>
//~ CONTEXT AND CLASS-BASED COMPONENTS ~
