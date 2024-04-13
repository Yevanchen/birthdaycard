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
  const question = "中国在2018年四月份送了什么礼物给哈萨克斯坦?";
  const options = [
    { label: "A", value: "梅花" },
    { label: "B", value: "笔记本" },
    { label: "C", value: "水杉", correct: true },
    { label: "D", value: "手表" }
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
        <div className="questionnaire-wrapper">
          <Questionnaire question={question} options={options} />
        </div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/3.png)' }}></div>
      </div>
      
    </>
  );
}
