import './Screen.css';

function Screen({ firstOperand, operation, secondOperand }) {
  const screenDisplay = `${firstOperand}${operation}${secondOperand}`;
  return <div className='screen'>{screenDisplay || '0'}</div>;
}

export default Screen;
