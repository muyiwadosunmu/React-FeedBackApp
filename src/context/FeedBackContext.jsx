import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedBack] = useState([]);

  const [feedbackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    console.log(123);
    fetchFeedback();
  }, []);
  /**Fetch feedback */
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedBack(data);
    setIsLoading(false);
  };
  /**Delete feedback */
  const deleteFeedBack = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  /**Add Feedback */
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };

  /**Update feedback item */
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedBack(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...data,
            }
          : item
      )
    );
  };

  /**Set item to be updated */
  const editFeedback = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedBackContext.Provider
      value={{
        isLoading,
        feedback,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
