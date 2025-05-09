import { useState } from 'react';

interface Step1Props {
  onNext: (weight: number, temperature: number) => void;
}

export default function Step1({ onNext }: Step1Props) {
  console.log("디버그: Step1 진입 확인");
  const [weight, setWeight] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleNext = () => {
    const w = parseFloat(weight);
    const t = parseFloat(temperature);
    if (!isNaN(w) && !isNaN(t)) {
      onNext(w, t);
    } else {
      alert('숫자를 정확히 입력해주세요');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Step 1: 체중과 체온 입력</h2>

      <div className="w-full max-w-xs mb-4 shadow-sm border rounded p-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">체중 (kg)</label>
        <input
          type="number"
          inputMode="decimal"
          min="0"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="예: 18.5 (kg)"
          className="w-full border rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-full max-w-xs mb-6 shadow-sm border rounded p-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">체온 (°C)</label>
        <input
          type="number"
          inputMode="decimal"
          min="0"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="예: 38.2 (°C)"
          className="w-full border rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleNext}
        className="bg-blue-500 text-white text-lg px-8 py-3 rounded hover:bg-blue-600 transition"
      >
        다음
      </button>
    </div>
  );
}
