import { CURRENT_TASKS } from "../Constansts/Constants";

export function createTask(values) {
    let tasks = [...CURRENT_TASKS]
    tasks.push(values)
    localStorage.setItem("myTasks", JSON.stringify(tasks))
    window.location.href = "/mytasks"
}
export function editTask(id, values) {
    let tasks = [...CURRENT_TASKS]
    console.log('values', values)
    console.log('id', id)
    let index = tasks.findIndex(ele => {
        return ele.id === Number(id)
    })
    tasks.splice(index, 1, values)
    localStorage.setItem("myTasks", JSON.stringify(tasks))
    window.location.href = "/mytasks"
}
export function deleteTask(id) {
    let tasks = [...CURRENT_TASKS]
    let afterDeletion = tasks.filter(ele => ele.id !== id)
    localStorage.setItem("myTasks", JSON.stringify(afterDeletion))
    window.location.href = "/mytasks"

}
export function deleteAll() {
    localStorage.removeItem("myTasks")
    window.location.href = "/mytasks"
}

export function findTask(id) {
    let tasks = [...CURRENT_TASKS]
    let found = tasks.find(ele => ele.id === Number(id))
    return found

}
