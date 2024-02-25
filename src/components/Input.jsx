import React, { useState } from 'react';
import Button from './Button';
import TextInput from './text_input';

const Input = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() === '') {
      alert('Please Create Your Todo!');
      return;
    }
    onSubmit(text);
    setText('');
  };

  return (
    <div className='text-center mt-20'>
      <TextInput value={text} onChange={(e) => setText(e.target.value)} />
      <Button text="Create Todo" onClick={handleSubmit} />
    </div>
  );
};

export default Input;
