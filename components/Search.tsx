"use client";

import Link from 'next/link';
import { useState } from 'react'

export default function Search() {
    
    const [search, setSearch] = useState(null);

    function handleSearch(term: any) {
        setSearch(term);
    }

    return (
        <form>   
            <div className="relative flex items-center gap-x-3">
                <input 
                    className="shadow lg:w-72 w-full px-3 py-2 rounded" 
                    type="text" 
                    id="default-search" 
                    placeholder="Search Anime..."
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    required />
                <Link href={`/search?q=${search}`}>
                    <button>            
                        <svg className="w-5 h-5 text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 20 20">
                            <path stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </form>
    );
}