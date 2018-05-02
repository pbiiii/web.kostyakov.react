export const removeTask = (tasksList, taskToDelete) => {
    let match;
    match = tasksList.findIndex((task) => {
        return task.id === taskToDelete.id
    })
    if(match >= 0) {
        tasksList.splice(match, 1)
    }
    return [].concat(tasksList);
}