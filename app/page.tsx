import Image from "next/image";
import Google from "./pages/LoginPage";
import { Header } from "./components/Header";
export default function Home() {
  return(
    <>
    <Header></Header>
    <Google></Google>
    </>
  );
}
