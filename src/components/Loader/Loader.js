import { ThreeDots } from 'react-loader-spinner';
import { BoxLoader } from './Loader.styled';

export function Loader() {
  return (
    <BoxLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </BoxLoader>
  );
}
