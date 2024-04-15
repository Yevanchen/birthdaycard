// components/Questionnaire.tsx
import React, { useState, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
  correct: boolean; // 将 correct 属性标记为可选
}

interface Question {
  question: string;
  options: Option[];
}

interface QuestionnaireProps {
  questions: Question[];
  onQuizCompleted: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ questions, onQuizCompleted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCorrect, setShowCorrect] = useState<boolean | null>(null);
  

  // 处理选项的选择
  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option.label);
    setShowCorrect(option.correct);
    
    if (option.correct) {
      // 正确答案，延时后渲染下一题
      setTimeout(() => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
          setCurrentQuestionIndex(nextIndex);
          setSelectedOption(null);
          setShowCorrect(null);
        } else {
          // 所有问题回答完成
          onQuizCompleted();
        }
      }, 1000); // 1秒后自动渲染下一题
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <div className="text-center font-bold text-2xl mb-8 text-white">{questions[currentQuestionIndex].question}</div>
      <form>
        <div className="space-y-6">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-4 py-2 border rounded-md text-left transition-colors duration-300 ${
                selectedOption === option.label
                  ? option.correct
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'border-gray-500 text-gray-300 hover:border-blue-700 hover:bg-blue-700'
              } rounded-lg text-left transition-colors duration-300 ease-in-out text-xl`}
              type="button"
              onClick={() => handleOptionSelect(option)}
            >
              <span className="font-semibold">{option.label}</span>
              <span>{option.value}</span>
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
