"use client";

import { Icon } from "@iconify/react";
import moment from "moment";

const PastLogsTable = ({ pastLogs }: { pastLogs: any }) => {
  return (
    <>
      <div className="mt-3 pr-3">
        <table className="table-auto w-full pr-3">
          <thead className="bg-hatchit-table-header-bg p-10 text-hatchit-table-header-text-color">
            <tr>
              <th className="py-3">Date</th>
              <th className="py-3">Log Start</th>
              <th className="py-3">Log End</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="align-middle bg-white text-center">
            {pastLogs.map((item: any, ndx: any) => {
              return <TableBody key={ndx} item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PastLogsTable;

const TableBody = ({ item }: { item: any }) => {
  return (
    <>
      <tr className="border-b border-hatchit-table-body-border">
        <td className="py-5">
          <span>{formatToDate(item.createdAt)}</span>
        </td>
        <td className="py-5">
          <span>{formatToTime(item.createdAt)}</span>
        </td>
        <td className="py-5">
          <span>{formatToTime(item.updatedAt)}</span>
        </td>
        <td className="py-5">
          <button>
            <Icon
              icon="mdi-light:eye"
              width={30}
              height={30}
              className="text-hatchit-table-view-button"
            />
          </button>
          <button>
            <Icon
              icon="mdi-light:pencil"
              width={30}
              height={30}
              className="text-hatchit-table-edit-button"
            />
          </button>
        </td>
      </tr>
    </>
  );
};

const formatToDate = (date: any) => {
  return moment(date).format("MMM DD, YYYY");
};

const formatToTime = (date: any) => {
  return moment(date).format("hh:mm A");
};
