import type { FC, ReactNode } from 'react';
import '../styles/data-table.css';

type Column<T> = {
  header: string;
  render: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
};

const DataTable = <T,>({ columns, data, emptyMessage = '暂无数据' }: DataTableProps<T>) => {
  if (data.length === 0) {
    return <div className="data-table__empty">{emptyMessage}</div>;
  }

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.header}>{column.render(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export type { Column, DataTableProps };
export default DataTable;
