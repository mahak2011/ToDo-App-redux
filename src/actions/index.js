export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: todo
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DEL_TODO",
        id
    }
}
export const clearTodos = () => {
    return {
        type: "REMOVE_ALL"
    }
}
