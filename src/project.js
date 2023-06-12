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
        },
    };
}
