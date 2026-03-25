import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AudioPlayer from '@/components/AudioPlayer';
import { activitiesData } from '@/data/activities';
import { ActivitiesIcon } from '@/components/Icons';
import { cn } from '@/lib/utils';

interface ActivitiesScreenProps {
  workspace: string;
  onWorkspaceChange: (ws: string) => void;
}

export default function ActivitiesScreen({ workspace, onWorkspaceChange }: ActivitiesScreenProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Missed Calls', 'Voicemails'];

  const filteredActivities = useMemo(() => {
    let activities = activitiesData;
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      activities = activities.filter(a =>
        a.type.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q)
      );
    } else if (activeTab === 'Missed Calls') {
      activities = activities.filter(a => a.type === 'Missed Call');
    } else if (activeTab === 'Voicemails') {
      activities = activities.filter(a => a.type === 'Voicemail');
    }
    
    return activities;
  }, [searchQuery, activeTab]);

  return (
    <div className="screen">
      <Header
        workspace={workspace}
        onWorkspaceChange={onWorkspaceChange}
        showSearch={true}
        onSearch={setSearchQuery}
        searchPlaceholder="Search all activities..."
      />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-2">Activities</h1>
        
        {!searchQuery && (
          <div className="flex px-5 pb-4 gap-2.5 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <Button
                key={tab}
                variant="ghost"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg whitespace-nowrap shrink-0 h-auto",
                  activeTab === tab 
                    ? "bg-[#E5E7EB] text-[#111827] font-semibold" 
                    : "text-[#6B7280] hover:bg-transparent"
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="px-3.5 py-2 text-sm font-medium text-[#9CA3AF] rounded-lg whitespace-nowrap shrink-0 h-auto hover:bg-transparent"
            >
              + Create List
            </Button>
          </div>
        )}
        
        <div className="flex justify-between items-center px-5 py-3 text-sm text-[#6B7280]">
          <span className="font-medium">{filteredActivities.length} results</span>
          <span className="flex items-center gap-1 cursor-pointer">
            Sorted by Date
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </span>
        </div>
        
        {filteredActivities.length === 0 ? (
          <div className="py-10 px-5 text-center text-[#9CA3AF]">
            No activities found
          </div>
        ) : (
          <>
            <div className="date-group">Today</div>
            {filteredActivities.map(activity => (
              <div 
                key={activity.id} 
                className="px-5 py-4 border-b border-[#F3F4F6] cursor-pointer transition-colors active:bg-[#F9FAFB]"
                onClick={() => navigate('/activity/detail')}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-[10px] flex items-center justify-center",
                      activity.type === 'Missed Call' 
                        ? "bg-[#FEE2E2] text-[#DC2626]" 
                        : "bg-[#DBEAFE] text-[#2563EB]"
                    )}>
                      <div className="w-5 h-5">
                        <ActivitiesIcon />
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[#111827]">{activity.type}</div>
                      <div className="text-sm text-[#6B7280] mt-0.5">{activity.name}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-medium text-[#6B7280]">{activity.time}</div>
                    <div className="text-[13px] text-[#6B7280] mt-0.5">{activity.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2.5">
                  <Badge variant={activity.tagType as "blue" | "needs-action" | "scheduled" | "closed-won" | undefined}>
                    {activity.tag}
                  </Badge>
                  {activity.phone && (
                    <span className="text-[#6B7280] text-[13px]">{activity.phone}</span>
                  )}
                </div>
                {activity.hasAudio && activity.duration && (
                  <AudioPlayer duration={activity.duration} />
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
