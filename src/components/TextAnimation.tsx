"use client"
import { useState, useEffect } from 'react';

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setVisibleText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 150); // Adjust the interval as per your preference

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, [text]);

  return (
    <div className="text-4xl font-bold">{visibleText}</div>
  );
};

export default TextAnimation;
