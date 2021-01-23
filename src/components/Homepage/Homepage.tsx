import React, { FC } from 'react';

interface HomepageProps {
    longitude?: number;
    latitude?: number;
}

export const Homepage: FC<HomepageProps> = (props) => {
    const { latitude, longitude } = props;

    const url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    return (
        <div>test
            <a href={url} >url</a>
        </div>
    );
};