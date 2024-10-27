"use client";
import { useState } from "react";
import { toggleAttendance } from "@/app/lib/serverActions";
import AttendanceList from "@/app/components/AttendanceList";
import Link from "next/link";
import { AttendanceEditProps, AttendanceItem } from "../../../interfaces";

export default function AttendanceEditClient({
  initialData,
}: AttendanceEditProps) {
  const [attendanceData, setAttendanceData] =
    useState<AttendanceItem[]>(initialData);

  const handleToggle = async (index: number) => {
    // Made a copy of array so React knows there is an update and re-renders
    const updatedData = [...attendanceData];
    const name = updatedData[index].name;

    // Update the database
    await toggleAttendance(name);

    // Update the local state
    updatedData[index].present = !updatedData[index].present;
    setAttendanceData(updatedData);
  };

  return (
    <>
      <Link href={"/"}>
        <button
          aria-label="Go back to the Home page"
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded mb-4"
        >
          Back to Home
        </button>
      </Link>

      {/* the component below is the same as the one in home page but only difference is passing onToggle. 
      Needed to define the function at this level as the component then knows which page we are coming from for 
      conditional rendering/functionality. Also passing local data state so don't need to refresh page. */}

      <AttendanceList data={attendanceData} onToggle={handleToggle} />
    </>
  );
}
