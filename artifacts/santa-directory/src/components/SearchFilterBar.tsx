"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface SearchFilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  filters: Record<string, boolean>;
  onFilterChange: (key: string, val: boolean) => void;
}

const filterOptions = [
  { key: "dbsChecked", label: "DBS Checked" },
  { key: "realBeard", label: "Real Beard" },
  { key: "homeVisits", label: "Home Visits" },
  { key: "corporateEvents", label: "Corporate Events" },
  { key: "schoolsNurseries", label: "Schools & Nurseries" },
  { key: "grottos", label: "Grottos" },
  { key: "videoAvailable", label: "Video Available" },
];

export default function SearchFilterBar({
  search,
  onSearchChange,
  filters,
  onFilterChange,
}: SearchFilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 lg:p-6">
      <div className="flex gap-3">
        <div className="flex-1 flex items-center border border-gray-200 rounded-lg px-4">
          <Search className="text-gray-400 mr-2 shrink-0" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, location, or keyword..."
            className="w-full py-3 outline-none text-sm text-charcoal placeholder:text-gray-400"
          />
          {search && (
            <button onClick={() => onSearchChange("")} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
            showFilters || activeCount > 0
              ? "bg-brand text-white border-brand"
              : "border-gray-200 text-charcoal hover:border-brand hover:text-brand"
          }`}
        >
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Filters</span>
          {activeCount > 0 && (
            <span className="bg-white text-brand text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => onFilterChange(opt.key, !filters[opt.key])}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filters[opt.key]
                    ? "bg-brand text-white"
                    : "bg-cream text-charcoal hover:bg-cream-dark"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {activeCount > 0 && (
            <button
              onClick={() =>
                filterOptions.forEach((opt) => onFilterChange(opt.key, false))
              }
              className="mt-3 text-sm text-brand hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
