import React, { PropsWithChildren } from 'react';

export type CardProps = {
  className?: string;
};

function Card(props: PropsWithChildren<CardProps>) {
  return (
    <div className={`p-8 bg-[#191919] rounded-[20px] ${props.className}`}>{props.children}</div>
  );
}

export default Card;
