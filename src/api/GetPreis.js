import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/prices";
export const getPreis = async () => {

    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref,orderBy("title"))
    const doc_refs = await getDocs(q);

    const preisList = []

    doc_refs.forEach(preis => {
        preisList.push({
            id: preis.id,
            ...preis.data()
        })
    })
    return preisList
}