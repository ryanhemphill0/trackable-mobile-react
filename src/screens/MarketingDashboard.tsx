import BackHeader from '@/components/BackHeader';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';

export default function MarketingDashboard() {
  return (
    <div className="screen">
      <BackHeader rightContent={<div className="text-sm text-[#6B7280]">Jan 2026</div>} />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-2">Marketing</h1>
        <p className="text-sm text-[#6B7280] px-5 pb-4">Overview for January 2026</p>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-3 px-5 pb-4">
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">Budget</div>
            <div className="text-[26px] font-bold text-[#111827]">$7,600</div>
          </Card>
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">Net Production</div>
            <div className="text-[26px] font-bold text-[#111827]">$20,769</div>
            <div className="text-[13px] font-semibold text-[#059669] mt-1">▲ 181%</div>
          </Card>
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">Scheduled Prod</div>
            <div className="text-[26px] font-bold text-[#111827]">$6,503</div>
            <div className="text-[13px] font-semibold text-[#059669] mt-1">▲ 899%</div>
          </Card>
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">ROI</div>
            <div className="text-[26px] font-bold text-[#111827]">259%</div>
          </Card>
        </div>
        
        {/* Conversion Funnel */}
        <div className="px-5 pb-4">
          <div className="text-[15px] font-semibold text-[#111827] mb-4">Conversion Funnel</div>
          
          {[
            { name: 'Leads', value: 103, cost: '$73.79 CPL', width: '100%', color: 'bg-[#3B82F6]' },
            { name: 'Qualified', value: 77, cost: '$98.70 CPQL', width: '75%', color: 'bg-[#60A5FA]' },
            { name: 'Scheduled', value: 65, cost: '$116.92 CPA', width: '63%', color: 'bg-[#93C5FD]' },
            { name: 'Patients', value: 42, cost: '$180.95 CAC', width: '41%', color: 'bg-[#BFDBFE]' },
          ].map((stage) => (
            <div key={stage.name} className="mb-4">
              <div className={`h-2.5 ${stage.color} rounded mb-2`} style={{ width: stage.width }} />
              <div className="flex justify-between">
                <span className="text-sm font-medium text-[#374151]">{stage.name}</span>
                <span className="text-sm font-semibold text-[#111827]">{stage.value}</span>
              </div>
              <div className="text-[13px] text-[#6B7280] mt-0.5">{stage.cost}</div>
            </div>
          ))}
        </div>
        
        {/* Lead Status Breakdown */}
        <div className="px-5 pb-4">
          <div className="text-[13px] font-semibold text-[#6B7280] uppercase tracking-wide mb-3.5">Lead Status</div>
          {[
            { label: 'Closed Won', value: '42', color: '#10B981' },
            { label: 'Needs Action', value: '38', color: '#F59E0B' },
            { label: 'Scheduled', value: '20', color: '#3B82F6' },
            { label: 'In Progress', value: '3', color: '#6B7280' },
            { label: 'Closed Lost', value: '0', color: '#EF4444' }
          ].map((item, i, arr) => (
            <div 
              key={item.label} 
              className={`flex justify-between items-center py-3 ${i < arr.length - 1 ? 'border-b border-[#F3F4F6]' : ''}`}
            >
              <span className="text-[15px] text-[#6B7280] flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: item.color }} />
                {item.label}
              </span>
              <span className="text-[15px] font-medium text-[#111827]">{item.value}</span>
            </div>
          ))}
        </div>
        
        {/* Schedule Rate */}
        <div className="px-5 pb-5">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-[15px] font-semibold text-[#111827]">Schedule Rate</span>
            <span className="text-[15px] font-bold text-[#10B981]">84%</span>
          </div>
          <div className="h-2 bg-[#E5E7EB] rounded overflow-hidden">
            <div className="w-[84%] h-full bg-[#10B981] rounded" />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
