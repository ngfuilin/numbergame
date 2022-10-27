import {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import Testpage from './Testpage';


const Input = () => {

    const [guess, setGuess] = useState('');
    const [prevnum, setPrevnum] = useState([]);
    const [result, setResult] = useState('');
    const [lowhigh, setLowhigh] = useState('');
    const [str, setStr] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const inputReference = useRef();

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    useEffect(() => {
        inputReference.current.focus();
    })
     
    const handleChange = event => {
        let { value, min, max } = event.target;
        setGuess(Math.max(Number(min), Math.min(Number(max), Number(value))));
    };

    const submitEvent = () => {
        let lst = str.concat(' ', guess);
        setStr(lst);
          
        if (Number(guess) === randomNumber) {
            setResult('Correct');
            setLowhigh('Congratulation');
            setIsDisabled(true);
        } else if (guess > randomNumber) {
            setResult('Wrong');
            setLowhigh('Last guess was too high');
        } else if (guess < randomNumber) {
            setResult('Wrong');
            setLowhigh('Last guess was too low');
        }
        setGuess('');
        setCount(count + 1);
        if (count >= 9) {
            setResult('!!!GAME OVER!!!');
            setIsDisabled(true);
        }
        
    }

    function resetGame() {
        setLowhigh('');
        setResult('');
        setIsDisabled(false);    
        setCount(0);  
        setGuess('');  
        setStr('');
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }  

    return (
         <div className="container">
            <h1 className="header">Number Guessing Game</h1>
            <div className='instruction'>
                <p>We have selected a random number between 1 and 100. 
                    See if you can guess it in 10 turns or fewer. 
                    We'll tell you if your guess was too high or too low.</p>
                <p>我們選擇了一個介於 1 到 100 之間的隨機數。看看你是否能在 10 圈或更短的時間內猜出它。 如果您的猜測太高或太低，我們會告訴您</p>
            </div>
            <div className='input'>
                <label>Enter a guess: </label>
                <input type='number' id = 'inputGuess' ref={inputReference} value={guess} min = {1} max = {100} onChange={handleChange} disabled={isDisabled}/>
                <button className='btnSubmit' onClick={submitEvent} disabled={isDisabled}>Submit</button>
            </div>
            <div className="param">
                <p>{`${str.length > 0 ? 'Previous Guess Number:': ''}`} {str}</p>
                <p className={`${isDisabled ? 'bg-green' : 'bg-red'}`}>{result}</p>
                <p className="lowhigh">{lowhigh}</p>
                {isDisabled && <button onClick={resetGame}>Start New Game</button>}                   
            </div>
            <div className="footer">  
            <Link to={{pathname: `/Testpage`}}>
               <button>Click Me</button>
            </Link>
            </div>
        </div>
    );
}

export default Input;