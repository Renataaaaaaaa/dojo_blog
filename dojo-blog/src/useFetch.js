import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(()=>{
        setTimeout(() => {
            fetch(url) //async
                .then((res)=>{
                    if (!res.ok){
                        throw Error("Something bad happened")
                    }
                    // console.log(res);
                    // console.log(res.json());
                    return res.json(); //Question? what's this
                })
                .then((data)=>{
                    setData(data);
                    setIsPending(false);
                    setIsError(null);
                })
                .catch((e) => {
                    setIsError(e.message);
                    setIsPending(false);
                });
        }, 1000);

    }, [])
    return {data, isPending, isError};
}

export default useFetch;