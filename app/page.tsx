'use client'
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Questionnaire from '@/components/Questionnaire'; // 确保路径正确

export default function Home() {
  

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isPlaying) return;
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error('Audio play failed:', error));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

  // 定义Questionnaire组件需要的问题和选项
  const questions = [
    {
      question: "你还记得去年今日你的叶帆送了什么好礼物?",
      options: [
        { label: "A", value: "书签" , correct: false },
        { label: "B", value: "笔记本" , correct: false},
        { label: "C", value: "水晶的包包", correct: true },
        { label: "D", value: "小台灯" , correct: false}
      ]
    },
    // 添加第二个问题
    {
      question: "前年呢?前年还记不记得呀？",
      options: [
        { label: "A", value: "围巾" , correct: false},
        { label: "B", value: "卡通键盘", correct: true },
        { label: "C", value: "海报", correct: false },
        { label: "D", value: "香水" , correct: false}
      ]
    },
    // 你可以继续添加更多的问题
    {
      question: "这是舒舒考上大学的第一年越来越久远了呢？",
      options: [
        { label: "A", value: "蛋糕", correct: false },
        { label: "B", value: "马克笔" , correct: false},
        { label: "C", value: "口红" , correct: false},
        { label: "D", value: "T恤" , correct: true}
      ]
    },

    {
      question: "在过三个月就要高考了！没错是三个月不是两个月 是7.8日 我没考好你呢",
      options: [
        { label: "A", value: "明信片" , correct: true},
        { label: "B", value: "手帐本" , correct: false},
        { label: "C", value: "曲奇饼干" , correct: false},
        { label: "D", value: "发簪" , correct: false}
      ]
    },

    {
      question: "今年是分班后的第一年，我想我的前桌朋友们了",
      options: [
        { label: "A", value: "网易云水杯" , correct: true},
        { label: "B", value: "蛋挞" , correct: false},
        { label: "C", value: "曲奇饼干", correct: false },
        { label: "D", value: "小槑同学的文具" , correct: false}
      ]
    },
    
    {
      question: "今年是我第一次送礼物给你🎁哎如果没看你的空间我真的记不起来了",
      options: [
        { label: "A", value: "信封", correct: false },
        { label: "B", value: "钢笔" , correct: false},
        { label: "C", value: "手表" , correct: true},
        { label: "D", value: "彩带胶卷"  , correct: false}
      ]
    },

  ];

  return (
    <>
      <Head>
        <title>Happy Birthday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio ref={audioRef} src="/jieko.mp3" loop hidden></audio>
      <div className="fixed inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/bg.png)' }}></div>
      <div className="flex flex-col relative">
      
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/1.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/2.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/3.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/4.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/5.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/6.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/7.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/8.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/9.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/10.png)' }}></div>
        <div className="questionnaire-wrapper">
          <Questionnaire questions={questions} onQuizCompleted={() => console.log('Quiz completed!')} />
        </div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/11.png)' }}></div>
      </div>
      
    </>
  );
}
