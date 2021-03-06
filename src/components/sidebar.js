// @flow
import React, {Children, Element} from 'react';

export function Sidebar(
  {
    title,
    children,
    className,
  }: {title: Element<*>, children?: Children, className?: string},
) {
  return (
    <div
      className={
        `${className || ''} flex-child bg-gray-faint  border border--gray-light border--1
        `
      }
    >
      <div className="flex-parent flex-parent--column h-full hmax-full">
        <div className="flex-child flex-child">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
