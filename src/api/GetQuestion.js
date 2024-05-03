import {collection, getDocs, query} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/questions ";
export const getQuestion= async () => {

    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref)
    const doc_refs = await getDocs(q);
    const questionList = []
    console.log("doc_refs")
    console.log(doc_refs)

    doc_refs.forEach(question => {
        questionList.push({
            id: question.id,
            ...question.data()
        })
    })
    return questionList
}