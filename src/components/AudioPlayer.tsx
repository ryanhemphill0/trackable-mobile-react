import { PlayIcon } from './Icons';

interface AudioPlayerProps {
  duration: string;
  onPlay?: () => void;
}

export default function AudioPlayer({ duration, onPlay }: AudioPlayerProps) {
  return (
    <div 
      className="audio-player" 
      onClick={(e) => { e.stopPropagation(); onPlay?.(); }}
    >
      <button className="play-btn">
        <PlayIcon />
      </button>
      <div className="waveform" />
      <div className="duration">{duration}</div>
    </div>
  );
}
