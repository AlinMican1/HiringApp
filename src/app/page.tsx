import React from "react";
import { WelcomeHeader } from "@/components/molecules/welcomeHeader";
import { LatestHired } from "@/components/molecules/latestHired";
export default async function Home() {
  return (
    <div className="m-4">
      <WelcomeHeader />
      <LatestHired />
    </div>
  );
}
