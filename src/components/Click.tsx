import { useState, useEffect } from "react";

const Click = () => {
  const [eventLog, setEventLog] = useState<string[]>([]);

  const logEvent = (eventType: string) => {
    const logMessage = `${eventType} event triggered`;
    console.log(logMessage);
    setEventLog((prevLogs) => [logMessage, ...prevLogs.slice(0, 4)]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      logEvent(`Keydown: ${event.key}`);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <button
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
        onClick={() => logEvent("Click")}
        onMouseEnter={() => logEvent("Hover")}
      >
        Click Me
      </button>
      <div className="mt-6 w-80 p-4 bg-white rounded-lg shadow-lg text-gray-700">
        <h2 className="text-lg font-semibold">Event Logs</h2>
        <ul className="mt-2 text-sm">
          {eventLog.length > 0 ? (
            eventLog.map((log, index) => <li key={index}>• {log}</li>)
          ) : (
            <li>No events triggered yet</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Click;