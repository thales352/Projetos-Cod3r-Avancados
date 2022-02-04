import { useState } from "react"

export default function Home() {
  const[nome,setNome]=useState(" ")
  const[idade,setIdade]=useState(0)
  const[usuarios,setUsuarios]=useState([])
  

  function post(){
    fetch('api/questoes/1',{method:'POST',body:JSON.stringify({nome,idade})})
  }
  setNome("")
  setIdade(0)
  
  fetch('api/questoes/1').then((res)=>{res.json()}).then((re)=>setUsuarios(re))

  
  function renderizarUsuarios(){
    return usuarios.map((usuario,i)=><li id={i}>{usuario}</li>)
  }
  

  
  return (<>
    <div>
      <input type="text" value={nome} onChange={ev=>setNome(ev.target.value)}/>
      <input type="number" value={idade} onChange={ev=>setIdade(ev.target.value)} />
      <button onClick={post} >ok</button>
      <ul>
        {renderizarUsuarios()}
      </ul>
    </div>
  
  
  
  </>)
  }
