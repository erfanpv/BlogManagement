import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const TableWithActions = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-sm font-medium text-gray-400 ${
                    column.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 text-sm font-medium text-gray-400 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {data.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-zinc-800/50 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-gray-300"
                  >
                    {column.render
                      ? column.render(item[column.key])
                      : item[column.key]}
                  </td>
                ))}
                <td className="px-6 py-4 text-right space-x-2">
                  {onEdit && (
                    <button
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                      onClick={() => onEdit(item)}
                    >
                      <Pencil className="w-4 h-4 inline-block" />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(item)}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 inline-block" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithActions;
