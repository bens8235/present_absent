import { getAllInfo } from "@/app/lib/serverActions";
import AttendanceEditClient from "@/app/components/AttendanceEditClient";

export default async function EditAttendance() {
  const initialData = await getAllInfo();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-[#d4e6f1]">
      <AttendanceEditClient initialData={initialData} />
    </main>
  );
}
