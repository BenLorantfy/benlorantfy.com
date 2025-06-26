"use client";

import { PrintIcon } from "~/icons/PrintIcon";

export function PrintButton() {
    return (
      <button
        type="button"
        onClick={() => {
          window.print();
        }}
        className="print:hidden fixed top-2 right-2 z-50 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[rgb(66,134,222)] border border-[rgb(66,134,222)] px-3 py-2 rounded-lg font-medium transition-all duration-200 ease-in-out shadow-md hover:shadow-lg cursor-pointer"
      >
        <PrintIcon />
        Print
      </button>
    )
  }