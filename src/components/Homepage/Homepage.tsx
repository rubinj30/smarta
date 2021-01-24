import React, { FC } from "react";

interface HomepageProps {
  longitude?: number;
  latitude?: number;
}

export const Homepage: FC<HomepageProps> = (props) => {
  return <div>homepage</div>;
};
