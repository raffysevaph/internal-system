"use client";

import moment from "moment";

import DailyLogsForm from "./DailyLogsForm";
import PastLogs from "./PastLogs";

const DailyLogs = () => {
  const currentDateAndTime = moment().format("MMM DD, YYYY hh:mm A");

  return (
    <>
      <DailyLogsForm currentDateAndTime={currentDateAndTime} />

      <PastLogs />
    </>
  );
};

export default DailyLogs;
