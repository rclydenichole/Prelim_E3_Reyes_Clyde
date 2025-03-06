import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Settings() {


  return (
    <>
    <ThemeProvider>
    <Navbar />
    <main></main>
    </ThemeProvider>
    </>
  );
}