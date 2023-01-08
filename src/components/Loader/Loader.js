import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export function Loader({visible}) {
  return (
    <Dna
      visible={visible}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }}
      wrapperClass="dna-wrapper"
    />
  );
}


Loader.propTypes = {
  visible: PropTypes.bool.isRequired
}