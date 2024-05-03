import {collection, getDocs, query, orderBy, limit, where, startAfter} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/services";
export const getServicesPosts = async () => {
    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref)
    const doc_refs = await getDocs(q);
    const servicesPostsList = []
    let index = 0;
    for (const s of doc_refs.docs) {
        const featuresCollection = `/website/websiteInfo/services/${s.id}/features`;
        const featuresCollection_ref = collection(myFirebase(), featuresCollection);
        const q2 = query(featuresCollection_ref)
        const doc_refs2 = await getDocs(q2);
        const featuresList = []
        doc_refs2.forEach(f => {
            featuresList.push({
                id: f.id,
                ...f.data(),})
        })
        servicesPostsList.push({
            id: s.id,
            index: index,
            ...s.data(),
            features: featuresList,
        })
        console.log(featuresList)
        index++;
    }
    return servicesPostsList
}