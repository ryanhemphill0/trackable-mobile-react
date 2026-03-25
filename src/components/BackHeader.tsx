import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from './Icons';

interface BackHeaderProps {
  rightContent?: React.ReactNode;
}

export default function BackHeader({ rightContent }: BackHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="px-5 py-3 bg-white border-b border-[#E5E7EB] flex justify-between items-center shrink-0">
      <Button 
        variant="ghost" 
        className="text-[#3B82F6] font-medium text-base p-0 h-auto hover:bg-transparent"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
        Back
      </Button>
      {rightContent && <div>{rightContent}</div>}
    </header>
  );
}
