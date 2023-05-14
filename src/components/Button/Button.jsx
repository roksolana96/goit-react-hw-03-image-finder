import PropTypes from 'prop-types';

export const Button = ({text, clickHandler }) =>{
    return (
        <div>
            <button type="button" onClick={clickHandler}>{text}</button>
        </div>
    )

}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    // showModal: PropTypes.func,
  };