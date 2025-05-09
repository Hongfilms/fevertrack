import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Step6Props {
  weight: number;
  temperature: number;
  symptoms: string[];
  selectedMedicine: string;
  temperatureRecords: { time: string; temperature: number }[];
  onReset: () => void;
}

export default function Step6({
  weight,
  temperature,
  symptoms,
  selectedMedicine,
  temperatureRecords,
  onReset
}: Step6Props) {
  const handleDownloadPdf = async () => {
    const element = document.getElementById('report-content');
    if (!element) return;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('FeverTrack_Report.pdf');
  };

  const handleSaveImage = async () => {
    const element = document.getElementById('report-content');
    if (!element) return;
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'FeverTrack_Report.png';
    link.click();
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">Step 6: 리포트 요약</h2>

      <div id="report-content" className="w-full max-w-md space-y-4 text-sm text-gray-800 mb-8">
        <div>
          <strong>체중:</strong> {weight} kg
        </div>
        <div>
          <strong>초기 체온:</strong> {temperature} °C
        </div>
        <div>
          <strong>증상:</strong> {symptoms.join(', ')}
        </div>
        <div>
          <strong>복용한 해열제:</strong> {selectedMedicine}
        </div>
        <div>
          <strong>체온 기록:</strong>
          <ul className="mt-1 list-disc list-inside">
            {temperatureRecords.map((record, index) => (
              <li key={index}>
                {record.time} - {record.temperature}°C
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={handleDownloadPdf}
        className="mb-4 bg-gray-700 text-white text-lg px-6 py-2 rounded hover:bg-gray-800"
      >
        PDF 저장
      </button>

      <button
        onClick={handleSaveImage}
        className="mb-4 bg-green-500 text-white text-lg px-6 py-2 rounded hover:bg-green-600"
      >
        이미지 저장
      </button>

      <button
        onClick={onReset}
        className="bg-blue-500 text-white text-lg px-6 py-2 rounded hover:bg-blue-600"
      >
        다시 시작하기
      </button>
    </div>
  );
}
