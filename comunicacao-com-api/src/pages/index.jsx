import { useEffect, useState } from "react"

export default function Home() {
  const[nome,setNome]=useState(" ")
  const[idade,setIdade]=useState(0)
  const[usuarios,setUsuarios]=useState([])
  

  async function post(){
     await fetch('api/questoes/1',{method:'POST',body:JSON.stringify({nome,idade})})

    const resp = await fetch('api/questoes/1')
    const usuarios =  await resp.json()
    setUsuarios(usuarios)
  }
  
  

  
  function renderizarUsuarios(){
    return usuarios.map((user,i)=>{
    return <li key={i}>O usuário {user.nome} tem {user.idade} anos</li>})
  }
  
  

  
  return (<>
    <div>
      <input type="text" value={nome} onChange={ev=>setNome(ev.target.value)}/>
      <input type="number" value={idade} onChange={ev=>setIdade(+ev.target.value)} />
      <button onClick={post} >ok</button>
      <ul>
        {renderizarUsuarios()}
      </ul>
    </div>
  
  
  
  </>)
  }
