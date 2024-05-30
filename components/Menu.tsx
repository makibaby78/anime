import Link from 'next/link'

export default function Menu(props: any) {

    return (
        <ul className={ props.class }>
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
            <li>
                <Link 
                    href="/manga"
                    prefetch={false}
                >
                    MANGA
                </Link>
            </li>
        </ul>
    );
}