import Image from "next/image";
import Google from "./pages/LoginPage";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
export default function Home() {
  return(
    <>
    <Header></Header>
    <TaskForm></TaskForm>
    </>
  );
}
