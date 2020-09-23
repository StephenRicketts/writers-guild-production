import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import SignUp from "./components/signUp/signUp";
import UserProfile from "../src/components/userProfile/userProfile";
import Footer from "../src/components/footer/footer";
import NewPublicationInterface from "./components/newPublicationInterface/newPublicationInterface";
import { AuthProvider } from "./components/contexts/authProvider";
import ReadPublicationInterface from "./components/readPublicationInterface/readPublicationInterace";
import Header from "./components/header/header";
import TheStacks from "./components/theStacks/theStacks";
import EditPublicationInterface from "./components/editPublicationInterface/editPublicationInterface";

const App = () => {
  const [authorId, setAuthorId] = useState("");

  return (
    <div>
      <AuthProvider>
        <Header setAuthorId={setAuthorId} />
        <Route
          exact={true}
          path="/"
          render={(props) => (
            <LandingPage {...props} setAuthorId={setAuthorId} />
          )}
        />
        <Route
          exact={true}
          path="/signup"
          render={(props) => <SignUp {...props} setAuthorId={setAuthorId} />}
        />
        <Route
          exact={true}
          path="/write"
          render={(props) => (
            <NewPublicationInterface {...props} authorId={authorId} />
          )}
        />
        <Route
          exact={true}
          path="/edit"
          render={(props) => (
            <EditPublicationInterface {...props} authorId={authorId} />
          )}
        />
        <Route
          exact={true}
          path="/stacks"
          render={(props) => <TheStacks {...props} />}
        />
        <Route
          exact={true}
          path="/userprofile"
          render={(props) => <UserProfile {...props} />}
        />
        <Route
          path="/read/:publicationId"
          render={(props) => <ReadPublicationInterface {...props} />}
        />
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
