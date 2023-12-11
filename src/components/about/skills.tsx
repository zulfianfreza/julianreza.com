"use client";

import React from "react";

export default function Skills() {
  return (
    <div className=" mt-8">
      <h1 className=" text-lg font-medium">Skills</h1>
      <div className="flex flex-col gap-2">
        <div className=" grid grid-cols-12 gap-8">
          <div className=" col-span-3 flex justify-start lg:col-span-4">
            <p>Programming Languages</p>
          </div>
          <div className=" col-span-9 lg:col-span-8">
            <p>JavaScript, TypeScript, Dart, Golang, PHP</p>
          </div>
        </div>

        <div className=" grid grid-cols-12 gap-8">
          <div className=" col-span-3 flex justify-start lg:col-span-4">
            <p>Framework and Libraries</p>
          </div>
          <div className=" col-span-9 lg:col-span-8">
            <p className=" leading-relaxed">
              React.js, Next.js, Express, MongoDB, MySQL, PostgreSQL, React
              Query, Redux Toolkit, Zustand, Prisma, Drizzle ORM, Tailwind CSS,
              Bootstrap, Flutter, BLoC, Gin, Gorm, and others.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-12 gap-8">
          <div className=" col-span-3 flex justify-start lg:col-span-4">
            <p>API</p>
          </div>
          <div className=" col-span-9 lg:col-span-8">
            <p>REST, tRPC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
