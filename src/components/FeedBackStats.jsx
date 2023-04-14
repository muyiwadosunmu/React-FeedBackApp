import React, { useContext } from "react";
import PropTypes from "prop-types";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackStats({}) {
  const { feedback } = useContext(FeedBackContext);
  /**Calculate ratings Average */
  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:{isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedBackStats.PropTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedBackStats;
