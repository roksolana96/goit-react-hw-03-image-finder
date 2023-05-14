import { Oval } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Oval 
	height={100} 
	width={100}/>
    </StyledLoader>
  );
};