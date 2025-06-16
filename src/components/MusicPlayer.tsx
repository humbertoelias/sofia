import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const tracks = [
    { src: '/music/just-the-way-you-are.mp3', title: 'Just The Way You Are - Bruno Mars' },
    { src: '/music/fix-you.mp3', title: 'Fix You - Coldplay' },
    { src: '/music/mirrors.mp3', title: 'Mirrors - Justin Timberlake' },
    { src: '/music/velha-infancia.mp3', title: 'Velha Infância - Tribalistas' }
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Erro ao tentar tocar o áudio:', error);
      });
    }
  }, [currentTrack, isPlaying]);

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-rose-100 border border-rose-300 p-4 rounded-xl shadow-lg max-w-xs">
      <audio ref={audioRef} src={tracks[currentTrack].src} autoPlay />

      <div className="mb-2 text-sm text-rose-700 font-semibold text-center">
        Tocando agora:<br />
        <span className="text-purple-800">{tracks[currentTrack].title}</span>
      </div>

      <div className="flex justify-center space-x-2">
        <button
          onClick={handlePlayPause}
          className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 text-white text-xs font-medium hover:shadow-md transition"
        >
          {isPlaying ? 'Pausar' : 'Tocar'}
        </button>

        <button
          onClick={handleNext}
          className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-medium hover:shadow-md transition"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
