"use client";

import { AttendanceListProps } from "../../../interfaces";

export default function AttendanceList({
  data,
  onToggle,
}: AttendanceListProps) {
  // Lots of checks on whether the toggle function passed as that is for the edit page so can toggle attendance
  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-center font-bold text-lg mb-6">
        {onToggle ? "Edit by Clicking on Icon" : "Attendance List"}
      </h1>
      <div className="flex font-bold border-b-2 pb-2 mb-4">
        <div className="flex-1 text-left ml-8">Name</div>
        <div className="flex-1 text-right mr-8">Present</div>
      </div>

      <div>
        {data.map((item, index) => (
          <div key={index} className="flex py-2 border-b">
            <div className="flex-1 text-left ml-8">{item.name}</div>
            <div
              className={`flex-1 text-right mr-8 ${
                onToggle ? "cursor-pointer" : ""
              }`}
              role={onToggle ? "button" : undefined}
              tabIndex={onToggle ? 0 : undefined}
              aria-pressed={
                onToggle ? (item.present ? "true" : "false") : undefined
              }
              aria-label={
                onToggle ? `Toggle attendance for ${item.name}` : undefined
              }
              onClick={() => onToggle && onToggle(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onToggle && onToggle(index);
                }
              }}
            >
              {item.present ? (
                <span className="text-green-500 text-2xl">✓</span> // Green Tick for Yes
              ) : (
                <span className="text-red-500 text-2xl">✗</span> // Red Cross for No
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
