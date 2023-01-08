import PropTypes from 'prop-types';
import css from './Modal.module.css';

export function Modal({src, alt, handleClick}) {
  return (
    <div className={css.Overlay}  onClick={handleClick}>
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}
