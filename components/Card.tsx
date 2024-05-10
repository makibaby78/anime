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
            />
            { props.details.title }
        </>
    );
}