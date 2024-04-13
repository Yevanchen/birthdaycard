// components/Questionnaire.tsx
import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
  correct?: boolean; // 可选属性，以便在不需要指定正确答案的情况下使用
}

interface QuestionnaireProps {
  question: string; // 单个问题的文本
  options: Option[]; // 选项数组
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option.label);
    setIsCorrectAnswer(option.correct ?? false);

    // 如果选项是正确的，你可能想在这里做一些处理，例如进入下一题
    if (option.correct) {
      console.log("Correct answer selected");
      // 这里可以添加进入下一题的逻辑，或者在父组件中处理
    } else {
      console.log("Incorrect answer, please try again.");
    }
  };

  return (
<div className="max-w-2xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
  <div className="text-center font-bold text-2xl mb-8 text-white">{question}</div>
  <div className="space-y-6">
    {options.map((option, index) => (
      <button
        key={index}
        className={`w-full flex items-center justify-between px-6 py-3 border-2 border-gray-500 rounded-lg text-left ${
          selectedOption === option.label
            ? option.correct
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
            : "hover:bg-blue-600 hover:text-white"
        } transition-colors duration-500 ease-in-out text-xl text-white`}
        onClick={() => handleOptionSelect(option)}
        type="button"
      >
        <span className="font-semibold">{option.label}</span>
        <span>{option.value}</span>
      </button>
    ))}
  </div>
</div>

  );
};

export default Questionnaire;
