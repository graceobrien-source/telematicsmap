"use client";

import { X } from "lucide-react";
import type { Vehicle } from "@/data/mock-data";

interface VehiclePopoverProps {
  data: Vehicle;
  onClose: () => void;
}

export function VehiclePopover({ data, onClose }: VehiclePopoverProps) {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white border border-gray-200 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-72 z-[100]">
      <div className="p-4 relative text-left">
        <button 
          onClick={onClose} 
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
        <h3 className="text-lg font-bold mb-1">{data.id}</h3>
        <div className="text-xs text-gray-600 mb-0.5">
          Assigned Driver: <span className="text-black font-medium">{data.driver}</span>
        </div>
        <div className="text-xs text-gray-600 mb-0.5">
          Location: <span className="text-black font-medium">{data.location}</span>
        </div>
        <div className="text-[10px] text-gray-400 italic mb-3">
          Last Updated: {data.lastUpdated}
        </div>

        {data.currentAppt && (
          <div className="bg-blue-50 p-2.5 rounded-md mb-2.5 border border-blue-100">
            <div className="text-[9px] font-bold text-blue-800 uppercase mb-1">Current Appointment</div>
            <div className="flex justify-between items-start">
              <div className="text-xs font-bold text-blue-600">{data.currentAppt.tech}</div>
              <div className="text-[10px] text-gray-500">{data.currentAppt.time}</div>
            </div>
            <div className="text-[11px] text-blue-700 font-medium">
              {data.currentAppt.id}: No AC (Service)
            </div>
            <div className="text-[9px] text-gray-500">123 Main St, Charlotte, NC 28226</div>
            <div className="flex gap-2 text-[9px] text-blue-600 mt-1">
              <span>H: (111) 111-1111</span>
              <span>M: (111) 111-1111</span>
            </div>
          </div>
        )}

        {data.nextAppt && (
          <div className="bg-gray-50 p-2.5 rounded-md border border-gray-100">
            <div className="flex justify-between">
              <div className="text-[9px] font-bold text-gray-500 uppercase mb-1">Next Appointment</div>
              <div className="text-[9px] font-bold text-gray-400">{data.nextAppt.dist} Away</div>
            </div>
            <div className="flex justify-between items-start">
              <div className="text-xs font-bold text-black">{data.nextAppt.tech}</div>
              <div className="text-[10px] text-gray-500">{data.nextAppt.time}</div>
            </div>
            <div className="text-[11px] text-gray-700">{data.nextAppt.id} (Follow Up)</div>
            <div className="text-[9px] text-gray-500">123 West 81st Street, Apt 5A...</div>
          </div>
        )}
      </div>
      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
    </div>
  );
}
