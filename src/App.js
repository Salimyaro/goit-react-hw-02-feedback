import { Component, Fragment } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = ({ currentTarget: { value } }) => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = totalFeedbacks => {
    const res = Math.round((this.state.good / totalFeedbacks) * 100);
    return isNaN(res) ? 0 : res;
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacksPercentage = this.countPositiveFeedbackPercentage(
      totalFeedbacks,
    );
    return (
      <Fragment>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            state={this.state}
            total={totalFeedbacks}
            positivePercentage={positiveFeedbacksPercentage}
          />
        </Section>
      </Fragment>
    );
  }
}

export default App;
