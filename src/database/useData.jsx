import { useEffect, useState } from "react";

const useData = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        const callMock = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
        }

        const fetchData = async () => {
            try {
                await callMock();
                setData(mock);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return {data, error, loading};
}

export default useData;