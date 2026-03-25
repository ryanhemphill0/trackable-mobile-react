import { NavLink, useLocation } from 'react-router-dom';
import { ContactsIcon, ActivitiesIcon, TasksIcon, AnalyticsIcon, MoreIcon } from './Icons';
import { cn } from '@/lib/utils';

export default function BottomNav() {
  const location = useLocation();
  
  const isActive = (paths: string[]) => {
    return paths.some(path => 
      location.pathname === path || location.pathname.startsWith(path + '/')
    );
  };

  const navItems = [
    { to: '/contacts', label: 'Contacts', icon: ContactsIcon, paths: ['/contacts', '/contact'] },
    { to: '/activities', label: 'Activities', icon: ActivitiesIcon, paths: ['/activities', '/activity'] },
    { to: '/tasks', label: 'Tasks', icon: TasksIcon, paths: ['/tasks'] },
    { to: '/analytics', label: 'Analytics', icon: AnalyticsIcon, paths: ['/analytics', '/dashboard'] },
    { to: '/more', label: 'More', icon: MoreIcon, paths: ['/more', '/notifications'] },
  ];

  return (
    <nav className="flex justify-around items-start pt-2.5 pb-2 bg-white border-t border-[#E5E7EB] shrink-0">
      {navItems.map(({ to, label, icon: Icon, paths }) => (
        <NavLink
          key={to}
          to={to}
          className={cn(
            "flex flex-col items-center gap-1 text-[11px] font-semibold px-4 py-1 transition-colors no-underline",
            isActive(paths) ? "text-[#111827]" : "text-[#9CA3AF]"
          )}
        >
          <div className="w-7 h-7 flex items-center justify-center">
            <div className="w-6 h-6">
              <Icon />
            </div>
          </div>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
