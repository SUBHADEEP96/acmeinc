import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface DataRow {
  [key: string]: any;
  id: string | number;
}

export default function TableView() {
  const [data, setData] = useState<DataRow[]>([]);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, []);

  if (!data.length) return <div className="p-4">Loading...</div>;

  const headers = Object.keys(data[0]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIdx: number,
    key: string
  ) => {
    const updated = [...data];
    updated[rowIdx][key] = e.target.value;
    setData(updated);
  };

  const toggleEdit = (rowIdx: number) => {
    setEditingRow(editingRow === rowIdx ? null : rowIdx);
  };

  const handleRowClick = (item: DataRow) => {
    if (editingRow === null) {
      navigate(`/detail/${item.id}`, { state: { item } });
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700"
              >
                {h.charAt(0).toUpperCase() + h.slice(1)}
              </th>
            ))}
            <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id}
              className={
                editingRow === i
                  ? "bg-yellow-50"
                  : "hover:bg-gray-50 cursor-pointer"
              }
              onClick={() => handleRowClick(row)}
            >
              {headers.map((key) => (
                <td
                  key={key}
                  className="px-4 py-2 border-b text-sm text-gray-800"
                >
                  {editingRow === i ? (
                    <input
                      type="text"
                      value={row[key]}
                      onChange={(e) => handleChange(e, i, key)}
                      className="w-full border rounded px-1 py-0.5"
                    />
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              <td className="px-4 py-2 border-b text-sm text-gray-800">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEdit(i);
                  }}
                  className="px-2 py-1 text-sm font-medium rounded bg-blue-100 hover:bg-blue-200"
                >
                  {editingRow === i ? "Save" : "Edit"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
