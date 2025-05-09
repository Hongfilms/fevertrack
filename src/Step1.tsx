import { useState } from 'react';

interface Step1Props {
  onNext: (weight: number, temperature: number) => void;
}

export default function Step1({ onNext }: Step1Props) {
  console.log("디버그: Step1 진입 확인");
  const [weight, setWeight] = useState('');
  const [temperature, setTemperature] = useState('');

  // Tailwind token 적용 (색상: primaryGreen, accentOrange, softBlue 등)

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-softBlue p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          🧸 <span className="ml-2">Step 1: 체중과 체온 입력</span>
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-1">체중 (kg)</label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="예: 18.5"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">체온 (°C)</label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="예: 38.2"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen transition"
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="mt-8 w-full bg-primaryGreen text-white text-base font-semibold py-3 rounded-xl hover:bg-accentOrange transition"
        >
          다음
        </button>
      </div>
    </div>
  );
}
