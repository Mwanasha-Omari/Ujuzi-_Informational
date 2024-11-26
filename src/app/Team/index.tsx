"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Team = () => {
  return (
    <div id="team" className="px-4 py-10 mt-64">
      <h1 className="font-bold text-black text-center mb-40 text-4xl lg:text-5xl mt-20">Team</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-32 justify-center items-center mb-32">
        <div className="text-center">
          <Image
            className="rounded-full mx-auto object-cover"
            src="/Images/OMARI.png"
            width={220}
            height={220}
            alt="Mwanasha Omari"
          />
          <p className="mt-6 text-lg font-semibold">Mwanasha Omari</p>
        </div>
        <div className="text-center">
          <Image
            className="rounded-full mx-auto object-cover"
            src="/Images/caren.png"
            width={220}
            height={220}
            alt="Caren Chepngetich"
          />
          <p className="mt-6 text-lg font-semibold">Caren Chepngetich</p>
        </div>
        <div className="text-center">
          <Image
            className="rounded-full mx-auto object-cover"
            src="/Images/wato.png"
            width={220}
            height={220}
            alt="Wato Bucha"
          />
          <p className="mt-6 text-lg font-semibold">Wato Bucha</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-32 justify-center items-center">
        <div className="text-center">
          <Image
            className="rounded-full mx-auto object-cover"
            src="/Images/Trecy.jpg"
            width={220}
            height={220}
            alt="Tracy Malonza"
          />
          <p className="mt-6 text-lg font-semibold">Tracy Malonza</p>
        </div>
        <div className="text-center">
          <Image
            className="rounded-full mx-auto object-cover"
            src="/Images/kur.png"
            width={220}
            height={220}
            alt="Kur Achan"
          />
          <p className="mt-6 text-lg font-semibold">Kur Achan</p>
        </div>
      </div>
    </div>
  );
};
export default Team;