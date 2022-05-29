import React, { useEffect, useState } from "react";
import Axios from "axios";
import { expToken, username} from "../Login/Login";
import "./main.css";
import { useHistory } from "react-router-dom";
import Submit from "../submit/Submit";

const Main = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [submitted, setSubmit] = useState(false);
  useEffect(() => {
    console.log(expToken);
    Axios.get("https://node-server-main.herokuapp.com/main", {
      headers: {
        authorization: `Bearer ${expToken}`,
      },
    })
      .then((res) => {
        // console.log(res);
        if (res.data.message === "Token sent") {
          setLogin(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  Axios.post("https://node-server-main.herokuapp.com/check", {
    usname: username,
  }).then((res) => {
    console.log(res.data);
    setSubmit(res.data.submitted);
  });

  function submit(event) {
    let bfm, lna, dn;

    event.preventDefault();
    if (document.getElementById("bfyes").checked) {
      bfm = "1";
    }
    if (document.getElementById("lnyes").checked) {
      lna = "1";
    }
    if (document.getElementById("dnyes").checked) {
      dn = "1";
    }

    Axios.post("https://node-server-main.herokuapp.com/user/submit", {
      bf: bfm,
      lunch: lna,
      dinner: dn,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });

    Axios.post("https://node-server-main.herokuapp.com/checkUpdate", {
      usname: username,
    }).then((res) => {
      // console.log(res.data);
      setSubmit(res.data.submitted);
      history.push("/submit");
    });

    document.getElementById("submit").disabled = true;
  }

  return login ? (
    !submitted ? (
      <div>
      
        
        <h2 style={{ textAlign: "center", margin: "20px" }}>Hostel Name</h2>
        <hr></hr>
        <div className="main">
          <h3>Hello {username}</h3>
          <hr></hr>
          <div>
            <fieldset>
              <legend>Would you like to have your breakfast?</legend>
              <div className="inp">
                <div>
                  <input
                    type="radio"
                    name="foo1"
                    id="bfyes"
                    value="1"
                    checked
                  />
                  <label>Yes</label>
                </div>

                <div className="no">
                  <input type="radio" name="foo1" id="bfno" value="0" />
                  <label>No</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>What about lunch?</legend>
              <div className="inp">
                <div>
                  <input type="radio" name="foo2" id="lnyes" value="1" />
                  <label>Yes</label>
                </div>

                <div className="no">
                  <input type="radio" name="foo2" id="lnno" value="0" />
                  <label>No</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>And dinner?</legend>
              <div className="inp">
                <div>
                  <input type="radio" name="foo3" id="dnyes" value="1" />
                  <label>Yes</label>
                </div>

                <div className="no">
                  <input type="radio" name="foo3" id="dnno" value="No" />
                  <label>No</label>
                </div>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            class="btn btn-primary lms"
            id="submit"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    ) : (
      <Submit />
    )
  ) : (
    <h1>Please Login</h1>
  );
};

export default Main;
