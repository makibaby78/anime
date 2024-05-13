'use client'

import Image from "next/image";

export default function Card(props: any) {

    return (
        <>
            <div className="image-wrapper rounded shadow w-full overflow-hidden flex items-center bg-white">
                <Image
                    src={ `${props.details.images.jpg.image_url}` }
                    alt={ props.details.title }
                    width={225}
                    height={318}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <h4 className="text-white font-bold mt-2 text-sm">{ props.details.title }</h4>
            { props.details.genres.length != 0 && 
                <div className="flex gap-x-1 gap-y-1 flex-wrap mt-2">
                    {props.details.genres.map((genre: any, index: number) => {
                    return (
                        <div key={ index } className="p-1 text-xs text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                            { genre.name }
                        </div>
                    )
                    })}
                </div>
            }
            { props.details.score && 
                <div className="mt-2 flex items-center gap-x-1">
                    <svg
                        className="text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-xs text-white">{ props.details.score }</span> 
                </div>
            }
        </>
    );
}