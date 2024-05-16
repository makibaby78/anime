import Link from 'next/link';

export default async function Menu(props: any) {

    const pages = Array.from({ length: 10 }, (_, index) => index);

    let cp = await props.pagination.current_page;

    return (
        <ul className='mb-5 flex gap-x-2'>
            { cp > 1 && 
                <><li>
                    <Link href={ `${props.link}?page=1` }>
                        <span className='text-white font-bold text-xs py-1 px-3 bg-blue-900'>{ '<<' }</span>
                    </Link>
                </li>
                <li>
                    <Link href={ `${props.link}?page=${ cp - 1 }` }>
                        <span className='text-white font-bold text-xs py-1 px-3 bg-blue-900'>{ '<' }</span>
                    </Link>
                </li></>}
            {pages.map((page: any, index: number) => {

                let pageBehaviour;

                if(cp < 5){
                    pageBehaviour = index + 1;
                }else if(props.pagination.last_visible_page - 5 < cp){
                    pageBehaviour = props.pagination.last_visible_page - 9 + index;
                }else{
                    pageBehaviour = (cp + index) - 4;
                }

                let activePage = cp === pageBehaviour;
                return (
                    <li key={index}>
                        <Link href={ `${props.link}?page=${ pageBehaviour }` }>
                            <span 
                                className={`text-white font-bold text-xs py-1 px-3 ${ activePage ? 'bg-blue-600': 'bg-blue-900' } `}>
                                { pageBehaviour }
                            </span>
                        </Link>
                    </li>
                )
            })}
            { props.pagination.has_next_page && <>
            <li>
                <Link href={ `${props.link}?page=${cp + 1}` }>
                    <span className='text-white font-bold text-xs py-1 px-3 bg-blue-900'>{ '>' }</span>
                </Link>
            </li>            
            <li>
                <Link href={ `${props.link}?page=${props.pagination.last_visible_page}` }>
                    <span className='text-white font-bold text-xs py-1 px-3 bg-blue-900'>{ '>>' }</span>
                </Link>
            </li></>}
        </ul>
    );
}