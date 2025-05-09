import React from 'react';

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <div>
      <h2>Step 1</h2>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
