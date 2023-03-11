import { useQuery, useQueryClient } from "react-query"
import { getAllTodos } from "../api/todos"
function Todos() {
    // Access the client
    const queryClient = useQueryClient()

    const query = useQuery('todos', getAllTodos);
    const { data, status } = query;


    // if (!data) {
    //     return 'Pas de data'
    // }
    return (
        <div>
            <ul>
                {data.data.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default Todos;