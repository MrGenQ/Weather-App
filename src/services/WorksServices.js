import firebase from "../firebaseConfig"


export const getAllCities=(onGetCities)=>{
firebase
    .firestore()
    .collection('city')
    .onSnapshot((snapshot)=>{
        const allCities = snapshot.docs.map((doc)=>({
            id:doc.id,
                ...doc.data()
        }))
        onGetCities(allCities)
    })
}

export const addCity=(data)=>{
    firebase
        .firestore()
        .collection('city')
        .add(data)
}