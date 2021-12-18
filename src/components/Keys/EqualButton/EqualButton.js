import './EqualButton.css';

function EqualButton({ onClick }) {
  return (
    <button className='equalButton' onClick={() => onClick()}>
      =
    </button>
  );
}

export default EqualButton;
