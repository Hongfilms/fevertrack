import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

function App() {
  const [step, setStep] = useState(1);
  const [weight, setWeight] = useState<number | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<'타이레놀' | '부루펜'>('타이레놀');
  const [temperatureRecords, setTemperatureRecords] = useState<{ time: string; temperature: number }[]>([]);

  console.log('App rendering, current step:', step);

  if (step === 1) {
    return (
      <Step1
        onNext={(w: number, t: number) => {
          setWeight(w);
          setTemperature(t);
          setStep(2);
        }}
      />
    );
  }

  if (step === 2) {
    return (
      <Step2
        onNext={(symptoms: string[]) => {
          console.log('선택된 증상:', symptoms);
          setSymptoms(symptoms);
          const containsVomitingOrDiarrhea = symptoms.includes('구토') || symptoms.includes('설사');
          setSelectedMedicine(containsVomitingOrDiarrhea ? '타이레놀' : '부루펜');
          setStep(3);
        }}
      />
    );
  }

  if (step === 3) {
    return (
      <Step3
        selectedMedicine={selectedMedicine}
        onNext={() => {
          console.log('Step3 완료!');
          setStep(4);
        }}
      />
    );
  }

  if (step === 4) {
    return (
      <Step4
        onNext={(records: { time: string; temperature: number }[]) => {
          console.log('기록된 체온:', records);
          setTemperatureRecords(records);
          setStep(5);
        }}
      />
    );
  }

  if (step === 5) {
    return (
      <Step5
        records={temperatureRecords}
        onNext={() => {
          console.log('Step5 완료!');
          setStep(6);
        }}
      />
    );
  }

  if (step === 6) {
    return (
      <Step6
        weight={weight!}
        temperature={temperature!}
        symptoms={symptoms}
        selectedMedicine={selectedMedicine}
        temperatureRecords={temperatureRecords}
        onReset={() => {
          setStep(1);
          setWeight(null);
          setTemperature(null);
          setSymptoms([]);
          setSelectedMedicine('타이레놀');
          setTemperatureRecords([]);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p>알 수 없는 단계: {step}</p>
    </div>
  );
}

export default App
