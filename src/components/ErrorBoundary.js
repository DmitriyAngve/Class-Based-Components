import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
// ~ ~ Error Boundaries ~ ~
// Import...
// Create component with "componentDidCatch"
// STEP 1
// "ErrorBoundary" is regular class-based component, but which implements that "componentDidCatch()" lyfecycle method, which can be added to any class-based component and whenever you do add it to a class-based component it makes that class-based component an error boundary.
// This lyfecycle method will be triggered whenever one of the child component throws an error or generates an error
// Add "render()" which returns "this.props.children", because I want to wrap my error boundary component around components which should be protected by that compoments.
// look at UserFinder.js --->>> wrap it around <Users> component
// Let's do something when an error occurs:
// STEP 2
// 2.1 In "componentDidCatch" add error object as a parameter automatically passed in by it react and look into that erro to find out what went wrong and run different logic based on different errors
// 2.2 Add a "constructor()", call "super()" and "this.state= {hasError: false}". hasError - custom
// 2.3 Then in "componentDidCatch" I can call this set state and set has error to true. "this.state({ hasError: true })"
// 2.4 Then in "render()" check if "this.state" has error is true. "if (this.state.hasError) {..."
// 2.5 in "ifcheck" add "return <p>Something went wrong</p>"

// ~ ~ Error Boundaries ~ ~
