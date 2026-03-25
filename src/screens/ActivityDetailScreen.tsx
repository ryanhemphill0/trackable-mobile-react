import { useNavigate } from 'react-router-dom';
import BackHeader from '@/components/BackHeader';
import BottomNav from '@/components/BottomNav';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Avatar from '@/components/Avatar';
import { CheckIcon, ChevronRight } from '@/components/Icons';

interface ActivityDetailScreenProps {
  workspace: string;
}

export default function ActivityDetailScreen({ workspace }: ActivityDetailScreenProps) {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <BackHeader />
      <div className="screen-content">
        {/* Activity Header */}
        <div className="px-5 pt-5 pb-6 text-center border-b border-[#E5E7EB]">
          <div className="text-sm font-medium text-[#9CA3AF] mb-2">{workspace}</div>
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-1">Inbound Call</h1>
          <div className="text-[15px] text-[#6B7280] mb-4">Today at 4:07 PM</div>
          <Badge variant="scheduled">Appointment Rescheduled</Badge>
        </div>
        
        {/* Audio Player */}
        <div className="px-5 py-4">
          <div className="audio-player !m-0">
            <button className="play-btn !w-10 !h-10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <div className="waveform"></div>
            <div className="duration">00:00 / 01:28</div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex px-5 pb-4 gap-2.5">
          <Button variant="ghost" className="px-3.5 py-2 text-sm font-semibold bg-[#E5E7EB] text-[#111827] rounded-lg h-auto">
            Summary
          </Button>
          <Button variant="ghost" className="px-3.5 py-2 text-sm font-medium text-[#6B7280] rounded-lg h-auto hover:bg-transparent">
            Transcript
          </Button>
          <Button variant="ghost" className="px-3.5 py-2 text-sm font-medium text-[#6B7280] rounded-lg h-auto hover:bg-transparent">
            Details
          </Button>
        </div>
        
        {/* AI Summary */}
        <div className="px-5 py-4">
          <Card className="bg-[#F9FAFB] border-0 p-4">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="bg-[#111827] text-white px-2 py-0.5 rounded text-[11px] font-semibold">A.I.</span>
              <span className="text-sm font-semibold text-[#374151]">Summary</span>
            </div>
            <p className="text-[15px] text-[#4B5563] leading-relaxed">
              Laura Guffey called to reschedule her previously scheduled appointment on February 3, 2026. She successfully rescheduled it to February 5, 2026, at 12:30 pm.
            </p>
          </Card>
        </div>
        
        {/* Action Items */}
        <div className="px-5 pb-4">
          <Card className="bg-[#F0FDF4] border-0 p-4">
            <div className="flex items-center gap-2.5 mb-2.5">
              <CheckIcon />
              <span className="text-sm font-semibold text-[#374151]">Action Items</span>
            </div>
            <p className="text-[15px] text-[#4B5563] leading-relaxed">
              No further action is required as the appointment has been successfully rescheduled.
            </p>
          </Card>
        </div>
        
        {/* Identified Contact */}
        <div className="px-5 pb-5">
          <div className="text-sm font-semibold text-[#374151] mb-3">Identified Contact</div>
          <Card 
            className="p-4 flex items-center gap-3.5 cursor-pointer active:bg-[#F9FAFB] transition-colors"
            onClick={() => navigate('/contact/laura-guffey')}
          >
            <Avatar initial="L" />
            <div className="flex-1">
              <div className="text-base font-semibold text-[#111827]">Laura Guffey</div>
              <div className="text-[13px] text-[#6B7280] mt-0.5">Current Patient • (360) 880-5661</div>
            </div>
            <ChevronRight />
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
