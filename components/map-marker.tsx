"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MapMarkerProps {
  color: string;
  icon: LucideIcon;
  onClick?: () => void;
  label?: string;
  isRelative?: boolean;
  isActive?: boolean;
}

export function MapMarker({ 
  color, 
  icon: Icon, 
  onClick, 
  label, 
  isRelative = false, 
  isActive = false 
}: MapMarkerProps) {
  return (
    <div 
      className={cn(
        "cursor-pointer transition-transform hover:scale-110 group",
        !isRelative && "absolute transform -translate-x-1/2 -translate-y-1/2",
        isActive ? "z-50" : "z-10"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "w-8 h-8 rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white",
        color
      )}>
        <Icon size={16} />
      </div>
      {label && (
        <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded whitespace-nowrap shadow-xl">
          {label}
        </div>
      )}
    </div>
  );
}
