import React from "react";

import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickEventBtn = (option) => {
    this.setState((state) => {
      return { [option]: state[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good / this.countTotalFeedback();
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.clickEventBtn}
        />

        {/* <h2>Please leave feedback</h2>
        <button type="button" name="good" onClick={this.clickEventBtn}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.clickEventBtn}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.clickEventBtn}>
          Bad
        </button> */}

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage() * 100}
        />
      </div>
    );
  }
}

export default Feedback;
