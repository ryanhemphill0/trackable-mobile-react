import { useState } from 'react';
import { workspaces } from '@/data/contacts';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseButton,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface WorkspaceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentWorkspace: string;
  onSelect: (workspace: string) => void;
}

export default function WorkspaceModal({ open, onOpenChange, currentWorkspace, onSelect }: WorkspaceModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkspaces = workspaces.filter(ws =>
    ws.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Switch Workspace</DialogTitle>
          <DialogCloseButton />
        </DialogHeader>
        <div className="p-5 pt-0 border-b border-[#E5E7EB]">
          <Input
            type="text"
            placeholder="Search workspaces..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="overflow-y-auto max-h-[calc(70vh-140px)]">
          {filteredWorkspaces.length === 0 ? (
            <div className="py-10 px-5 text-center text-[#9CA3AF] text-[15px]">
              No workspaces found
            </div>
          ) : (
            filteredWorkspaces.map((ws) => (
              <div
                key={ws}
                className={cn(
                  "py-4 px-5 border-b border-[#F3F4F6] cursor-pointer flex justify-between items-center transition-colors",
                  ws === currentWorkspace ? "bg-[#EFF6FF]" : "hover:bg-[#F9FAFB] active:bg-[#F9FAFB]"
                )}
                onClick={() => onSelect(ws)}
              >
                <span className="text-base font-medium text-[#111827]">{ws}</span>
                <span className="text-[#3B82F6] text-xl">
                  {ws === currentWorkspace ? '✓' : ''}
                </span>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
