import { Counter } from "@/components/counter";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      
      <h1 style={{textAlign:"center", marginTop:"50px"}}>Home page</h1>
      <Counter/>
    </div>
  );
}
