import React, { useEffect, useState } from "react";
import API from "../../api/axios";

function SpendAnalysis() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/reports/spend-analysis")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setError("Failed to load spend analysis data");
      });
  }, []);

  const downloadFile = async (type) => {
    try {
      const response = await API.get(`/reports/spend-analysis/${type}`, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      const filename = `spend-analysis-${type}.${type === "excel" ? "xlsx" : "pdf"}`;
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Spend Analysis Report</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #cbd5e1", padding: "10px", background: "#248738" }}>
              Month
            </th>
            <th style={{ border: "1px solid #cbd5e1", padding: "10px", background: "#248738" }}>
              Total Spend
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #cbd5e1", padding: "10px", textAlign: "center", color: "#111827" }}>
                  {row[0]}
                </td>
                <td style={{ border: "1px solid #cbd5e1", padding: "10px", textAlign: "center", color: "#111827" }}>
                  {row[1]}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: "center", padding: "10px" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => downloadFile("pdf")}>Download PDF</button>
        <button onClick={() => downloadFile("excel")}>Download Excel</button>
      </div>
    </div>
  );
}

export default SpendAnalysis;
