"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import clsx from "clsx";

export interface TabContent {
  title: string;
  content: React.ReactNode;
}

interface DynamicModalProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  tabs: TabContent[];
}

export default function DynamicModal({ isOpen, onClose, header, tabs }: DynamicModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center px-4 transition-colors duration-300",
        isOpen ? "bg-black/40 backdrop-blur-sm opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "relative w-full max-w-3xl h-[90vh] md:h-[70vh] flex flex-col transform rounded-2xl bg-white shadow-2xl transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900">{header}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-6 flex-shrink-0 overflow-x-auto">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={clsx(
                "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                activeTab === idx
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="relative flex-1 overflow-hidden">
          <div className="p-6 text-gray-700 overflow-y-auto h-full">{tabs[activeTab]?.content}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
