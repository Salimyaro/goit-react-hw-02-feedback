import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    const feedbackTitles = Object.keys(options);
    return (
      <Fragment>
        {feedbackTitles.map(item => {
          return (
            <button
              key={`${item}button`}
              className={s.button}
              type="button"
              value={item}
              onClick={onLeaveFeedback}
            >
              {item}
            </button>
          );
        })}
      </Fragment>
    );
  }
}

export default FeedbackOptions;
