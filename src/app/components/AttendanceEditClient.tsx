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

      <AttendanceList data={attendanceData} onToggle={handleToggle} />
    </>
  );
}
