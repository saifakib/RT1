import { useContext } from 'react'
import  { UserContext } from '../../app/App'
import firebase from "firebase/app";
//import "firebase/analytics";
import "firebase/auth";
import  firebaseConfig  from './firebaseConfig'
import { useHistory, useLocation } from 'react-router-dom'


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function Login() {

    const provider = new firebase.auth.GoogleAuthProvider();
    const { createUser } = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const loginevent = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user
                const signedInUser = {
                    name: displayName,
                    email: email
                }
                createUser(signedInUser);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={loginevent}>Login</button>
        </div>
    )
}
