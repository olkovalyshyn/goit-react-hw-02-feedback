import React from "react";

import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.clickEventBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() * 100}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
