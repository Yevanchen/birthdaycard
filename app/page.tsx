import { useState } from 'react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false); // 控制视频显示的状态

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 阻止表单默认提交行为
    setShowVideo(true); // 显示视频
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* 音乐自动播放 */}
      <audio src="/your-music-file.mp3" autoPlay loop hidden />

      {/* 描述段落 */}
      <p className="text-xl text-center mb-4">Happy Birthday, dear friend! 🎉</p>

      {/* 表单 */}
      {!showVideo && (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-2 border rounded"
            required
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      )}

      {/* 条件渲染的视频 */}
      {showVideo && (
        <video controls width="560" className="mt-4">
          <source src="/your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
