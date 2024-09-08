import { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: url,
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzNkNmMwMWJkODY0ZTU5MDRlNWE4MmI4MWMyZjBhMiIsIm5iZiI6MTcyNTU0NDExNi42OTUwNTgsInN1YiI6IjY2ZDRiNmI1MGY4OGE0NGJmOWNiNTgwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cBi4-TRFVx016rBBNZ_DPrBXMwtrlen5LZblSREuGxQ'
        }
      };

    const getData = async () => {
        try{
            const {data: response} = await axios.request(url)
            setData(response);
            setLoading(false);
        } catch(err){
            setError(err.message)
        }
    }

    useEffect(() => {
        getData()
    },[])

    return{data, loading, error};
}


export default useFetch;