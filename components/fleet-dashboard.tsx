"use client";

import { useState } from "react";
import { 
  Search, 
  Plus, 
  Settings, 
  Clock, 
  User, 
  ChevronDown, 
  Maximize2, 
  Map as MapIcon, 
  Calendar, 
  List, 
  X,
  Navigation,
  Truck,
  MapPin,
  Filter,
  RefreshCw,
  Flag,
  MessageSquare
} from "lucide-react";

import { MapMarker } from "./map-marker";
import { FilterMenu } from "./filter-menu";
import { VehiclePopover } from "./vehicle-popover";
import { ApptPopover } from "./appt-popover";
import { TechDetailsModal } from "./tech-details-modal";
import { TelematicsSidebar } from "./telematics-sidebar";
import { Legend } from "./legend";
import { 
  VEHICLES, 
  APPOINTMENTS, 
  TECHNICIANS, 
  VEHICLE_MARKERS,
  type Vehicle,
  type Appointment,
  type Technician
} from "@/data/mock-data";

export function FleetDashboard() {
  const [telematicsOn, setTelematicsOn] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);
  const [selectedTech, setSelectedTech] = useState<Technician | null>(null);

  const closeAllPopovers = () => {
    setSelectedVehicle(null);
    setSelectedAppt(null);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 font-sans text-gray-900">
      
      {/* Top Header */}
      <header className="bg-[#D99A2B] text-white px-4 py-2 flex items-center justify-between shadow-md z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-bold text-xs italic">
              JOE&apos;S
            </div>
            <span className="font-bold tracking-tight text-sm uppercase hidden sm:inline">Joe&apos;s Services</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <div className="flex items-center gap-1.5"><Clock size={14} /> 00:00:00</div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80"><Flag size={14} /> Flags (5)</div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80"><MessageSquare size={14} /> Messages (12)</div>
          <div className="flex items-center gap-1.5"><Navigation size={14} className="rotate-45" /> [EDT]</div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80"><Settings size={14} /> Settings</div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80"><User size={14} /> john doe</div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b flex items-center px-4 overflow-x-auto">
        {['Schedule', 'Customers', 'Jobs', 'Reporting', 'Payment Options', 'More Applications'].map((tab, idx) => (
          <button 
            key={tab} 
            className={`px-4 py-3 text-[11px] font-semibold border-b-2 transition-colors whitespace-nowrap ${
              idx === 0 ? 'border-gray-200 bg-gray-50' : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="flex-1" />
        <div className="flex items-center border-l h-full pl-4 py-2 gap-2">
          <RefreshCw size={14} className="text-gray-400 cursor-pointer" />
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="border rounded-md pl-3 pr-8 py-1.5 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-[#D99A2B]" 
            />
            <Search size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-red-700 text-white p-1.5 rounded hover:bg-red-800 transition-colors">
            <Plus size={16} />
          </button>
        </div>
      </nav>

      {/* Map Sub-Header */}
      <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-md">
            <button className="flex items-center gap-2 px-3 py-1 text-xs text-gray-500">
              <Calendar size={14} /> Calendar
            </button>
            <button className="flex items-center gap-2 px-3 py-1 text-xs text-gray-500">
              <List size={14} /> List
            </button>
            <button className="flex items-center gap-2 px-3 py-1 text-xs font-bold bg-white rounded shadow-sm">
              <MapIcon size={14} /> Map
            </button>
          </div>

          {telematicsOn && (
            <div className="flex items-center gap-2 ml-4">
              <div className="relative flex items-center border rounded-md px-2 bg-white">
                <Search size={14} className="text-gray-400" />
                <input type="text" placeholder="Search" className="text-xs ml-2 py-1.5 w-32 outline-none" />
              </div>
              <div className="relative">
                <button 
                  onClick={(e) => { e.stopPropagation(); setFilterOpen(!filterOpen); }} 
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border rounded-md bg-white hover:bg-gray-50"
                >
                  <Filter size={14} /> Filters <ChevronDown size={14} />
                </button>
                <FilterMenu isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">Telematics Data</span>
            <button 
              onClick={() => {
                setTelematicsOn(!telematicsOn);
                closeAllPopovers();
              }}
              className={`w-10 h-5 rounded-full relative transition-colors ${telematicsOn ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div 
                className="absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all" 
                style={{ left: telematicsOn ? '22px' : '2px' }} 
              />
            </button>
          </div>
          
          <div className="h-6 w-px bg-gray-200 mx-1" />

          <button className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-gray-50 border rounded px-3 py-1.5">
            <User size={14} /> Dispatch Group: <span className="text-black font-bold">All Users</span> <ChevronDown size={14} />
          </button>
          
          <button className="p-1.5 text-gray-400 hover:text-black">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {telematicsOn && (
          <TelematicsSidebar 
            vehicles={VEHICLES} 
            onVehicleSelect={(v) => setSelectedVehicle(v)} 
          />
        )}

        <main className="flex-1 bg-[#f1f3f4] relative overflow-hidden" onClick={closeAllPopovers}>
          <iframe
            src="https://maps.google.com/maps?q=Charlotte,NC&z=11&output=embed"
            className="absolute inset-0 w-full h-full border-0 pointer-events-none opacity-90"
            title="Charlotte Map"
          ></iframe>

          <div className="absolute top-4 right-4 z-40 flex flex-col gap-2">
            <button className="bg-white p-2 rounded-md shadow-md border hover:bg-gray-50 transition-colors">
              <Maximize2 size={16} />
            </button>
            <div className="bg-white rounded-md shadow-md border flex flex-col overflow-hidden">
              <button className="p-2 border-b hover:bg-gray-50 transition-colors"><Plus size={16} /></button>
              <button className="p-2 hover:bg-gray-50 transition-colors"><X size={16} className="rotate-45" /></button>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {APPOINTMENTS.map(appt => {
              const isActive = selectedAppt?.id === appt.id;
              return (
                <div 
                  key={appt.id} 
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto ${isActive ? 'z-[100]' : 'z-10'}`}
                  style={{ left: `${appt.x}%`, top: `${appt.y}%` }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MapMarker 
                    color={appt.color} 
                    icon={MapPin} 
                    onClick={() => { closeAllPopovers(); setSelectedAppt(appt); }} 
                    isRelative
                    isActive={isActive}
                  />
                  {isActive && (
                    <ApptPopover type={appt.type} data={appt} onClose={() => setSelectedAppt(null)} />
                  )}
                </div>
              );
            })}

            {TECHNICIANS.map(tech => (
              <div 
                key={tech.id} 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto"
                style={{ left: `${tech.x}%`, top: `${tech.y}%` }}
                onClick={(e) => e.stopPropagation()}
              >
                <MapMarker 
                  color={tech.color} 
                  icon={Navigation} 
                  label={tech.name}
                  onClick={() => { closeAllPopovers(); setSelectedTech(tech); }} 
                  isRelative
                />
              </div>
            ))}

            {telematicsOn && VEHICLE_MARKERS.map(vm => {
              const vehicleData = VEHICLES.find(v => v.id === vm.vehicleId);
              const isActive = selectedVehicle?.id === vm.vehicleId;
              return (
                <div 
                  key={vm.id} 
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto ${isActive ? 'z-[100]' : 'z-10'}`}
                  style={{ left: `${vm.x}%`, top: `${vm.y}%` }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MapMarker 
                    color={vm.color} 
                    icon={Truck} 
                    label={vm.vehicleId}
                    onClick={() => { closeAllPopovers(); if (vehicleData) setSelectedVehicle(vehicleData); }} 
                    isRelative
                    isActive={isActive}
                  />
                  {isActive && vehicleData && (
                    <VehiclePopover data={vehicleData} onClose={() => setSelectedVehicle(null)} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-2 flex items-center justify-between text-[11px] z-40">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>3 Technicians Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span>3 Vehicles In Use</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400 font-medium">
              <span>Last updated: 10:25:40 AM</span>
            </div>
          </div>
        </main>

        <div className="absolute bottom-[40px] left-0 w-full px-4 pointer-events-none">
          <div className="flex items-center gap-2 opacity-50">
            <span className="text-red-600 font-black italic text-2xl tracking-tighter">wex</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase leading-none mt-1">
              Field Service<br/>Management
            </span>
          </div>
        </div>
      </div>

      {telematicsOn && <Legend />}

      {selectedTech && (
        <TechDetailsModal data={selectedTech} onClose={() => setSelectedTech(null)} />
      )}

    </div>
  );
}
