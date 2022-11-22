import './Button.scss';

const Button = ({ onClick, children }) => {
    return (
      <button className='Button' type="button" onClick={onClick}>
        <p className='btn-text'>{children}</p>
      </button>
    );
};

export default Button;