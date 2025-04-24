"use client";
import React from "react";
import {
   useReactTable,
   getCoreRowModel,
   flexRender,
   createColumnHelper,
} from "@tanstack/react-table";
import { data, InvestmentData } from "@/app/constants/table";
import cn from "classnames";

const columnHelper = createColumnHelper<InvestmentData>();

const columns = [
   columnHelper.accessor("criteria", {
      header: "Критерий",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("conservative", {
      header: "Консервативные",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("balanced", {
      header: "Сбалансированные",
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor("breakthrough", {
      header: "Прорывные",
      cell: (info) => info.getValue(),
   }),
];

export default function Table() {
   const table = useReactTable<InvestmentData>({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
   });

   return (
      <div className="overflow-x-auto bg-white rounded-main py-4">
         <table className="min-w-full">
            <thead>
               {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                     {headerGroup.headers.map((header) => (
                        <th
                           key={header.id}
                           className="px-4 py-2 first:pl-6 last:pr-6 text-left"
                        >
                           {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                           )}
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody>
               {table.getRowModel().rows.map((row, rowIndex) => (
                  <tr
                     key={row.id}
                     className={rowIndex % 2 !== 0 ? "bg-accent" : "bg-white"}
                  >
                     {row.getVisibleCells().map((cell) => (
                        <td
                           key={cell.id}
                           className={cn(
                              rowIndex % 2 !== 0 ? "text-white" : "text-black",
                              "px-4 py-2 first:pl-6 last:pr-6"
                           )}
                        >
                           {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                           )}
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
