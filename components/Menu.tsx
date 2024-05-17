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
                <Link href="/latest">
                    LATEST
                </Link>
            </li>
            <li>
                <Link href="/upcoming">
                    UPCOMING
                </Link>
            </li>
            <li>
                <Link href="/top-characters">
                    CHARACTER RANKINGS
                </Link>
            </li>
            <li>
                <Link href="/genres/anime">
                    GENRES
                </Link>
            </li>
            <li>
                <Link href="/manga">
                    MANGA
                </Link>
            </li>
        </ul>
    );
}