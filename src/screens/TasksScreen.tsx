import { useState } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { tasksData } from '@/data/activities';
import { WarningIcon, ClockIcon, CalendarIcon, PlusIcon } from '@/components/Icons';
import { cn } from '@/lib/utils';

interface TasksScreenProps {
  workspace: string;
  onWorkspaceChange: (ws: string) => void;
}

interface TaskSectionProps {
  title: string;
  icon: React.ReactNode;
  tasks: typeof tasksData;
  colorClass: string;
}

function TaskSection({ title, icon, tasks, colorClass }: TaskSectionProps) {
  return (
    <Card className="mx-5 mb-4 overflow-hidden">
      <div className="px-4 py-3.5 flex justify-between items-center bg-[#FAFAFA] border-b border-[#E5E7EB]">
        <div className={cn("text-[15px] font-semibold flex items-center gap-2", colorClass)}>
          {icon}
          {title}
        </div>
        <span className="bg-[#E5E7EB] px-2.5 py-0.5 rounded-xl text-[13px] font-semibold text-[#6B7280]">
          {tasks.length}
        </span>
      </div>
      {tasks.map((task, index) => (
        <div 
          key={task.id} 
          className={cn(
            "px-4 py-3.5 flex gap-3.5 items-start cursor-pointer transition-colors active:bg-[#F9FAFB]",
            index < tasks.length - 1 && "border-b border-[#F3F4F6]"
          )}
        >
          <div className="w-[22px] h-[22px] border-2 border-[#D1D5DB] rounded-md mt-0.5 shrink-0" />
          <div className="flex-1">
            <div className="text-[15px] font-medium text-[#111827] mb-1">{task.title}</div>
            <div className="text-[13px] text-[#6B7280]">{task.meta}</div>
          </div>
        </div>
      ))}
    </Card>
  );
}

export default function TasksScreen({ workspace, onWorkspaceChange }: TasksScreenProps) {
  const [activeTab, setActiveTab] = useState('All Tasks');

  const overdueTasks = tasksData.filter(t => t.section === 'overdue');
  const todayTasks = tasksData.filter(t => t.section === 'today');
  const upcomingTasks = tasksData.filter(t => t.section === 'upcoming');

  return (
    <div className="screen">
      <Header
        workspace={workspace}
        onWorkspaceChange={onWorkspaceChange}
        showSearch={true}
      />
      <div className="screen-content">
        <div className="flex justify-between items-center px-5 pt-4 pb-2">
          <h1 className="text-[28px] font-bold text-[#111827]">Tasks</h1>
          <Button variant="link" className="text-[#3B82F6] text-[15px] font-semibold p-0 h-auto flex items-center gap-1">
            <PlusIcon />
            New
          </Button>
        </div>
        
        <div className="flex px-5 pb-4 gap-2.5 overflow-x-auto scrollbar-hide">
          {['All Tasks', 'My Tasks', 'Completed'].map(tab => (
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
        </div>
        
        <TaskSection 
          title="Overdue" 
          icon={<WarningIcon />} 
          tasks={overdueTasks} 
          colorClass="text-[#DC2626]" 
        />
        
        <TaskSection 
          title="Today" 
          icon={<ClockIcon />} 
          tasks={todayTasks} 
          colorClass="text-[#D97706]" 
        />
        
        <TaskSection 
          title="Upcoming" 
          icon={<CalendarIcon />} 
          tasks={upcomingTasks} 
          colorClass="text-[#059669]" 
        />
      </div>
      <BottomNav />
    </div>
  );
}
