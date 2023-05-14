import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';


export const Button = ({children, text, clickHandler }) =>{
    return (
        <LoadMore type="button" onClick={clickHandler}>
            {text} {children}</LoadMore>
    )

}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    // showModal: PropTypes.func,
  };