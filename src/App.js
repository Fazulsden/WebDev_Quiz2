import React from "react";
import { NotificationContainer } from "react-notifications";
import { useSelector } from "react-redux";
import UserPage from "./components/userPage"; // Ensure you have this component
import LoginForm from "./components/LoginForm"; // LoginForm example provided below

function App() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div className="App">
      {loggedIn ? <UserPage /> : <LoginForm />}
      <NotificationContainer />
    </div>
  );
}

export default App;
