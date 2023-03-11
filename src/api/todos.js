import axios from "axios";

export async function getAllTodos() {
    const allTodos = [];
    allTodos = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return allTodos;
}