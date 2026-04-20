"use client";

export function Legend() {
  return (
    <div className="fixed bottom-16 right-4 bg-white border rounded-lg shadow-xl p-4 z-50 w-52">
      <h4 className="font-bold text-xs mb-3 border-b pb-1 text-gray-700 text-left">Legend</h4>
      <div className="space-y-2 text-[11px] font-medium text-gray-600 text-left">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-blue-500 shadow-sm"></div> Assigned Appointments
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-orange-500 shadow-sm"></div> Unassigned Appointments
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-red-500 shadow-sm"></div> Service Requests
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-green-600 shadow-sm"></div> Vehicle Location
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded bg-purple-600 shadow-sm"></div> Technician Location
        </div>
      </div>
    </div>
  );
}
