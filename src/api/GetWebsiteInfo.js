import {doc, getDoc, query} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo";
export const getWebsiteInfo = async () => {

    const collection_ref = doc(myFirebase(), collection_name);
    const q = query(collection_ref)
    const doc_refs = await getDoc(q);
    return [doc_refs.data()]

}