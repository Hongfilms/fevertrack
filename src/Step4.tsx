

import { useState } from 'react';

interface Step4Props {
  onNext: (records: { time: string; temperature: number }[]) => void;
}

export default function Step4({ onNext }: Step4Props) {
  const [temperature, setTemperature] = useState('');
  const [records, setRecords] = useState<{ time: string; temperature: number }[]>([]);

  const handleAddRecord = () => {
    const temp = parseFloat(temperature);
    if (!isNaN(temp)) {
      const now = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
      setRecords(prev => [...prev, { time: now, temperature: temp }]);
      setTemperature('');
    } else {
      alert('체온을 숫자로 입력해주세요.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Step 4: 체온 기록</h2>

      <div className="w-full max-w-xs mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">체온 입력 (°C)</label>
        <input
          type="number"
          inputMode="decimal"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="예: 37.8"
          className="w-full border rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleAddRecord}
        className="mb-6 bg-blue-500 text-white text-lg px-6 py-2 rounded hover:bg-blue-600"
      >
        기록 추가
      </button>

      <div className="w-full max-w-xs">
        <h3 className="text-lg font-medium mb-2">기록된 체온</h3>
        <ul className="space-y-2">
          {records.map((record, index) => (
            <li key={index} className="flex justify-between bg-gray-100 px-4 py-2 rounded">
              <span>{record.time}</span>
              <span>{record.temperature}°C</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onNext(records)}
        className="mt-8 bg-green-500 text-white text-lg px-6 py-2 rounded hover:bg-green-600"
      >
        다음
      </button>
    </div>
  );
}