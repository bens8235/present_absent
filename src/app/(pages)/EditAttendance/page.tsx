"use client";

import React, { useState, useEffect } from "react";
import { getAllInfo } from "@/app/lib/serverActions";
import { toggleAttendance } from "@/app/lib/serverActions";
import AttendanceList from "@/app/components/AttendanceList";
import Link from "next/link";
import { AttendanceItem } from "../../../../types";

export default function EditAttendance() {
  const [attendanceData, setAttendanceData] = useState<AttendanceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await getAllInfo();
      setAttendanceData(initialData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleToggle = async (index: number) => {
    const updatedData = [...attendanceData];
    const name = updatedData[index].name;
    await toggleAttendance(name);

    updatedData[index].present = !updatedData[index].present;
    setAttendanceData(updatedData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {loading && (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-gray-300"></div>
          <h1 className="text-center font-bold text-lg mt-4">Loading...</h1>
        </div>
      )}
      {!loading && (
        <>
          <AttendanceList data={attendanceData} onToggle={handleToggle} />
          <Link href={"/"}>Back to Home</Link>
        </>
      )}
    </div>
  );
}
