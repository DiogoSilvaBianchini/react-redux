import { useEffect } from 'react'
import './style.css'
const ToggleBtn = ({setCart, cart}) => {

    useEffect(() => {
        const btn = document.querySelector("#btnToggle")
        if(cart){
            btn.classList.add("active")
        }else{
            btn.classList.remove("active")
        }
    })

    const activeToggle = () => {
        const btn = document.querySelector("#btnToggle")
        if(cart){
            btn.classList.remove("active")
            setCart(false)
        }else{
            btn.classList.add("active")
            setCart(true)
        }
    }

  return (
    <button onClick={activeToggle} id='btnToggle' className="toggleBtn">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </button>
  )
}

export default ToggleBtn