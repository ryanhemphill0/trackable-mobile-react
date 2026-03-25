import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';
import { PipelineIcon, NotificationIcon, SettingsIcon, SignOutIcon } from '@/components/Icons';

interface MoreScreenProps {
  workspace: string;
  onWorkspaceChange: (ws: string) => void;
}

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick?: () => void;
}

function MenuItem({ icon, title, desc, onClick }: MenuItemProps) {
  return (
    <Card 
      className="p-4 mb-3 flex items-center gap-3.5 cursor-pointer active:bg-[#F9FAFB] transition-all active:scale-[0.99]"
      onClick={onClick}
    >
      <div className="w-11 h-11 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
        <div className="w-[22px] h-[22px] text-[#374151]">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold text-[#111827]">{title}</div>
        <div className="text-[13px] text-[#6B7280] mt-0.5">{desc}</div>
      </div>
      <span className="text-[#D1D5DB] text-xl">›</span>
    </Card>
  );
}

export default function MoreScreen({ workspace, onWorkspaceChange }: MoreScreenProps) {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <Header
        workspace={workspace}
        onWorkspaceChange={onWorkspaceChange}
        showSearch={false}
      />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-4">More</h1>
        
        <div className="px-5">
          <MenuItem
            icon={<PipelineIcon />}
            title="Pipelines"
            desc="Track leads through stages"
          />
          
          <MenuItem
            icon={<NotificationIcon />}
            title="Notifications"
            desc="Call alerts and updates"
            onClick={() => navigate('/notifications')}
          />
          
          <MenuItem
            icon={<SettingsIcon />}
            title="Settings"
            desc="Profile, users, integrations"
          />
          
          <MenuItem
            icon={<SignOutIcon />}
            title="Sign Out"
            desc="ryanhemphill0@gmail.com"
          />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
