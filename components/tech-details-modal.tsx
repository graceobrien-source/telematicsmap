"use client";

import { useState } from "react";
import { X, Calendar, MapPin, Navigation } from "lucide-react";
import { MapMarker } from "./map-marker";
import type { Technician } from "@/data/mock-data";

interface TechDetailsModalProps {
  data: Technician;
  onClose: () => void;
}

export function TechDetailsModal({ data, onClose }: TechDetailsModalProps) {
  const [showSegments, setShowSegments] = useState(false);
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200] p-8 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <div className="text-sm text-gray-500">Assigned Vehicle: {data.vehicle}</div>
            <div className="mt-2 inline-flex items-center gap-2 border rounded-md px-3 py-1.5 text-sm">
              <Calendar size={14} /> 04/02/2026
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-1 min-h-[500px]">
          {/* Appointments List */}
          <div className="w-1/3 p-6 border-r space-y-4">
            <h3 className="font-bold text-lg mb-4 text-left">Appointments (4)</h3>
            
            <div className="border border-blue-500 rounded-lg p-3 bg-blue-50 shadow-sm relative overflow-hidden text-left">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold text-blue-600">Art Vandelay</span>
                <span className="text-xs text-gray-500">1:30 pm - 2:00 pm</span>
              </div>
              <div className="text-xs text-gray-700">#1235 (Follow Up)</div>
              <div className="text-[10px] text-gray-500 mb-2">129 West 81st Street, Apt 5A...</div>
              <div className="inline-flex items-center px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase">
                In progress
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-3 relative overflow-hidden text-left">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold text-gray-900">Jessica Day</span>
                <span className="text-xs text-gray-500">3:00 pm - 5:00 pm</span>
              </div>
              <div className="text-xs text-gray-700">#1236: Outdoor Unit Install</div>
              <div className="text-[10px] text-gray-500 mb-2">7162 Ashcraft Ln, Charlotte, NC...</div>
              <div className="inline-flex items-center px-2 py-0.5 rounded bg-gray-900 text-white text-[10px] font-bold uppercase">
                Incomplete
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-3 opacity-60 text-left">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-bold text-gray-900">Bob Weir</span>
                <span className="text-xs text-gray-500">10:45 am - 11:45 am</span>
              </div>
              <div className="text-xs text-gray-700">#1234: No AC (Service)</div>
              <div className="text-[10px] text-gray-500 mb-2">123 Main St, Charlotte, NC...</div>
              <div className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800 text-[10px] font-bold uppercase">
                Complete
              </div>
            </div>
          </div>

          {/* Mini Map */}
          <div className="flex-1 bg-gray-100 relative p-4 flex flex-col">
            <div className="flex-1 bg-white rounded shadow-inner relative overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Charlotte,NC&z=12&output=embed"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none opacity-60"
                title="Mini Map"
              ></iframe>
              
              <div className="absolute z-10" style={{ left: '30%', top: '45%' }}>
                <MapMarker 
                  color="bg-purple-600" 
                  icon={Navigation} 
                  onClick={() => setShowSegments(!showSegments)} 
                  isRelative 
                />
              </div>
              <div className="absolute z-10" style={{ left: '15%', top: '65%' }}>
                <MapMarker color="bg-blue-500" icon={MapPin} isRelative />
              </div>
              <div className="absolute z-10" style={{ left: '70%', top: '55%' }}>
                <MapMarker color="bg-blue-500" icon={MapPin} isRelative />
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded border flex flex-wrap gap-4 text-xs font-medium">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500"></div> Appointment
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-1 bg-blue-500 border-t border-dashed"></div> Planned Route
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-1 bg-orange-500"></div> Actual Route
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-200"></div> Coverage Zones
              </div>
            </div>

            {showSegments && (
              <div className="absolute top-10 right-10 w-64 bg-white border shadow-2xl rounded-lg p-4 z-50 text-left">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-sm">Route Segments</h4>
                  <button onClick={() => setShowSegments(false)}>
                    <X size={14} />
                  </button>
                </div>
                <div className="text-[10px] text-gray-400 mb-3">3 stops - 14.9 mi total</div>
                <div className="space-y-4">
                  <div className="relative pl-4 border-l-2 border-dashed border-gray-300">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-[11px] font-bold">Starting Location - A</div>
                      <div className="text-[10px] text-gray-400">12 min - 3.6 mi</div>
                    </div>
                    <div className="text-[9px] text-gray-500">4321 Park Rd, Charlotte, NC...</div>
                  </div>
                  <div className="relative pl-4 border-l-2 border-solid border-orange-500">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-orange-500"></div>
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-[11px] font-bold">A - B</div>
                      <div className="text-[10px] text-gray-400">18 min - 6.4 mi</div>
                    </div>
                    <div className="text-[9px] text-gray-500">3800 Churchill Rd, Charlotte...</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
