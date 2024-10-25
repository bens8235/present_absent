import Link from "next/link";
import { getAllInfo } from "../lib/serverActions";
import AttendanceList from "../components/AttendanceList";

export default async function Home() {
  const presentAbsentInfo = await getAllInfo();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <AttendanceList data={presentAbsentInfo} />
      <Link href={"/EditAttendance"}>Edit Attendance</Link>
    </div>
  );
}
