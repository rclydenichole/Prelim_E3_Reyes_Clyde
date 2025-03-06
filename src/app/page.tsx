//import Link from "next/link";
import React, { ReactNode } from 'react';
import Navbar from "@/components/navbar";

export default function Home({ children }: { children: ReactNode }) {


  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  );
}

