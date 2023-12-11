import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    // <div className=" h-auto w-full">
    <Image
      src="/images/projects/Macbook Pro on Workstation Mockup PSD.png"
      width={2000}
      height={2000}
      className=" object-contain"
      alt=""
    />
    // </div>
  );
}
