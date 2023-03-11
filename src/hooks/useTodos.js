import { useEffect, useState } from "react"
import axios from "axios";
function useTodos() {
    const [todos, setTodos] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [dataGetError, setDataGetError] = useState(false);
    const [dataRefetch, setDataRefetch] = useState(false);



    function makeDataRefetch() {
        setDataRefetch((prev) => !prev)
        setDataLoading(true)
    }



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => setTodos(res.data))
            .catch(err => setDataGetError(true))
            .finally(() => setTimeout(() => setDataLoading(false), 1000))

    }, [dataRefetch])

    return {
        todos,
        todosLoading: dataLoading,
        todosError: dataGetError,
        todosRefetch: makeDataRefetch
    }
}

export default useTodos