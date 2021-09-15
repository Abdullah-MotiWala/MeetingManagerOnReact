import React, { useState } from 'react';
import { useEffect } from 'react';
import reactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app, db } from './Firebase';
import { doc, setDoc } from "firebase/firestore";
import { onSnapshot, collection } from 'firebase/firestore';



export default function TeamBar(props) {
    const history = useHistory();
    const auth = getAuth();
    const [teamsArray, setTeamArray] = useState([]);
    const [teamsDB, setTeamDB] = useState([]);
    const createTeam = () => {
        let teamName = prompt("Enter Your Team Name")
        let randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, 0);
        let APITeamRoom = teamName + randomNum;
        setTeamArray([...teamsArray, teamName]);
        setDoc(doc(db, "teams", teamName), {
        });
    }
    useEffect(() => {
        onSnapshot(collection(db, "teams"), (snapShot) => setTeamDB(snapShot.docs.map((doc) => doc.id))
        )
    })



    const signingOut = () => {
        signOut(auth).then(() => {
            history.push("/")
        }).catch((error) => {
            alert("An error happened.")
        });
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setDoc(doc(db, "users", uid), {
                email: user.email,
                userTeams: teamsArray
            });
            // ...
        } else {
            // User is signed out
            // ...
        }
    });



    return (
        <>
            <div className="headerComp">
                <p className="usersName">{props.userName}</p>
                <p className="usersStatus">{props.userRole}</p>
                <FontAwesomeIcon icon={faSignOutAlt} color="#000" onClick={signingOut} className="icon" />
            </div>

            <div className="adminBody">
                {
                    teamsArray.map((team) => {
                        return <Link to="ChatBox" className="divToAdd" >{team}</Link>
                    })
                }
            </div>

            <div className="bottomOfAdm">
                <FontAwesomeIcon icon={faPlus} color="#fff" size="2x" onClick={createTeam} className="icon" />
            </div>
        </>
    )
}
