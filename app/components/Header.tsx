'use client';
import react from "react";
import { useRouter } from "next/navigation";

export function Header (){
    const router = useRouter();

    const pushlogin =()=>{
        router.push('/login')
    }


    return (
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* ロゴ部分 */}
            <div className="text-2xl font-bold">
              <a href="/" className="hover:text-blue-300 transition-colors">
                MyToDo
              </a>
            </div>
    
            {/* ナビゲーション */}
            <nav className="space-x-4">
              <a href="/about" className="hover:text-blue-300 transition-colors">
                About
              </a>
              <a href="/features" className="hover:text-blue-300 transition-colors">
                Features
              </a>
              <a href="/contact" className="hover:text-blue-300 transition-colors">
                Contact
              </a>
            </nav>
    
            {/* ユーザーアクション */}
            <div className="space-x-2">
              <button onClick={pushlogin} className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
                Log In
              </button>
              <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </header>
      );
}