import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  // 明确指定 audioRef 的类型为 HTMLAudioElement | null
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 如果音乐已经开始播放，则不执行任何操作
      if (isPlaying) return;
      // 否则，尝试播放音乐，并更新播放状态
      if (audioRef.current) {
        // TypeScript现在知道audioRef.current是一个HTMLAudioElement，因此play方法是可用的
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error('Audio play failed:', error));
      }
    };

    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll);

    // 组件卸载时移除监听器
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

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
      </div>
    </>
  );
}
