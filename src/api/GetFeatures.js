import {collection, getDocs, query, orderBy, limit, where, startAfter} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/features";
export const getFeatures = async () => {

    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref)
    const doc_refs = await getDocs(q);

    const featuresList = []

    doc_refs.forEach(featur => {
        featuresList.push({
            id: featur.id,
            ...featur.data()
        })
    })
    return featuresList
}