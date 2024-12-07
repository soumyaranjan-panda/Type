
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const sampleText = "or that who because what be also long never will";

  useEffect(() => {
    if (text === sampleText) {
      calculateWPM();
      setIsFinished(true);
    }
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!startTime) {
      setStartTime(new Date().getTime());
    }
    setText(value);
  };

  const calculateWPM = () => {
    const timeTaken = (new Date().getTime() - startTime) / 1000 / 60; // in minutes
    const wordCount = sampleText.split(' ').length;
    setWordsPerMinute(Math.round(wordCount / timeTaken));
  };

  const handleReset = () => {
    setText('');
    setStartTime(null);
    setWordsPerMinute(0);
    setIsFinished(false);
  };

  return (
    <div className="App">
      <h1>Typing Speed Calculator</h1>
      <p>Type the following text:</p>
      <blockquote>{sampleText}</blockquote>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={isFinished}
        placeholder="Start typing here..."
      ></textarea>
      {isFinished && (
        <>
          <p>Your typing speed is: {wordsPerMinute} WPM</p>
          <button onClick={handleReset}>Try Again</button>
        </>
      )}
    </div>
  );
}


export default App;
