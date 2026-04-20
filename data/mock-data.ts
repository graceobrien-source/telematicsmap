export interface Vehicle {
  id: string;
  driver: string;
  location: string;
  status: string;
  lastUpdated: string;
  currentAppt: {
    tech: string;
    time: string;
    id: string;
    type: string;
  } | null;
  nextAppt: {
    tech: string;
    time: string;
    id: string;
    type: string;
    dist?: string;
  } | null;
}

export interface Appointment {
  id: string;
  type: 'assigned' | 'unassigned' | 'service_req';
  customer: string;
  time: string;
  service: string;
  tech?: string;
  address: string;
  color: string;
  x: number;
  y: number;
  date?: string;
}

export interface Technician {
  id: string;
  name: string;
  vehicle: string;
  x: number;
  y: number;
  color: string;
}

export interface VehicleMarker {
  id: string;
  vehicleId: string;
  x: number;
  y: number;
  color: string;
}

export const VEHICLES: Vehicle[] = [
  { 
    id: 'ABC-1234', 
    driver: 'Dan Williams', 
    location: '123 Main St, Charlotte, NC 28226', 
    status: 'Online', 
    lastUpdated: '32 seconds ago', 
    currentAppt: { tech: 'Bob Weir', time: '10:45 am - 11:45 am', id: '#1234', type: 'Service' }, 
    nextAppt: { tech: 'Art Vandelay', time: '1:30 pm - 2:00 pm', id: '#1234', type: 'Follow Up', dist: '2.5 mi' } 
  },
  { 
    id: 'ABC-1235', 
    driver: 'Mike Johnson', 
    location: '123 Main St, Charlotte, NC 28226', 
    status: 'Online', 
    lastUpdated: '32 seconds ago', 
    currentAppt: { tech: 'Bob Weir', time: '10:45 am - 11:45 am', id: '#1234', type: 'Service' }, 
    nextAppt: null 
  },
  { 
    id: 'ABC-1236', 
    driver: 'Cody Miller', 
    location: '123 Main St, Charlotte, NC 28226', 
    status: 'Online', 
    lastUpdated: '32 seconds ago', 
    currentAppt: null, 
    nextAppt: { tech: 'Lunch', time: '2:00 pm', id: '', type: 'Break' } 
  },
  { 
    id: 'Vehicle-ID', 
    driver: 'Unassigned', 
    location: 'Office', 
    status: 'Disconnected', 
    lastUpdated: '32 seconds ago', 
    currentAppt: null, 
    nextAppt: null 
  },
];

export const APPOINTMENTS: Appointment[] = [
  { 
    id: 'A1', 
    type: 'assigned', 
    customer: 'Jerry Garcia', 
    time: '1:30 pm - 2:00 pm', 
    service: '#1234: Yearly Maintenance (Maintenance)', 
    tech: 'Mike Johnson', 
    address: '123 Main St, Charlotte, NC 28226', 
    color: 'bg-blue-500', 
    x: 45, 
    y: 40 
  },
  { 
    id: 'A2', 
    type: 'unassigned', 
    customer: 'Unassigned Appointment', 
    date: '04/15/2026', 
    time: '1:30 pm - 2:00 pm', 
    service: '#1234: Yearly Maintenance', 
    address: '123 Main St, Charlotte, NC 28226', 
    color: 'bg-orange-500', 
    x: 40, 
    y: 55 
  },
  { 
    id: 'A3', 
    type: 'service_req', 
    customer: 'Jerry Garcia', 
    time: '', 
    service: '#1234: Yearly Maintenance', 
    address: '123 Main St, Charlotte, NC 28226', 
    color: 'bg-red-500', 
    x: 60, 
    y: 50 
  },
];

export const TECHNICIANS: Technician[] = [
  { id: 'T1', name: 'Mike Johnson', vehicle: 'ABC-1234', x: 52, y: 48, color: 'bg-purple-600' },
  { id: 'T2', name: 'Bob Weir', vehicle: 'ABC-1235', x: 30, y: 45, color: 'bg-purple-600' },
];

export const VEHICLE_MARKERS: VehicleMarker[] = [
  { id: 'V1', vehicleId: 'ABC-1234', x: 48, y: 42, color: 'bg-green-600' },
  { id: 'V2', vehicleId: 'ABC-1235', x: 55, y: 35, color: 'bg-green-600' },
  { id: 'V3', vehicleId: 'ABC-1236', x: 42, y: 38, color: 'bg-green-600' },
];
