import React from 'react';

interface Props {
    src: string,
    alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
    return (
        <div className="img__container">
            <img src={src} alt={alt} />
        </div>
    )
}

export default Image;