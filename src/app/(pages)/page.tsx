import Link from "next/link";
import { getAllInfo } from "../lib/serverActions";
import AttendanceList from "../components/AttendanceList";
import AddNameModal from "../components/AddNameModal";

export default async function Home() {
  const presentAbsentInfo = await getAllInfo();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-[#d4e6f1]">
      <div className="flex space-x-28 mb-4 ">
        <AddNameModal />
        <Link href={"/EditAttendance"}>
          <button
            aria-label="Edit the attendance list"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Attendance
          </button>
        </Link>
      </div>
      <AttendanceList data={presentAbsentInfo} />
    </main>
  );
}
