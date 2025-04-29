
import React, { useState, useEffect } from 'react'; // Correct import of useState and useEffect

const fetchApi = (from, to) => {

    const [data, setData] = useState({}); // Correct usage of useState

    useEffect(() => { // Correct usage of useEffect
        if (from)
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res[from])
                    setData(res[from])
                })
    }, [from, to])


    return data;
}

export default fetchApi