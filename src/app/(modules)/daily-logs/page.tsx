"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

import DailyLogsForm from "./DailyLogsForm";
import PastLogs from "./PastLogs";

const DailyLogs = () => {
  const currentDateAndTime = moment().format("MMM DD, YYYY hh:mm A");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <DailyLogsForm
        currentDateAndTime={currentDateAndTime}
        currentUser={currentUser}
      />

      <PastLogs />
    </>
  );
};

export default DailyLogs;
