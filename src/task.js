export default function createTask(projNumber, name, date, priority) {
    let taskName = name;
    let taskDueDate = date;
    let taskPriority = priority;
    let completed = false;

    return {
        get name() {
            return taskName;
        },

        set name(newName) {
            taskName = newName;
        },

        get priority() {
            return taskPriority;
        },

        set priority(newPriority) {
            taskPriority = newPriority;
        },

        get deadline() {
            return taskDueDate;
        },

        set deadline(newDate) {
            taskDueDate = newDate;
        },

        set completed(status) {
            completed = status;
        },

        get completed() {
            return completed;
        },

        get projNum() {
            return projNumber;
        },
    };
}
