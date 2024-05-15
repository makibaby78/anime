import Link from 'next/link'

export default function Menu(props: any) {

    console.log(props)

    return (
        <ul>
            <li>
                <Link href="/">
                    TOP RATED
                </Link>
            </li>
        </ul>
    );
}