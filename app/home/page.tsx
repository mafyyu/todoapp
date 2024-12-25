'use client';
import Image from "next/image";
import Google from "../pages/LoginPage";
import { Header } from "../components/Header";
import { TaskForm } from "../components/TaskForm";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const openModal =() =>{
    router.push("/")
  }
  return(
    <>
    <Header></Header>
    <TaskForm></TaskForm>
    <button onClick={openModal} className="btn btn-primary">
ss
    </button>
    </>
  );
}
