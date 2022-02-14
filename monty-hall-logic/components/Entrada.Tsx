import styles from '../src/styles/Entrada.module.css'

interface PortasProps{
    value:number
    onChange:(numero:number)=>void
}

export default function Input(props:PortasProps) {



    return(<div className={styles.container}><input  type='number' value={props.value}
    onChange={(e)=>props.onChange(+e.target.value)} placeholder="oi"></input></div>)




}