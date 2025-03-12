import React, { useState, useEffect } from "react";

const NoteApp = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([input, ...notes]);
    setInput("");
  };

  const clearNotes = () => {
    setNotes([]);
    localStorage.removeItem("notes");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-black mb-4">Note Taking App</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            placeholder="Write a note..."
          />
          <button
            onClick={addNote}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="p-2 bg-gray-200 rounded-md text-black">{note}</li>
          ))}
        </ul>
        {notes.length > 0 && (
          <button
            onClick={clearNotes}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full"
          >
            Clear Notes
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteApp;