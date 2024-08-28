import Image from "next/image";
import Link from 'next/link'
import Menu from "@/_components/Menu";
import Search from "@/_components/Search";

export default function Header() {
    return (
        <div className="header py-5 p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="flex justify-between items-center w-full">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                alt="Gogo Anime"
                                width={140}
                                height={54}
                                priority
                                src="/logo.png"
                            />
                        </Link>
                    </div>
                    
                    <Search />

                </div>
                <div className="border-t border-b border-dashed border-white mt-5">
                    <Menu />
                </div>
            </div>
        </div>
    );
}