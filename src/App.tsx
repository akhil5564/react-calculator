import { useState } from "react";
import Display from "./components/display/display";
import {
  IconBackspace,
  IconPercentage,
  IconDivide,
  IconPlus,
  IconMinus,
  IconEqual,
  IconX
} from "@tabler/icons-react";

function App() {
  const [calculation, setCalculation] = useState<string>('');
  const [result, setResult] = useState<string | number>('');

  const handleButtonClick = (value: string) => {
    setCalculation((prev) => prev + value);
  };


  const handleCalculate = () => {
    try {
      const calcResult = eval(calculation);
      setResult(calcResult);
    } catch (error) {
      setResult('Error');
    }
  };

  function handleClear() {
    setCalculation('');
    setResult('');
  }


  const handleBackspace = () => {
    setCalculation((prev) => prev.slice(0, -1));
  };



  return (
    <>

      <Display calculation={calculation} result={result.toString()} />

      <div className="container">
        <div className="touch-pad">
          <button className="light" onClick={handleClear}>C</button>
          <button className="light" onClick={handleBackspace}>
            <IconBackspace stroke={2} />
          </button>
          <button className="light" onClick={() => handleButtonClick('%')}>
            <IconPercentage stroke={2} />
          </button>
          <button className="orange" onClick={() => handleButtonClick('/')}>
            <IconDivide stroke={2} />
          </button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button className="orange" onClick={() => handleButtonClick('*')}>
            <IconX stroke={2} />

          </button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="orange" onClick={() => handleButtonClick('-')}>
            <IconMinus stroke={2} />
          </button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="orange" onClick={() => handleButtonClick('+')}>
            <IconPlus stroke={2} />
          </button>
          <button className="large" onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button className="orange" onClick={handleCalculate}>
            <IconEqual stroke={2} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
