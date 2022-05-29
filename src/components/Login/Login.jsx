import  Axios  from 'axios';
import React from 'react';
import './login.css';
import { useHistory} from "react-router-dom";

var expToken = ""
var username = ""
var mobile;

function Login() {
	const history = useHistory();



	function signin(event) {
		const name = document.getElementById('lusername').value;
		const pass = document.getElementById('lpassword').value;
		// console.log(name);
		// console.log(pass);
		event.preventDefault();
		Axios.post("https://node-server-main.herokuapp.com/user/signin", {
			username: name,
			password: pass
		}).then(res => {
			// console.log(res.data);
			if (res.status === 200) {
				console.log("ok");
				username = res.data.username;
				mobile = res.data.mobile;
				console.log(username,mobile);
				expToken += res.data.token;
				console.log(expToken);
				if (name === 'admin') {
					history.push("/admin");
				}
				else {

					history.push("/main");
				}
			}

		}).catch(err => {
			alert('Check your login credentials');
		});
	}

	function signup(event) {
		const name = document.getElementById('rusername').value;
		const pass = document.getElementById('rpassword').value;
		const mobile = document.getElementById('rmobile').value;
		const rmno = document.getElementById('rno').value;

		event.preventDefault();
		Axios.post("https://node-server-main.herokuapp.com/user/signup", {
			username: name,
			password: pass,
			mobile: mobile,
			rno: rmno
		}).then(res => {
			history.push("/main");
			console.log(res);
		});
	}

	return (

		<div>

			<div class="section">
				<div class="container">
					<div class="row full-height justify-content-center">
						<div class="col-12 text-center align-self-center py-5">
							<div class="section pb-5 pt-5 pt-sm-2 text-center">
								<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
								<input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
								<label for="reg-log">

								</label>
								<div class="card-3d-wrap mx-auto">
									<div class="card-3d-wrapper">
										<div class="card-front">
											<div class="center-wrap">
												<div class="section text-center">
													<form>
														<h4 class="mb-4 pb-3" style={{ color: "white" }}>Log In</h4>
														<div class="form-group">
															<input type="text" class="form-style" placeholder="Your Username" id="lusername" autocomplete="off" />
															<i class="input-icon uil uil-at"></i>
														</div>
														<div class="form-group mt-2">
															<input type="password" class="form-style" placeholder="Your Password" id="lpassword" autocomplete="off" />
															<i class="input-icon uil uil-lock-alt"></i>
														</div>


														<button class="btn mt-4 sub" onClick={signin}>

															submit

														</button>


													</form>

												</div>
											</div>
										</div>
										<div class="card-back">
											<div class="center-wrap">
												<div class="section text-center">
													<h4 class="mb-4 pb-3" style={{ color: "white" }}>Sign Up</h4>
													<form>
														<div class="form-group">
															<input type="text" class="form-style" placeholder="Your Full Name" id="rusername" autocomplete="off" />
															<i class="input-icon uil uil-user"></i>
														</div>

														<div class="form-group mt-2">
															<input type="password" class="form-style" placeholder="Your Password" id='rpassword' autocomplete="off" />
															<i className="input-icon uil uil-lock-alt"></i>
														</div>
														<div class="form-group mt-2">
															<input type="mobile" class="form-style" placeholder="Your Mobile" id='rmobile' autocomplete="off" />
															<i class="input-icon uil uil-lock-alt"></i>
														</div>
														<div class="form-group mt-2">
															<input type="text" class="form-style" placeholder="Your Room Number" id='rno' autocomplete="off" />
															<i class="input-icon uil uil-lock-alt"></i>
														</div>
														<button class="btn mt-4 sub" onClick={signup}> submit</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}
	
export {expToken,username,mobile}
export default Login