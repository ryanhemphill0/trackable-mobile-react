import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Avatar from '@/components/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { contactsDB, contactsData } from '@/data/contacts';
import { cn } from '@/lib/utils';

interface ContactsScreenProps {
  workspace: string;
  onWorkspaceChange: (ws: string) => void;
}

export default function ContactsScreen({ workspace, onWorkspaceChange }: ContactsScreenProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Active Leads', 'Scheduled'];

  const filteredContacts = useMemo(() => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return Object.values(contactsDB).filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.lifecycle.toLowerCase().includes(q) ||
        (c.tag && c.tag.toLowerCase().includes(q))
      );
    }
    return null;
  }, [searchQuery]);

  const viewData = contactsData[activeTab];

  return (
    <div className="screen">
      <Header
        workspace={workspace}
        onWorkspaceChange={onWorkspaceChange}
        showSearch={true}
        onSearch={setSearchQuery}
        searchPlaceholder="Search all contacts..."
      />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-2">Contacts</h1>
        
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
          <span className="font-medium">
            {searchQuery 
              ? `${filteredContacts?.length || 0} results`
              : `${viewData?.count || 0} results`
            }
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            Sorted by Latest Activity
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </span>
        </div>
        
        {searchQuery && filteredContacts ? (
          filteredContacts.length === 0 ? (
            <div className="py-10 px-5 text-center text-[#9CA3AF]">
              No contacts found for "{searchQuery}"
            </div>
          ) : (
            filteredContacts.map(contact => (
              <div 
                key={contact.id} 
                className="px-5 py-4 border-b border-[#F3F4F6] cursor-pointer transition-colors active:bg-[#F9FAFB]"
                onClick={() => navigate(`/contact/${contact.id}`)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar initial={contact.initial} />
                    <div>
                      <div className="text-base font-semibold text-[#111827]">{contact.name}</div>
                      <div className="text-sm text-[#6B7280] mt-0.5">{contact.lifecycle}</div>
                    </div>
                  </div>
                </div>
                {contact.tag && (
                  <div style={{ marginLeft: "52px", marginTop: "4px" }}>
                    <Badge variant={contact.tagType as "blue" | "needs-action" | "scheduled" | "closed-won" | undefined}>
                      {contact.tag}
                    </Badge>
                  </div>
                )}
              </div>
            ))
          )
        ) : (
          viewData?.groups.map(group => (
            <div key={group.label}>
              <div className="date-group">{group.label}</div>
              {group.contacts.map(item => {
                const contact = contactsDB[item.id];
                if (!contact) return null;
                return (
                  <div 
                    key={item.id} 
                    className="px-5 py-4 border-b border-[#F3F4F6] cursor-pointer transition-colors active:bg-[#F9FAFB]"
                    onClick={() => navigate(`/contact/${contact.id}`)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar initial={contact.initial} />
                        <div>
                          <div className="text-base font-semibold text-[#111827]">{contact.name}</div>
                          <div className="text-sm text-[#6B7280] mt-0.5">{contact.lifecycle}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm font-medium text-[#6B7280]">{item.time}</div>
                        <div className="text-[13px] text-[#6B7280] mt-0.5">{item.date}</div>
                      </div>
                    </div>
                    {contact.tag && (
                      <div style={{ marginLeft: "52px", marginTop: "4px" }}>
                        <Badge variant={contact.tagType as "blue" | "needs-action" | "scheduled" | "closed-won" | undefined}>
                          {contact.tag}
                        </Badge>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
      <BottomNav />
    </div>
  );
}
