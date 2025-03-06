import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function Profile({ children }: { children: ReactNode }) {


  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  );
}