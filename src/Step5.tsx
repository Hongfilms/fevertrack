

interface Step5Props {
  records: { time: string; temperature: number }[];
  onNext: () => void;
}

export default function Step5({ records, onNext }: Step5Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-6">
      <h2 className="text-2xl font-semibold mb-6">Step 5: 체온 변화 요약</h2>

      <div className="w-full max-w-md space-y-2 mb-8">
        {records.map((record, index) => (
          <div
            key={index}
            className="flex justify-between px-4 py-2 bg-gray-100 rounded shadow-sm"
          >
            <span className="text-gray-600">{record.time}</span>
            <span className="font-medium">{record.temperature}°C</span>
          </div>
        ))}
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