"use client";

import { X } from "lucide-react";
import type { Appointment } from "@/data/mock-data";

interface ApptPopoverProps {
  type: 'assigned' | 'unassigned' | 'service_req';
  data: Appointment;
  onClose: () => void;
}

export function ApptPopover({ type, data, onClose }: ApptPopoverProps) {
  const titles = {
    assigned: 'Appointment',
    unassigned: 'Unassigned Appointment',
    service_req: 'Service Request'
  };

  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white border border-gray-200 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] w-[300px] z-[100] transform translate-y-[-5px]">
      <div className="p-5 relative text-left">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-5 text-gray-800 hover:text-gray-900"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
        
        <h3 className="text-xl font-bold mb-4 text-[#2D2D2D] leading-tight">{titles[type]}</h3>
        
        <div className="flex justify-between items-baseline mb-0.5">
          {type === 'assigned' || type === 'service_req' ? (
            <div className="text-sm text-[#3B82F6] font-semibold cursor-pointer hover:underline tracking-tight">
              {data.customer}
            </div>
          ) : (
            <div className="text-xs text-gray-500">{data.date}</div>
          )}
          <div className="text-sm text-[#4A4A4A] font-medium tracking-tight">{data.time}</div>
        </div>

        <div className="mb-3">
          <div className={`text-xs font-medium leading-relaxed ${type === 'assigned' ? 'text-[#3B82F6]' : 'text-gray-600'}`}>
            {data.service}
          </div>
          {type === 'assigned' && (
            <div className="inline-block bg-[#E5E7EB] rounded-full px-3 py-0.5 text-[10px] font-bold text-[#374151] mt-1.5 tracking-wide">
              appt-tag
            </div>
          )}
        </div>

        <div className="text-xs text-[#2D2D2D] mb-1 font-medium">{data.address}</div>
        
        <div className="flex gap-4 text-xs text-[#3B82F6] mb-4 font-semibold">
          <span>H: (111) 111-1111</span>
          <span>M: (111) 111-1111</span>
        </div>

        {type === 'assigned' && (
          <div className="text-xs text-[#2D2D2D] pt-1 font-medium border-t">
            Technician: <span className="font-bold">{data.tech}</span>
          </div>
        )}
      </div>
      
      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
    </div>
  );
}
