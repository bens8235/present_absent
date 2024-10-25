import Link from "next/link";
import { getAllInfo } from "./lib/serverActions";

export default async function Home() {
  const presentAbsentInfo = await getAllInfo();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Centered Wrapper with Fixed Width */}
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-lg mb-6">Attendance List</h1>

        {/* Flex container for column titles */}
        <div className="flex font-bold border-b-2 pb-2 mb-4">
          <div className="flex-1 text-left ml-8">Name</div>
          <div className="flex-1 text-right mr-8">Present</div>
        </div>

        {/* Flex container for mapped data */}
        <div>
          {presentAbsentInfo.map((item, index) => (
            <div key={index} className="flex py-2 border-b">
              <div className="flex-1 text-left ml-8">{item.name}</div>
              <div className="flex-1 text-right mr-8">
                {item.present ? "Yes" : "No"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href={"/info"}></Link>
    </div>
  );
}
