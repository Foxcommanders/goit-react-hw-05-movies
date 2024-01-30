import { Circles } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Circles
        height="160"
        width="160"
        color="#4bc1af"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
