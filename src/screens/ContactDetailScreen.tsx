import { useParams, useNavigate } from 'react-router-dom';
import BackHeader from '@/components/BackHeader';
import BottomNav from '@/components/BottomNav';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { contactsDB } from '@/data/contacts';
import { PhoneIcon, ArrowLeftIcon, ClipboardIcon, ChevronRight } from '@/components/Icons';

interface ContactDetailScreenProps {
  workspace: string;
}

export default function ContactDetailScreen({ workspace }: ContactDetailScreenProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const contact = id ? contactsDB[id] : null;

  if (!contact) {
    return (
      <div className="screen">
        <BackHeader />
        <div className="screen-content p-10 text-center">
          Contact not found
        </div>
        <BottomNav />
      </div>
    );
  }

  const displayName = contact.age ? `${contact.name}, ${contact.age}` : contact.name;

  return (
    <div className="screen">
      <BackHeader />
      <div className="screen-content">
        {/* Contact Header */}
        <div className="px-5 pt-5 pb-6 text-center">
          <div className="text-sm font-medium text-[#9CA3AF] mb-2">{workspace}</div>
          <div className="mb-5">
            <h1 className="text-[32px] font-bold text-[#1F2937]">{displayName}</h1>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-2">
            <Button variant="outline" size="sm" className="px-4 py-2 text-[13px] gap-1.5 rounded-xl h-auto">
              <ArrowLeftIcon />
              Follow Up
            </Button>
            <Button variant="outline" size="sm" className="px-4 py-2 text-[13px] gap-1.5 rounded-xl h-auto">
              <ClipboardIcon />
              Task
            </Button>
            <Button variant="outline" size="sm" className="px-4 py-2 text-[13px] gap-1.5 rounded-xl h-auto">
              <PhoneIcon />
              Call
            </Button>
          </div>
        </div>
        
        {/* Tags */}
        <div className="px-5 pb-6">
          <div className="text-sm font-semibold text-[#374151] mb-3">Tags</div>
          <div className="flex gap-2 flex-wrap items-center">
            {contact.tag && (
              <Badge variant={contact.tagType as "blue" | "needs-action" | "scheduled" | "closed-won" | undefined}>
                {contact.tag}
              </Badge>
            )}
            <span className="text-[#3B82F6] text-sm font-medium cursor-pointer">+ Add</span>
          </div>
        </div>
        
        {/* Details */}
        <div className="px-5 pb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-semibold text-[#374151]">Details</div>
            <div className="text-sm font-medium text-[#3B82F6] cursor-pointer">View All</div>
          </div>
          
          <Card className="divide-y divide-[#F3F4F6] border-0 shadow-none">
            <div className="flex justify-between py-3.5 px-0">
              <span className="text-[15px] text-[#6B7280]">Lifecycle</span>
              <span className="text-[15px] font-semibold text-[#059669]">{contact.lifecycle}</span>
            </div>
            <div className="flex justify-between py-3.5 px-0">
              <span className="text-[15px] text-[#6B7280]">Lead Status</span>
              <span className="text-[15px] font-semibold text-[#111827]">{contact.leadStatus}</span>
            </div>
            <div className="flex justify-between py-3.5 px-0">
              <span className="text-[15px] text-[#6B7280]">Lead Owner</span>
              <span className="text-[15px] italic text-[#9CA3AF]">Select Lead Owner</span>
            </div>
            <div className="flex justify-between py-3.5 px-0">
              <span className="text-[15px] text-[#6B7280]">Channel</span>
              <span className="text-[15px] font-semibold text-[#111827]">{contact.channel}</span>
            </div>
            <div className="flex justify-between py-3.5 px-0 border-b-0">
              <span className="text-[15px] text-[#6B7280]">Cell Phone</span>
              <span className="text-[15px] font-medium text-[#111827]">{contact.phone}</span>
            </div>
          </Card>
        </div>
        
        {/* Section Cards */}
        <div className="px-5 pb-5 space-y-3">
          <Card 
            className="p-4 flex items-center gap-3.5 cursor-pointer active:bg-[#F9FAFB] transition-colors"
            onClick={() => navigate(`/contact/${id}/activities`)}
          >
            <div className="w-11 h-11 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 256 256" fill="#374151" className="w-[22px] h-[22px]">
                <path d="M216,44H40A20,20,0,0,0,20,64V224a19.82,19.82,0,0,0,11.56,18.12,20.14,20.14,0,0,0,8.49,1.88,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44Zm-4,144H80a12,12,0,0,0-7.69,2.8L44,214.25V68H212Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold text-[#111827]">Activities</div>
              <div className="text-[13px] text-[#6B7280] mt-0.5">1 call · Last activity Jan 30</div>
            </div>
            <ChevronRight />
          </Card>
          
          <Card className="p-4 flex items-center gap-3.5 cursor-pointer active:bg-[#F9FAFB] transition-colors">
            <div className="w-11 h-11 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 256 256" fill="#374151" className="w-[22px] h-[22px]">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V208Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold text-[#111827]">Appointments</div>
              <div className="text-[13px] text-[#6B7280] mt-0.5">No appointments</div>
            </div>
            <ChevronRight />
          </Card>
          
          <Card className="p-4 flex items-center gap-3.5 cursor-pointer active:bg-[#F9FAFB] transition-colors">
            <div className="w-11 h-11 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
              <svg viewBox="0 0 256 256" fill="#374151" className="w-[22px] h-[22px]">
                <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM32,96V160H56a8,8,0,0,1,0,16H32v24H224V176H200a8,8,0,0,1,0-16h24V96H200a8,8,0,0,1,0-16h24V56H32V80H56a8,8,0,0,1,0,16Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold text-[#111827]">Transactions</div>
              <div className="text-[13px] text-[#6B7280] mt-0.5">No transactions</div>
            </div>
            <ChevronRight />
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
