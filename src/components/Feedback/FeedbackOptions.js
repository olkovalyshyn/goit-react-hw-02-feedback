import React from "react";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <button type="button" name={option} onClick={onLeaveFeedback(option)}>
      {option}
    </button>
  ));
}

//   <h2>Please leave feedback</h2>
//   <button type="button" name="good" onClick={onLeaveFeedback}>
//     Good
//   </button>
//   <button type="button" name="neutral" onClick={onLeaveFeedback}>
//     Neutral
//   </button>
//   <button type="button" name="bad" onClick={onLeaveFeedback}>
//     Bad
//   </button>
