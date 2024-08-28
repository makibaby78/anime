import Link from 'next/link';

export default function Menu(props: any) {

    return (
        <ul className="gap-x-4 gap-y-5 py-3 font-semibold text-white flex flex-wrap text-sm md:text-base">
            <li>
                <Link href="/">
                    TOP RATED
                </Link>
            </li>
            <li>
                <Link 
                    href="/latest"
                    prefetch={false}
                >
                    LATEST
                </Link>
            </li>
            <li>
                <Link 
                    href="/upcoming"
                    prefetch={false}
                >
                    UPCOMING
                </Link>
            </li>
            <li>
                <Link 
                    href="/top-characters/1"
                    prefetch={false}
                >
                    CHARACTER RANKINGS
                </Link>
            </li>
            <li>
                <Link 
                    href="/genres/anime"
                    prefetch={false}
                >
                    GENRES
                </Link>
            </li>
        </ul>
    );
}