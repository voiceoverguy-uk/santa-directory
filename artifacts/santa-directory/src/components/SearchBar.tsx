"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/santas${query ? `?search=${encodeURIComponent(query)}` : ""}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex-1 flex items-center px-4">
          <Search className="text-gray-400 mr-3 shrink-0" size={20} />
          <input
            type="text"
            placeholder="Search by area, e.g. London, Manchester..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 text-charcoal placeholder:text-gray-400 outline-none text-sm sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 font-semibold transition-colors text-sm sm:text-base"
        >
          Search
        </button>
      </div>
    </form>
  );
}
