import { useSelector, useDispatch } from 'react-redux'
import userAction from '../redux/user/userActions'
import { useRef } from 'react'
const Home = () => {
    const nameRef = useRef(null)
    const { currentUser } = useSelector(rootReducer => rootReducer.useReducer)
    const dispatch = useDispatch()

    const handdleClick = () => {
        dispatch({
            type: userAction.LOGIN,
            payload: {name: nameRef.current?.value, token: "123456"}
        })
        console.log(currentUser)
    }
    

    
  return (
    <div>
        <input type="text" placeholder='InputTest' ref={nameRef}/>
        <button onClick={handdleClick}>Click</button>
    </div>
  )
}

export default Home