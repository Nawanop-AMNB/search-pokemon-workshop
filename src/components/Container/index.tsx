import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

export type ContainerProps = {};

function Container(props: PropsWithChildren<ContainerProps>) {
  return <div className={`lg:h-[calc(100vh-70px)]`}>{props.children}</div>;
}

export default Container;
