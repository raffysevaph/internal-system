"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";

const resetForm = {
  yesterday: "",
  today: "",
  accomplish: "",
  impediment: "",
  daily_journal: "",
  currentDateAndTime: moment().format("MMM DD, YYYY hh:mm A"),
  id: null,
};

const DailyLogsForm = ({
  currentDateAndTime,
  currentUser,
}: {
  currentDateAndTime: any;
  currentUser: any;
}) => {
  const [isDisableUpdate, setIsDisableUpdate] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      yesterday: "",
      today: "",
      accomplish: "",
      impediment: "",
      daily_journal: "",
      currentDateAndTime: currentDateAndTime,
      id: null,
    },
  });

  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
    const id = data?.id;
    delete data?.currentDateAndTime;
    delete data?.id;
    let obj = data;
    obj["user_id"] = currentUser?.user_id;

    const response = await axios.post("/api/daily_logs", obj, {
      headers: { "Content-Type": "application/json" },
    });

    setIsDisableUpdate(true);

    console.log(response);
    Swal.fire({
      icon: "success",
      text: "Successfully added daily log",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const onNew = () => {
    Swal.fire({
      icon: "success",
      text: "Successfully cleared form",
      showConfirmButton: false,
      timer: 2000,
    });
    reset(resetForm);
    setIsDisableUpdate(false);
  };

  return (
    <>
      <div className="flex">
        <h1 className="font-bold text-3xl">YTAI & DAILY JOURNAL</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 mt-5">
          <div className="pr-5">
            <label htmlFor="yesterday" className="font-medium text-lg">
              Yesterday
            </label>
            <br />
            <input
              {...register("yesterday")}
              className="w-full border-2 border-hatchit-border rounded-md p-2"
            />
          </div>
          <div className="pr-5">
            <label htmlFor="today" className="font-medium text-lg">
              Today
            </label>
            <br />
            <input
              {...register("today")}
              className="w-full border-2 border-hatchit-border rounded-md p-2"
            />
          </div>

          <div className="pr-5 mt-4">
            <label htmlFor="accomplish" className="font-medium text-lg">
              Accomplish
            </label>
            <br />
            <input
              {...register("accomplish")}
              className="w-full border-2 border-hatchit-border rounded-md p-2"
            />
          </div>
          <div className="pr-5 mt-4">
            <label htmlFor="impediment" className="font-medium text-lg">
              Impediment
            </label>
            <br />
            <input
              {...register("impediment")}
              className="w-full border-2 border-hatchit-border rounded-md p-2"
            />
          </div>

          <div className="pr-5 mt-4">
            <label htmlFor="dateAndTime" className="font-medium text-lg">
              Date & Time
            </label>
            <br />
            <input
              {...register("currentDateAndTime")}
              className="w-full border-2 border-hatchit-border rounded-md p-2 text-disabled-value"
              disabled={true}
            />
          </div>
          <div className="pr-5 mt-4">
            <label htmlFor="daily_journal" className="font-medium text-lg">
              Daily Journal
            </label>
            <br />
            <textarea
              {...register("daily_journal")}
              rows={7}
              className="w-full border-2 border-hatchit-border rounded-md p-2"
            ></textarea>
          </div>

          <div></div>
          <div className="flex flex-row-reverse pr-5 mt-4 text-white">
            <button
              className={`bg-hatchit-green px-5 py-2 rounded-md ${
                isDisableUpdate ? "opacity-75" : ""
              }`}
              type="submit"
              disabled={isDisableUpdate}
            >
              Update
            </button>
            <button
              className="bg-hatchit-blue mr-3 px-5 py-2 rounded-md"
              type="button"
              onClick={onNew}
            >
              New
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default DailyLogsForm;
