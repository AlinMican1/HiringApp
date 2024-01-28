import Login from "@/components/molecules/login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DateTime } from "@/components/atoms/dateTime";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="border m-2 rounded-xl border-darkgray ">
      <h1>
        <DateTime />
      </h1>
      <h1 className="capitalize">{session?.user.username}</h1>
      {session?.user ? <div></div> : ""}
    </div>
  );
}
