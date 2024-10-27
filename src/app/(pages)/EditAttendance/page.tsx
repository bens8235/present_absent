import { getAllInfo } from "@/app/lib/serverActions";
import AttendanceEditClient from "@/app/components/AttendanceEditClient";

export default async function EditAttendance() {
  // Fetches people data from Supabase
  const initialData = await getAllInfo();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-[#d4e6f1]">
      {/* Wanted this page to be server side so it wasn't loading the data on page switch so component 
      below is the client side code that was originally on this page */}
      <AttendanceEditClient initialData={initialData} />
    </main>
  );
}
