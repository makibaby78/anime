"use client"

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

export default function Search() {

    // initiate the router from next/navigation

    const router = useRouter()

    // We need to grab the current search parameters and use it as default value for the search input

    const [inputValue, setValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{

        const inputValue = event.target.value;

        setValue(inputValue);

    }



    // If the user clicks enter on the keyboard, the input value should be submitted for search 

    // We are now routing the search results to another page but still on the same page


    const handleSearch = () => {

        if (inputValue) return router.push(`/search?q=${inputValue}`);

        if (!inputValue) return router.push("/search")

    }


    const handleKeyPress = (event: { key: any; }) => {

        if (event.key === "Enter") return handleSearch()

    }


    return (
        <form>   
            <div className="relative flex items-center gap-x-3">
                <input 
                    className="shadow lg:w-72 w-full px-3 py-2 rounded" 
                    type="text" 
                    id="default-search" 
                    placeholder="Search Anime..."
                    value={inputValue ?? ""} 
                    onChange={handleChange}
                    onKeyDown={handleKeyPress} 
                    required />
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
            </div>
        </form>
    );
}