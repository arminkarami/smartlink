import {collection, getDocs, query, orderBy, limit, where, startAfter} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/posts";
export const getPosts = async () => {
    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref, orderBy("index"))
    const doc_refs = await getDocs(q);

    const postList = []

    doc_refs.forEach(post => {
        postList.push({
            id: post.id,
            ...post.data()
        })
    })
    return postList
}