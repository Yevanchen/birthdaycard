'use client'
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Questionnaire from '@/components/Questionnaire'; // 确保路径正确
import confetti from 'canvas-confetti';

export default function Home() {

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [hasTriedAutoPlay, setHasTriedAutoPlay] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (!isPlayingMusic && audioRef.current&&!hasTriedAutoPlay) {
        audioRef.current.play()
        .then(() => {
          setIsPlayingMusic(true);
          setHasTriedAutoPlay(true); // 标记已尝试播放
        })
        .catch((error) => {
          console.error('Audio play failed:', error);
          setHasTriedAutoPlay(false); // 即使失败也标记为已尝试
        });
    }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlayingMusic, hasTriedAutoPlay]);

  const onQuizCompleted = () => {
    setShowConfetti(true);
    if (isPlayingMusic) {
      toggleMusic(); // 如果音乐正在播放，则暂停音乐
    }
    setTimeout(() => {
        setShowConfetti(false);
        setTimeout(() => {
            setShowModal(true); // 2秒后显示弹窗
        }, 1500);
    }, 3000);
};

  useEffect(() => {
    if (showConfetti) {
      confetti({
          zIndex: 9999,
    particleCount: 500, // 增加粒子数量以创建更丰富的效果
    angle: 90,
    spread: 320, // 增加扩散范围
    origin: { y: 0 }, // 从屏幕顶部开始
    startVelocity: 55, // 初始速度
    gravity: 0.2, // 重力，使粒子下落
    scalar: 1.2, // 粒子大小
      });
    }
  }, [showConfetti]);
  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlayingMusic(true);
      } else {
        audioRef.current.pause();
        setIsPlayingMusic(false);
      }
      setIsPlayingMusic(!isPlayingMusic); // 更新播放状态
    } 
  };

  // 确保将 onQuizCompleted 作为 prop 传递给 Questionnaire 组件
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
      question: "在过三个月就要高考了！没错是三个月不是两个月，我感觉你会去南京念书",
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
        { label: "C", value: "冰箱贴", correct: false },
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
        {/* 你的页面内容 */}
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
          <Questionnaire questions={questions} onQuizCompleted={onQuizCompleted} />
        </div>
        <button onClick={toggleMusic} style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 1000 }} className="p-3 bg-gray-700 text-white rounded-full">
          {isPlayingMusic ? 'Pause Music' : 'Play Music'}
        </button>
        {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto p-4">
    <div className="bg-white rounded-lg p-5 max-w-full max-h-full w-auto h-auto overflow-hidden">
      <h2 className="text-lg mb-4">调了一天的曲希望可以留在你的收听列表里，快点击屏幕看看</h2>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[1748px] max-h-[1240px]"> 
          <video width="100%" height="100%" controls>
            <source src="lovely shuqi.mp4" type="video/mp4" />
            你的浏览器不支持视频标签。
          </video>
        </div>
      </div>
      <button
  onClick={() => setShowModal(false)}
  className="absolute top-0 right-0 m-4 p-2 bg-white text-black font-bold border-2 border-gray-400 rounded-full hover:bg-gray-100 hover:border-gray-500 transition duration-300 ease-in-out"
>
  关闭
</button>
    </div>
  </div>
)}
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/11.png)' }}></div>
      </div>
    </>
  );
}
