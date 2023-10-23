"use client";

const DailyLogsForm = ({ currentDateAndTime }: { currentDateAndTime: any }) => {
  return (
    <>
      <div className="flex">
        <h1 className="font-bold text-3xl">YTAI & DAILY JOURNAL</h1>
      </div>

      <div className="grid grid-cols-2 mt-5">
        <div className="pr-5">
          <label htmlFor="yesterday" className="font-medium text-lg">
            Yesterday
          </label>
          <br />
          <input
            type="text"
            name="yesterday"
            id="yesterday"
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          />
        </div>
        <div className="pr-5">
          <label htmlFor="today" className="font-medium text-lg">
            Today
          </label>
          <br />
          <input
            type="text"
            name="today"
            id="today"
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          />
        </div>

        <div className="pr-5 mt-4">
          <label htmlFor="accomplish" className="font-medium text-lg">
            Accomplish
          </label>
          <br />
          <input
            type="text"
            name="accomplish"
            id="accomplish"
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          />
        </div>
        <div className="pr-5 mt-4">
          <label htmlFor="impediment" className="font-medium text-lg">
            Impediment
          </label>
          <br />
          <input
            type="text"
            name="impediment"
            id="impediment"
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          />
        </div>

        <div className="pr-5 mt-4">
          <label htmlFor="accomplish" className="font-medium text-lg">
            Date & Time
          </label>
          <br />
          <input
            type="text"
            name="accomplish"
            id="accomplish"
            className="w-full border-2 border-hatchit-border rounded-md p-2 text-disabled-value"
            disabled={true}
            value={currentDateAndTime}
          />
        </div>
        <div className="pr-5 mt-4">
          <label htmlFor="daily_journal" className="font-medium text-lg">
            Daily Journal
          </label>
          <br />
          <textarea
            name="daily_journal"
            id="daily_journal"
            rows={7}
            className="w-full border-2 border-hatchit-border rounded-md p-2"
          ></textarea>
        </div>

        <div></div>
        <div className="flex flex-row-reverse pr-5 mt-4 text-white">
          <button className="bg-hatchit-green px-5 py-2 rounded-md">
            Update
          </button>
          <button className="bg-hatchit-blue mr-3 px-5 py-2 rounded-md">
            New
          </button>
        </div>
      </div>
    </>
  );
};

export default DailyLogsForm;
