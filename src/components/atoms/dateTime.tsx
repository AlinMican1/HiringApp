"use client";
import React from "react";
import { useState, useEffect } from "react";
export const DateTime = () => {
  const [dayMessage, setDayMessage] = useState("Good Afternoon,");
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 12 && hour < 18) {
      setDayMessage("Good Afternoon,");
    } else if (hour >= 18 || hour < 6) {
      setDayMessage("Good Evening,");
    } else {
      setDayMessage("Good Morning,");
    }
  }, []);
  return <div>{dayMessage}</div>;
};
