import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Avatar from '@/components/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NotificationsScreenProps {
  workspace: string;
  onWorkspaceChange: (ws: string) => void;
}

export default function NotificationsScreen({ workspace, onWorkspaceChange }: NotificationsScreenProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    { id: '1', name: 'Katie Basile', type: 'New Call', lifecycle: 'New Patient', time: '07:24 PM', date: 'Jan 20', unread: true, tags: ['Appointment Not Scheduled', 'Callback'], summary: 'Katie Basile called to cancel her appointment scheduled for the upcoming Wednesday. She mentioned that she had left a message about the cancellation...' },
    { id: '2', name: '(570) 575-7175', type: 'Missed Call', lifecycle: 'Unknown', time: '07:24 PM', date: 'Jan 20', unread: true, tags: [], summary: null },
    { id: '3', name: 'Katie Basile', type: 'New Call', lifecycle: 'New Patient', time: '07:24 PM', date: 'Jan 20', unread: false, tags: ['Appointment Not Scheduled', 'Insurance: State / HMO'], summary: 'The caller intended to book an appointment for a toothache but did not complete the process because the dental office does not accept their insurance...' },
    { id: '4', name: '(570) 575-7175', type: 'Voicemail', lifecycle: 'New Patient', time: '07:24 PM', date: 'Jan 20', unread: true, tags: ['Voicemail', 'Missed Call'], summary: 'The caller intended to book an appointment for a toothache but did not complete the process because the dental office does not accept their insurance...' }
  ];

  const filteredNotifications = activeTab === 'Unread' 
    ? notifications.filter(n => n.unread) 
    : notifications;

  return (
    <div className="screen">
      <Header
        workspace={workspace}
        onWorkspaceChange={onWorkspaceChange}
        showSearch={false}
      />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-2">Notifications</h1>
        
        <div className="flex px-5 pb-4 gap-2.5">
          {['All', 'Unread'].map(tab => (
            <Button
              key={tab}
              variant="ghost"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg h-auto",
                activeTab === tab 
                  ? "bg-[#E5E7EB] text-[#111827] font-semibold" 
                  : "text-[#6B7280] hover:bg-transparent"
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
        
        {filteredNotifications.map(notification => (
          <div 
            key={notification.id}
            className={cn(
              "px-5 py-4 border-b border-[#F3F4F6] cursor-pointer transition-colors active:bg-[#F9FAFB] relative",
              notification.unread && "pl-7"
            )}
            onClick={() => navigate('/activity/detail')}
          >
            {notification.unread && (
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#3B82F6] rounded-full" />
            )}
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <Avatar 
                  initial={notification.name.charAt(0) === '(' 
                    ? '?' 
                    : notification.name.split(' ').map(n => n[0]).join('').substring(0, 2)
                  } 
                />
                <div>
                  <div className="text-base font-semibold text-[#111827]">
                    {notification.type} · {notification.name}
                  </div>
                  <div className="text-sm text-[#6B7280] mt-0.5">{notification.lifecycle}</div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-medium text-[#6B7280]">{notification.time}</div>
                <div className="text-[13px] text-[#6B7280] mt-0.5">{notification.date}</div>
              </div>
            </div>
            {notification.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-2.5 flex-wrap">
                {notification.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant={tag.includes('Not Scheduled') ? 'needs-action' : 'blue'}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {notification.summary && (
              <div className="text-sm text-[#6B7280] leading-relaxed bg-[#F9FAFB] p-3 rounded-lg mt-2.5">
                {notification.summary}
              </div>
            )}
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
