import './Button.css';

function Button({ numberKey, className, onClick }) {
  return (
    <button className={className} onClick={() => onClick(numberKey)}>
      {numberKey}
    </button>
  );
}

export default Button;
