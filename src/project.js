export default function createProject(name) {
    const tasks = [];
    let projectName = name;

    return {
        get name() {
            return projectName;
        },

        set name(title) {
            projectName = title;
        },

        get tasks() {
            return tasks;
        },

        addTask(task) {
            tasks.push(task);
            this.sortTasks();
        },

        deleteTask(index) {
            tasks.splice(index, 1);
            this.sortTasks();
        },

        sortTasks() {
            tasks.sort((a, b) => {
                const date1 = new Date(a.deadline);
                const date2 = new Date(b.deadline);

                return date1 - date2;
            });
        },
    };
}
