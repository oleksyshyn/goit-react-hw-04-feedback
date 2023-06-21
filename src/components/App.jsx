import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  
  handleFeedback = option => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1
      }
    });
  }
 
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback}/>
        </Section>
        <Section title="Statistics">
          {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}

export default App;

