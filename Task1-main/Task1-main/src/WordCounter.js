import React, { useState } from 'react';
function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="WordCounter">
        <h1 className="Heading">WORD COUNTER</h1> 
      <textarea
        className="Textarea"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p className="WordCount">Word Count: {wordCount}</p>
    </div>
  );
}
export default WordCounter;
