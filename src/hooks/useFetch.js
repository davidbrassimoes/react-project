import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch(url, params) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        setIsLoading(true);
        api.get(url, { params })
            .then(res => setData(res.data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        data,
        error
    };
}