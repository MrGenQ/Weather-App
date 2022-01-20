import firebase from "../firebaseConfig"


export const getAllCities=(onGetCities)=>{
firebase
    .firestore()
    .collection('cities')
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
        .collection('cities')
        .add(data)
}
export const deleteCity=(id)=>{
    firebase
        .firestore()
        .collection('cities')
        .doc(id)
        .delete()
    
    }