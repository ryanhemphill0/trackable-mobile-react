import BackHeader from '@/components/BackHeader';
import BottomNav from '@/components/BottomNav';
import { Card } from '@/components/ui/card';

export default function PatientsDashboard() {
  return (
    <div className="screen">
      <BackHeader rightContent={<div className="text-sm text-[#6B7280]">Aug 2025 - Jan 2026</div>} />
      <div className="screen-content">
        <h1 className="text-[28px] font-bold text-[#111827] px-5 pt-4 pb-2">New Patients</h1>
        <p className="text-sm text-[#6B7280] px-5 pb-4">Last 6 months overview</p>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-3 px-5 pb-4">
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">New Patients</div>
            <div className="text-[26px] font-bold text-[#111827]">682</div>
            <div className="text-[13px] font-semibold text-[#059669] mt-1">▲ 22%</div>
          </Card>
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">Reappointment %</div>
            <div className="text-[26px] font-bold text-[#111827]">59.0%</div>
            <div className="text-[13px] font-semibold text-[#059669] mt-1">▲ 2%</div>
          </Card>
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">Scheduled</div>
            <div className="text-[26px] font-bold text-[#111827]">0</div>
          </Card>
          <Card className="p-4">
            <div className="text-[13px] text-[#6B7280] mb-2">Avg Prod/Pt</div>
            <div className="text-[26px] font-bold text-[#111827]">$136</div>
            <div className="text-[13px] font-semibold text-[#059669] mt-1">▲ 11%</div>
          </Card>
        </div>
        
        {/* Monthly Trend Chart */}
        <div className="px-5 pb-4">
          <div className="text-[15px] font-semibold text-[#111827] mb-4">Monthly Trend</div>
          <div className="flex items-end gap-2 h-[120px] pb-6 border-b border-[#E5E7EB]">
            {[
              { month: 'Aug', height: 85 },
              { month: 'Sep', height: 95 },
              { month: 'Oct', height: 110 },
              { month: 'Nov', height: 120 },
              { month: 'Dec', height: 100 },
              { month: 'Jan', height: 90 }
            ].map(item => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className="w-full bg-[#3B82F6] rounded-t"
                  style={{ height: `${item.height}px` }}
                />
                <span className="text-[11px] text-[#6B7280]">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* By Channel */}
        <div className="px-5 pb-5">
          <div className="text-[13px] font-semibold text-[#6B7280] uppercase tracking-wide mb-3.5">By Channel</div>
          <div className="flex justify-between items-center py-3 border-b border-[#F3F4F6]">
            <span className="text-[15px] text-[#6B7280]">Digital Marketing</span>
            <span className="text-[15px] font-medium text-[#111827]">307</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-[#F3F4F6]">
            <span className="text-[15px] text-[#6B7280]">Referral Marketing</span>
            <span className="text-[15px] font-medium text-[#111827]">247</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-[15px] text-[#6B7280]">Unknown</span>
            <span className="text-[15px] font-medium text-[#111827]">128</span>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
