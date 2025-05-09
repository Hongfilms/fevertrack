import { useState } from 'react';

interface Step2Props {
  onNext: (selectedSymptoms: string[]) => void;
}

const symptomOptions = [
  '기침',
  '콧물',
  '오한',
  '구토',
  '설사',
  '무기력',
  '두통',
  '발진'
];

export default function Step2({ onNext }: Step2Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSymptom = (symptom: string) => {
    setSelected(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-6">
      <h2 className="text-2xl font-semibold mb-6">Step 2: 증상을 선택해주세요</h2>

      <div className="grid grid-cols-2 gap-3 max-w-md mb-6">
        {symptomOptions.map(symptom => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors
              ${selected.includes(symptom)
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          >
            {symptom}
          </button>
        ))}
      </div>

      <button
        onClick={() => onNext(selected)}
        className="bg-blue-500 text-white text-lg px-6 py-2 rounded hover:bg-blue-600"
      >
        다음
      </button>
    </div>
  );
}

