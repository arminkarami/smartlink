import {collection, getDocs, query, orderBy, limit, where, startAfter} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/teams";
export const getTeams = async () => {

    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref)
    const doc_refs = await getDocs(q);

    const teamsList = []
    let index=0;

    doc_refs.forEach(team => {
        teamsList.push({
            id: team.id,
            index:index,
            ...team.data()
        })
        index++;
    })
    return teamsList
}