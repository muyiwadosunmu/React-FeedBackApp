import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import Card from "./components/shared/Card";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedBack([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Route exact path={"/"}>
          <FeedbackForm handleAdd={addFeedback} />
          <FeedBackStats feedback={feedback} />
          <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
        </Route>
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
};

export default App;
