export default function createTask(name, date, priority) {
    let taskName = name;
    let taskDueDate = date;
    let taskPriority = priority;

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
    };
}
