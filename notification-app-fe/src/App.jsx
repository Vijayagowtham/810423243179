import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [topNotifications, setTopNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  function loadNotifications() {
    const notifications = [
      {
        id: "1",
        type: "Result",
        message: "Mid Semester Result Published",
        timestamp: "2026-04-22 17:51:30",
      },
      {
        id: "2",
        type: "Placement",
        message: "CSX Corporation Hiring",
        timestamp: "2026-04-22 17:51:18",
      },
      {
        id: "3",
        type: "Event",
        message: "Farewell Event",
        timestamp: "2026-04-22 17:51:06",
      },
      {
        id: "4",
        type: "Placement",
        message: "AMD Hiring Drive",
        timestamp: "2026-04-22 17:49:42",
      },
      {
        id: "5",
        type: "Result",
        message: "Project Review",
        timestamp: "2026-04-22 17:50:42",
      },
    ];

    const priorityWeight = {
      Placement: 3,
      Result: 2,
      Event: 1,
    };

    const sortedNotifications = [...notifications].sort((a, b) => {
      const weightDifference =
        priorityWeight[b.type] - priorityWeight[a.type];

      if (weightDifference !== 0) {
        return weightDifference;
      }

      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    const topTen = sortedNotifications.slice(0, 10);

    setTopNotifications(topTen);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Notifications</h1>

      {topNotifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{notification.type}</h3>
          <p>{notification.message}</p>
          <small>{notification.timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;