import { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistics.module.css';

class Statistics extends Component {
  static propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { state, total, positivePercentage } = this.props;
    const feedbackTitles = Object.keys(this.props.state);
    if (total < 1) {
      return <Notification message="No feedback given"></Notification>;
    }
    return (
      <ul className={s.list}>
        {feedbackTitles.map(item => {
          return (
            <li className={s.listItem} key={`${item}listItem`}>
              <span className={s.itemName}>{item}:</span>
              <span className={s.itemVal}>{state[item]}</span>
            </li>
          );
        })}
        <li className={s.listItem} key={`totallistItem`}>
          <span className={s.itemName}>Total:</span>
          <span className={s.itemVal}>{total}</span>
        </li>
        <li className={s.listItem} key={`positivelistItem`}>
          <span className={s.itemName}>Positive feedback:</span>
          <span className={s.itemVal}>{positivePercentage}%</span>
        </li>
      </ul>
    );
  }
}

export default Statistics;
