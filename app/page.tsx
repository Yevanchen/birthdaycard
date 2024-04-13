import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Birthday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio src="/周杰伦 - 借口.mp3" autoPlay loop hidden></audio>
      {/* bg.png 作为所有页面的背景 */}
      <div className="fixed inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/bg.png)' }}></div>
      <div className="flex flex-col relative">
        {/* 1.png, 2.png, 3.png 分别作为三个页面的主要内容 */}
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/1.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/2.png)' }}></div>
        <div className="h-screen flex justify-center items-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: 'url(/3.png)' }}></div>
      </div>
    </>
  );
}
