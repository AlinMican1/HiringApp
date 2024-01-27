import Login from "@/components/molecules/login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DateTime } from "@/components/atoms/dateTime";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-screen justify-center ">
      <div className=" outline rounded-md m-2 ">
        <div className="flex text-white font-bold text-xl p-2 mt-4">
          <h1>
            <DateTime />
          </h1>
          <h1>{session?.user.username}</h1>
        </div>
      </div>
    </div>
  );
}
