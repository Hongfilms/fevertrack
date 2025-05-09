

import { useState, useEffect } from 'react';

interface Step3Props {
  selectedMedicine: '타이레놀' | '부루펜';
  onNext: () => void;
}

export default function Step3({ selectedMedicine, onNext }: Step3Props) {
  const [startTime] = useState<Date>(new Date());
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getRemainingTime = (hours: number) => {
    const elapsed = (now.getTime() - startTime.getTime()) / 1000;
    const remaining = Math.max(0, hours * 3600 - elapsed);
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = Math.floor(remaining % 60);
    return `${h}시간 ${m}분 ${s}초`;
  };

  const otherMedicine = selectedMedicine === '타이레놀' ? '부루펜' : '타이레놀';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Step 3: 복용 타이머</h2>
      <p className="mb-6 text-lg">복용한 해열제: <strong>{selectedMedicine}</strong></p>

      <div className="mb-4 text-center">
        <p className="text-sm text-gray-700">재복용 가능까지 남은 시간</p>
        <p className="text-xl font-bold text-blue-600">{getRemainingTime(4)}</p>
      </div>

      <div className="mb-6 text-center">
        <p className="text-sm text-gray-700">{otherMedicine} 교차복용 가능까지 남은 시간</p>
        <p className="text-xl font-bold text-green-600">{getRemainingTime(3)}</p>
      </div>

      <button
        onClick={onNext}
        className="bg-blue-500 text-white text-lg px-6 py-2 rounded hover:bg-blue-600"
      >
        다음
      </button>
    </div>
  );
}