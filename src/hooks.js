import {useState} from 'react'
import axios from "axios";


const useFlip=()=>{
    const [isFlipped, setFlipped] = useState(false)

    const flip = ()=>{
        setFlipped((flip)=>!flip)
    }
    return[isFlipped,flip]

}

const useAxios=(url,handler)=>{
    const [state, setState] = useState([]);
  const addState = async (name) => {
    const response = await axios.get(name? url+name:url);
    // console.log(response.data)
    setState(cards => [...cards,handler(response.data)]);
  };
  const reset =()=>{
      setState([])
  }
  return[state, addState, reset]
}

export default useFlip
export {useAxios}