"use client";

import PastLogsTable from "./PastLogsTable";

const PastLogs = () => {
  return (
    <>
      <div className="flex mt-5">
        <h1 className="font-bold text-3xl">Past Logs</h1>
      </div>

      <div className="flex flex-row items-end mt-2">
        <div className="pr-4">
          <label htmlFor="fromDate" className="font-medium text-lg">
            From Date
          </label>
          <br />
          <input
            type="text"
            name="fromDate"
            id="fromDate"
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          />
        </div>
        <div className="pr-4">
          <label htmlFor="toDate" className="font-medium text-lg">
            To Date
          </label>
          <br />
          <input
            type="text"
            name="toDate"
            id="toDate"
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          />
        </div>
        <div className="pr-4">
          <button className="px-5 py-2 rounded-md bg-hatchit-green text-white">
            Filter
          </button>
        </div>
        <div className="pr-4">
          <button className="px-5 py-2 rounded-md bg-hatchit-yellow text-white">
            Clear
          </button>
        </div>
      </div>

      <PastLogsTable />
    </>
  );
};

export default PastLogs;
