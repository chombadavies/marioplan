import ProjectSummery from "../projects/ProjectSummery";

export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'david',
            authorLastName: 'muriuki',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({type :"CREATE_PROJECT",project})  
        }).then((err) => {
           dispatch({type:"CREATE_PROJECT_ERROR", err}) 
        })
     
    }
}