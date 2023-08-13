import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const useData = (colectionName) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
               const db = getFirestore()
                const querySnapshot = await getDocs(collection(db, colectionName))
                const newData = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))

                setData(newData);
                setLoading(false);
            } 
            catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchData();
    }, [colectionName])

    return {data, error, loading};
}

export default useData;