"use client";

import { X } from "lucide-react";

interface FilterMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterMenu({ isOpen, onClose }: FilterMenuProps) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-md z-50 p-4">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2 font-semibold text-xs text-gray-500 uppercase">
            Map Layers
            <X size={14} className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> All Appointments
            </label>
            <div className="pl-6 space-y-1">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" defaultChecked /> Assigned Appointments
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" defaultChecked /> Unassigned Appointments
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" defaultChecked /> Service Requests
              </label>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> Coverage Zones
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> Technician Locations
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> Vehicle Locations
            </label>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <div className="font-semibold text-xs text-gray-500 uppercase mb-2">Tech Status</div>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> Idle
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> En Route
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> At Job
            </label>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <button 
            className="flex-1 py-2 text-xs font-medium border border-gray-200 rounded hover:bg-gray-50" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-2 text-xs font-medium bg-red-700 text-white rounded hover:bg-red-800" 
            onClick={onClose}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
