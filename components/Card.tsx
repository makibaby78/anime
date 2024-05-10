'use client'

import Image from "next/image";

export default function Card(props: any) {

    return (
        <>
            <Image
                src={ `${props.details.images.jpg.image_url}` }
                alt={ props.details.title }
                width={225}
                height={318}
                style={{ width: '100%', height: 'auto' }}
                className="rounded shadow"
            />
            <h4 className="font-bold mt-2">{ props.details.title }</h4>
            <div className="flex gap-x-1 gap-y-1 flex-wrap mt-2">
                {props.details.genres.map((genre: any, index: number) => {
                return (
                    <div key={ index } className="p-1 text-xs text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                        { genre.name }
                    </div>
                )
                })}
            </div>
            <div className="mt-2 flex items-center gap-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-sm">{ props.details.score }</span>
            </div>
        </>
    );
}