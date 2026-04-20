"use client";

import { MapPin, MoreVertical, ChevronDown } from "lucide-react";
import type { Vehicle } from "@/data/mock-data";

interface TelematicsSidebarProps {
  vehicles: Vehicle[];
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export function TelematicsSidebar({ vehicles, onVehicleSelect }: TelematicsSidebarProps) {
  return (
    <aside className="w-80 bg-white border-r flex flex-col overflow-y-auto z-40 shadow-xl">
      <div className="flex-1 p-4 space-y-4">
        {vehicles.map(v => (
          <div 
            key={v.id} 
            className="border border-gray-100 rounded-lg p-3 shadow-sm hover:border-blue-200 transition-colors cursor-pointer text-left" 
            onClick={() => onVehicleSelect(v)}
          >
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-gray-900">
                {v.id} | <span className="font-normal text-gray-500 text-xs">{v.driver}</span>
              </h4>
              <MoreVertical size={14} className="text-gray-300" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-3">
              <MapPin size={10} /> {v.location}
            </div>
            <div className="text-[9px] text-gray-400 mb-2 italic">Last updated: {v.lastUpdated}</div>
            
            {v.currentAppt ? (
              <div className="bg-blue-50 border border-blue-100 rounded p-2 mb-2">
                <div className="text-[9px] font-bold text-blue-800 uppercase mb-1 text-left">
                  Current Appointment
                </div>
                <div className="flex justify-between font-bold text-blue-600 text-xs mb-1">
                  <span>{v.currentAppt.tech}</span>
                  <span className="text-gray-400 font-normal">{v.currentAppt.time}</span>
                </div>
                <div className="text-[10px] text-blue-700">{v.currentAppt.id}: No AC (Service)</div>
                <div className="flex gap-2 text-[9px] text-blue-600 mt-1">
                  <span>H: (111) 111-1111</span>
                  <span>M: (111) 111-1111</span>
                </div>
                <button className="text-[9px] font-bold text-blue-600 mt-2 flex items-center gap-1">
                  Show next appointment <ChevronDown size={10}/>
                </button>
              </div>
            ) : (
              v.nextAppt ? (
                <div className="bg-gray-50 rounded p-2">
                  <div className="text-[9px] font-bold text-gray-500 uppercase mb-1">Next Appointment</div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">{v.nextAppt.tech}</span>
                    <span className="text-gray-400">{v.nextAppt.time}</span>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded p-2 flex items-center justify-between">
                  <span className="text-xs text-gray-400">No scheduled appointments</span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
