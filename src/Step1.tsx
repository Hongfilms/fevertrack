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
    <div className="min-h-screen flex items-center justify-center bg-softBlue px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 mt-8">
        <img
          src={`${import.meta.env.BASE_URL}images/beaver.png`}
          alt="비버 캐릭터"
          className="w-28 h-28 mx-auto mb-4 object-contain"
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          체온을 재볼까?
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">체중 (kg)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen transition"
              placeholder="예: 18.5"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">체온 (°C)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen transition"
              placeholder="예: 38.2"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="mt-6 w-full py-3 rounded-full bg-primaryGreen hover:bg-accentOrange transition text-white font-semibold text-lg"
        >
          측정 시작
        </button>

        <div className="mt-6 text-left">
          <p className="text-sm font-semibold text-gray-700 mb-2">체온 기록</p>
          <div className="w-full h-20 bg-gray-100 rounded-xl flex items-center justify-center">
            📈
          </div>
        </div>
      </div>
    </div>
  );
}
