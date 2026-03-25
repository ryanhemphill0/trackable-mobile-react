import { useState } from 'react';
import { TrackableLogo, ChevronDown, SearchIcon } from './Icons';
import { Button } from '@/components/ui/button';
import WorkspaceModal from './WorkspaceModal';
// Input available for future search expansion

interface HeaderProps {
  workspace: string;
  onWorkspaceChange: (workspace: string) => void;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
}

export default function Header({ 
  workspace, 
  onWorkspaceChange, 
  showSearch = true,
  onSearch,
  searchPlaceholder = 'Search...'
}: HeaderProps) {
  const [showModal, setShowModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const closeSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
    onSearch?.('');
  };

  if (isSearching) {
    return (
      <header className="px-4 py-3 flex items-center gap-3 bg-white shrink-0">
        <div className="flex-1 flex items-center gap-3 bg-[#F3F4F6] px-3.5 py-2.5 rounded-[10px]">
          <SearchIcon size={20} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            autoFocus
            className="flex-1 border-none bg-transparent text-base text-[#111827] outline-none placeholder:text-[#9CA3AF]"
          />
        </div>
        <Button 
          variant="link" 
          onClick={closeSearch}
          className="text-[#3B82F6] text-[15px] font-medium p-0 h-auto"
        >
          Cancel
        </Button>
      </header>
    );
  }

  return (
    <>
      <header className="px-5 py-3 bg-white border-b border-[#E5E7EB] flex justify-between items-center shrink-0">
        <div>
          <div className="text-[13px] text-[#6B7280]"><TrackableLogo /></div>
          <Button
            variant="ghost"
            onClick={() => setShowModal(true)}
            className="text-[17px] font-semibold text-[#111827] p-0 h-auto hover:bg-transparent flex items-center gap-1"
          >
            <span>{workspace}</span>
            <ChevronDown />
          </Button>
        </div>
        {showSearch && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsSearching(true)}
            className="text-[#374151]"
          >
            <SearchIcon />
          </Button>
        )}
      </header>
      <WorkspaceModal
        open={showModal}
        onOpenChange={setShowModal}
        currentWorkspace={workspace}
        onSelect={(ws) => {
          onWorkspaceChange(ws);
          setShowModal(false);
        }}
      />
    </>
  );
}
