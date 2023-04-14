import { useState } from "react";

import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  AbortedDeferredError,
} from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import Card from "./components/shared/Card";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";
import { FeedBackProvider } from "./context/FeedBackContext";

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedBackProvider>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
};

export default App;
