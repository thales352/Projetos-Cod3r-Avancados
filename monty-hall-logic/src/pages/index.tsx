import {Button, InputNum} from "../../components/All";
import { useState } from "react";

export default function Index(second) {
const[num,setnum]=useState(0)
function verificarNumero(numero:number){
  if(numero<1|| numero>100){
    return
  }
  setnum(numero)
}





  return (
    <div style={{display:"flex"}}>
      <InputNum value={num} onChange={(num)=>{}}/>
      <Button/>
    </div>
  )
}
