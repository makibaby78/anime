import Image from "next/image";

export default function Header() {
    return (
        <div className="header py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex justify-between items-center w-full">
                    <div className="logo">
                        <Image
                            src="/logo.png"
                            alt="Gogo Anime"
                            width={140}
                            height={54}
                            priority
                        />
                    </div>
                    
                    <form>   
                        <div className="relative flex items-center gap-x-3">
                            <input className="shadow lg:w-72 w-full px-3 py-2 rounded" type="search" id="default-search" placeholder="Search Anime..." required />
                            <button>            
                                <svg className="w-5 h-5 text-dark" 
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
                </div>
            </div>
        </div>
    );
}