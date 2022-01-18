import firebase from "firebase"
import {app}  from "../firebaseConfig"

const auth = app.auth();
const db = app.firestore()

export {
    auth,
    db
}