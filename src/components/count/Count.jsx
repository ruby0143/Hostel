import React,{useEffect,useState} from 'react'
import './count.css';
import Axios from 'axios';



const Count = () => {
    const [bf,setBf] = useState(0);
    const [lunch,setLunch] = useState(0);
    const [dinner,setDinner]  = useState(0);
    useEffect(() => {
        Axios.get("https://node-server-main.herokuapp.com/count").then((res) => {
            console.log(res);
            if (res.data) {
                setBf(res.data.breakfast);
                setLunch(res.data.lunch);
                setDinner(res.data.dinner);
            }
          }).catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <div className='count'>
        <h3>Today's Count</h3>
        <h5>Breakfast : {bf}</h5>
        <h5>Lunch : {lunch}</h5>
        <h5>Dinner : {dinner}</h5>
    </div>
  )
}

export default Count