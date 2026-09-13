import React from "react";

export default function BasicCalendar({ isOpen, onClose, villa, checkInDate, checkOutDate }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={() => onClose && onClose()}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Select Dates</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 text-xl leading-none">
            &times;
          </button>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg mb-4 text-sm text-gray-700">
          <p className="font-semibold text-gray-900">{villa?.name || "Luxury Villa"}</p>
          <p>Check-in: {checkInDate ? new Date(checkInDate).toLocaleDateString() : "Not selected"}</p>
          <p>Check-out: {checkOutDate ? new Date(checkOutDate).toLocaleDateString() : "Not selected"}</p>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
