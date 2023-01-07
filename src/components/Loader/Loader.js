import { Dna } from 'react-loader-spinner';

export function Loader({visible}) {
  return (
    <Dna
      visible={visible}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}
