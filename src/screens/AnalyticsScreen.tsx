import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { ChevronRight } from '@/components/Icons';

interface AnalyticsScreenProps {
  workspace: string;
  onWorkspaceChange: (ws: string) => void;
}

export default function AnalyticsScreen({ workspace, onWorkspaceChange }: AnalyticsScreenProps) {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <Header
        workspace={workspace}
        onWorkspaceChange={onWorkspaceChange}
        showSearch={false}
      />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-2">Analytics</h1>
        
        <div className="px-5 space-y-3">
          <Card 
            className="p-4 cursor-pointer active:bg-[#F9FAFB] transition-colors"
            onClick={() => navigate('/dashboard/marketing')}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-[#DBEAFE] rounded-[10px] flex items-center justify-center">
                <svg viewBox="0 0 256 256" fill="#2563EB" width="24" height="24">
                  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-[#111827]">Marketing Overview</div>
                <div className="text-[13px] text-[#6B7280]">ROI, leads, conversions</div>
              </div>
              <ChevronRight />
            </div>
          </Card>
          
          <Card 
            className="p-4 cursor-pointer active:bg-[#F9FAFB] transition-colors"
            onClick={() => navigate('/dashboard/patients')}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-[#D1FAE5] rounded-[10px] flex items-center justify-center">
                <svg viewBox="0 0 256 256" fill="#059669" width="24" height="24">
                  <path d="M125.18,156.94a64,64,0,1,0-82.36,0,100.23,100.23,0,0,0-39.49,32,12,12,0,0,0,19.35,14.2,76,76,0,0,1,122.64,0,12,12,0,0,0,19.36-14.2A100.33,100.33,0,0,0,125.18,156.94ZM44,108a40,40,0,1,1,40,40A40,40,0,0,1,44,108Zm206.1,97.67a12,12,0,0,1-16.78-2.57A76.31,76.31,0,0,0,172,172a12,12,0,0,1,0-24,40,40,0,1,0-14.85-77.16,12,12,0,1,1-8.92-22.28,64,64,0,0,1,55.53,115.51,100.34,100.34,0,0,1,29.78,30.77A12,12,0,0,1,250.1,205.67Z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-[#111827]">New Patients</div>
                <div className="text-[13px] text-[#6B7280]">Patient acquisition metrics</div>
              </div>
              <ChevronRight />
            </div>
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
