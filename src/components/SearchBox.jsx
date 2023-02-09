"use client";
import React, { useState } from "react";
import {useRouter} from "next/navigation";
export default function SearchBox() {

    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between 
    items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 rounded-sm placeholder-gray-500
        outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search keywords..."
      />
      <button
        disabled={!search}
        className="text-amber-600 
        disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
