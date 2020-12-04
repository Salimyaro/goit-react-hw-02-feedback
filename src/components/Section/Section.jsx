import s from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}
Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
export default Section;
