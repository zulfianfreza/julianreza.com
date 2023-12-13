"use client";

import React from "react";

export default function Skills() {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-12">
      <div className=" col-span-4">
        <p>(Skills)</p>
      </div>

      <div className=" col-span-8">
        <div className="flex flex-col gap-2">
          <div className=" grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
            <div className=" col-span-3 flex justify-start lg:col-span-4">
              <p className=" font-medium">Programming Languages</p>
            </div>
            <div className=" col-span-9 lg:col-span-8">
              <p>JavaScript, TypeScript, Dart, Golang, PHP</p>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
            <div className=" col-span-3 flex justify-start lg:col-span-4">
              <p className=" font-medium">Framework and Libraries</p>
            </div>
            <div className=" col-span-9 lg:col-span-8">
              <p className=" leading-relaxed">
                React.js, Next.js, Express, MongoDB, MySQL, PostgreSQL, React
                Query, Redux Toolkit, Zustand, Prisma, Drizzle ORM, Tailwind
                CSS, Bootstrap, Flutter, BLoC, Gin, Gorm, and others.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
            <div className=" col-span-3 flex justify-start lg:col-span-4">
              <p className=" font-medium">API</p>
            </div>
            <div className=" col-span-9 lg:col-span-8">
              <p>REST, tRPC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
