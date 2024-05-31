import Image from "next/image";
import Link from 'next/link'
import Menu from "@/components/Menu";
import Search from "@/components/Search";

export default function Header() {
    return (
        <div className="header py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex justify-between items-center w-full">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Gogo Anime"
                                width={140}
                                height={54}
                                unoptimized
                            />
                        </Link>
                    </div>
                    
                    <Search />

                </div>
                <div className="border-t border-b border-dashed border-white mt-5">
                    <Menu class="gap-x-4 gap-y-5 py-3 font-semibold text-white flex flex-wrap text-sm md:text-base" />
                </div>
            </div>
        </div>
    );
}