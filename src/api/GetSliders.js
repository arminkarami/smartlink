import {collection, getDocs, query, orderBy, limit, where, startAfter} from "firebase/firestore";
import {myFirebase} from "./Firebase";

const collection_name = "/website/websiteInfo/sliders";
export const getSlider = async () => {

    const collection_ref = collection(myFirebase(), collection_name);
    const q = query(collection_ref)

    const doc_refs = await getDocs(q);

    const sliderList = []
    let index=0;

    doc_refs.forEach(slider => {
        sliderList.push({
            id: slider.id,
            index : index,
            ...slider.data()
        })
        index++;
    })

    return sliderList
}