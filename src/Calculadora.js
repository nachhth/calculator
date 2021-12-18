import './Calculadora.css';
import Screen from './components/Screen/Screen';
import ClearButton from './components/Keys/ClearButton/ClearButton';
import Button from './components/Keys/Button/Button';
import EqualButton from './components/Keys/EqualButton/EqualButton';
import { useState } from 'react';

const operations = {
  '/': (op1, op2) => op1 / op2,
  '*': (op1, op2) => op1 * op2,
  '-': (op1, op2) => op1 - op2,
  '+': (op1, op2) => op1 + op2,
};

function Calculadora() {
  const [firstOperand, setFirstOperand] = useState('');
  const [operation, setOperation] = useState('');
  const [secondOperand, setSecondOperand] = useState('');

  function onClickNumber(numberKey) {
    if (!operation) {
      setFirstOperand(`${firstOperand}${numberKey}`);
    } else {
      setSecondOperand(`${secondOperand}${numberKey}`);
    }
  }

  function calcResult() {
    if (operation) {
      const result = operations[operation](
        Number(firstOperand),
        Number(secondOperand)
      );
      setFirstOperand(`${result}`);
      setOperation('');
      setSecondOperand('');
    }
  }

  function clear() {
    setFirstOperand('');
    setOperation('');
    setSecondOperand('');
  }

  function onClickDot() {
    if (!operation) {
      setFirstOperand(
        firstOperand.includes('.') ? firstOperand : `${firstOperand || '0'}.`
      );
    } else {
      setSecondOperand(
        secondOperand.includes('.') ? secondOperand : `${secondOperand || '0'}.`
      );
    }
  }

  return (
    <div className='Calculadora'>
      <Screen
        firstOperand={firstOperand}
        operation={operation}
        secondOperand={secondOperand}
      />
      <div className='keys'>
        {/* Fila 1 */}
        <ClearButton onClick={clear} />
        <Button numberKey='/' onClick={setOperation} />
        <Button numberKey='*' onClick={setOperation} />
        {/* Fila 2 */}
        <Button numberKey='7' onClick={onClickNumber} />
        <Button numberKey='8' onClick={onClickNumber} />
        <Button numberKey='9' onClick={onClickNumber} />
        <Button numberKey='-' onClick={setOperation} />
        {/* Fila 3 */}
        <Button numberKey='4' onClick={onClickNumber} />
        <Button numberKey='5' onClick={onClickNumber} />
        <Button numberKey='6' onClick={onClickNumber} />
        <Button numberKey='+' className='plus' onClick={setOperation} />
        {/* Fila 4 */}
        <Button numberKey='1' onClick={onClickNumber} />
        <Button numberKey='2' onClick={onClickNumber} />
        <Button numberKey='3' onClick={onClickNumber} />
        {/* Fila 5 */}
        <Button numberKey='0' onClick={onClickNumber} />
        <Button numberKey='.' onClick={onClickDot} />
        <EqualButton onClick={calcResult} />
      </div>
    </div>
  );
}

export default Calculadora;
