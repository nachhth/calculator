import './ClearButton.css';

function ClearButton({ onClick: clear }) {
  return (
    <button className='clearButton' onClick={() => clear()}>
      C
    </button>
  );
}

export default ClearButton;
