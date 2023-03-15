import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white w-screen h-screen flex items-center justify-center">
      Home
    </div>
  );
}
