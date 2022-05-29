import  Axios  from 'axios';
import React from 'react'
import './user.css';

const User = (props) => {
 
    function disable(event){
        document.getElementById(event.target.id).disabled = true;
        const id = event.target.id;
        const [user,rno,pass,mob] = id.split(' ');
        Axios.post("https://node-server-main.herokuapp.com/admin/add",{
            username : user,
            password : pass,
            mobile : mob,
            roomNo : rno
        }).then(res =>{
            console.log(res);
        });
    }
  return (
    <div className='user'>
        <form > 
            <div class="card wd">
                <div class="card-body fm">
                    <div name="password" value={props.password} hidden>
                        True
                    </div>
                    <div  name="username" value={props.username} className='col-lg-3 lm col-md-3 '>
                        {props.username}
                    </div>
                    <div name="mobile" value={props.mobile} className='col-lg-4 col-md-4 lm '>
                        {props.mobile}
                    </div>
                    <div name="roomNo" value={props.roomNo} className='col-lg-2 col-md-3 lm'>
                        {props.roomNo}
                    </div>
                    <div className='col-lg-2 bn col-sm-2'>
                        <button type="submit" class="btn btn-primary lms" onClick={disable} id={props.username + " "+ props.roomNo+" "+props.password + " "+ props.mobile} >Accept</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default User