import {Button} from "../../components/All";
import  InputNum  from "../../components/Input";
import { useState } from "react";

export default function Index() {
const[num,setnum]=useState(3)
function verificarNumero(numero:number){
  if(numero<1|| numero>100){
    return
  }
  setnum(numero)
}





  return (
    <div style={{display:"flex"}}>
      <InputNum value={num} onChange={(numero)=>{setnum(numero)}}></InputNum>
      <span>{num}</span>
      <Button/>
    </div>
  )
}
