"use client";

import { Icon } from "@iconify/react";

const PastLogsTable = () => {
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
            <tr className="border-b border-hatchit-table-body-border">
              <td className="py-5">
                <span>Sept 22, 2023</span>
              </td>
              <td className="py-5">
                <span>8:05 AM</span>
              </td>
              <td className="py-5">
                <span>7:00 pm</span>
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

            <tr className="border-b border-hatchit-table-body-border">
              <td className="py-5">
                <span>Sept 21, 2023</span>
              </td>
              <td className="py-5">
                <span>8:05 AM</span>
              </td>
              <td className="py-5">
                <span>7:00 pm</span>
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

            <tr className="border-b border-hatchit-table-body-border">
              <td className="py-5">
                <span>Sept 20, 2023</span>
              </td>
              <td className="py-5">
                <span>8:05 AM</span>
              </td>
              <td className="py-5">
                <span>7:00 pm</span>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PastLogsTable;
