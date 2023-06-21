import createProject from "./project";
import createTask from "./task";
import "./style.scss";

export default function renderApp() {
    const currentProjects = [];
    currentProjects.push(createProject("Inbox"));
    currentProjects.push(createProject("Today"));
    currentProjects.push(createProject("Upcoming"));

    function addProject(name) {
        currentProjects.push(createProject(name));
    }

    function renderHome() {
        const main = document.querySelector("body");
        main.innerHTML = ` <div id="container">
        <div id="side-bar">
            <div id="primary-buttons">
                <button class="side-bar-button" data-value="0">
                    Inbox</button
                ><button class="side-bar-button" data-value="1">
                    Next 7 Days</button
                ><button class="side-bar-button" data-value="2">
                    Upcoming
                </button>
            </div>
            <div id="projects-container">
                <div id="task-header">
                    <h2>Projects</h2>
                    <button id="create-project">+</button>
                    <div id="input-project" class="hide">
                        <input type="text" id="project-name-input" />
                        <button id="add-project">✓</button
                        ><button id="cancel-input">X</button>
                    </div>
                </div>
                <div id="show-projects">
                    <div class="project-card"></div>
                </div>
            </div>
        </div>
        <div id="content">
        </div>
    </div>`;

        bindEvents();
    }

    function bindEvents() {
        handlePrimaryButtonsClick();
        displayProjectInput();
        handleProjectButtonsClick();
    }

    function handlePrimaryButtonsClick() {
        const primaryButtons = document.querySelectorAll(".side-bar-button");
        primaryButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                renderPrimaryTasks(e);
            });
        });
    }

    function renderPrimaryTasks(e) {
        const taskPage = document.querySelector("#content");
        taskPage.innerHTML = "";

        if (e.target.dataset.value === "1" || e.target.dataset.value === "2") {
            const listHeader = document.createElement("h2");
            listHeader.id = "list-header";
            listHeader.textContent =
                currentProjects[e.target.dataset.value].name;
            taskPage.appendChild(listHeader);

            const renderTasksContainer = document.createElement("div");
            renderTasksContainer.id = "render-tasks";
            taskPage.appendChild(renderTasksContainer);

            renderTasks(e.target.dataset.value);
            return;
        }

        // Create <h2> element
        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = currentProjects[e.target.dataset.value].name;
        taskPage.appendChild(listHeader);

        // Create <form> element
        const taskInputForm = document.createElement("form");
        taskInputForm.action = "";
        taskInputForm.id = "task-input-form";
        taskPage.appendChild(taskInputForm);

        // Create task name input
        const taskNameInput = document.createElement("input");
        taskNameInput.type = "text";
        taskNameInput.id = "task-name-input";
        taskInputForm.appendChild(taskNameInput);

        // Create task date input
        const taskDateInput = document.createElement("input");
        taskDateInput.type = "date";
        taskInputForm.appendChild(taskDateInput);

        // Create priority select
        const prioritySelect = document.createElement("select");
        taskInputForm.appendChild(prioritySelect);

        // Create select options
        const selectOptions = [
            {
                value: "default",
                text: "--Select Priority--",
                selected: true,
                disabled: true,
            },
            { value: "low", text: "Low" },
            { value: "medium", text: "Medium" },
            { value: "high", text: "High" },
        ];

        selectOptions.forEach((option) => {
            const selectOption = document.createElement("option");
            selectOption.value = option.value;
            selectOption.textContent = option.text;
            selectOption.selected = option.selected;
            selectOption.disabled = option.disabled;
            prioritySelect.appendChild(selectOption);
        });

        const submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.id = "add-task-button";
        submitButton.value = " + Add Task";
        taskInputForm.appendChild(submitButton);

        // Create <div> for rendering tasks
        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        taskInputForm.addEventListener("submit", (inputEvent) => {
            inputEvent.preventDefault();
            const taskName = taskNameInput.value;
            const taskDate = taskDateInput.value;
            const taskPriority = prioritySelect.value;

            const taskObject = createTask(taskName, taskDate, taskPriority);

            currentProjects[e.target.dataset.value].addTask(taskObject);
            renderTasks(e.target.dataset.value);
            taskInputForm.reset();
            prioritySelect.value = "default";
        });

        renderTasks(e.target.dataset.value);
    }

    function displayProjectInput() {
        const showProjectInput = document.getElementById("create-project");
        const projectNameInput = document.getElementById("project-name-input");
        const addProjectBtn = document.getElementById("add-project");
        const cancelBtn = document.getElementById("cancel-input");
        const inputContainer = document.getElementById("input-project");

        [showProjectInput, cancelBtn, addProjectBtn].forEach((element) => {
            element.addEventListener("click", () => {
                projectNameInput.textContent = "";
                inputContainer.classList.toggle("hide");
            });
        });

        addProjectBtn.addEventListener("click", () => {
            if (projectNameInput.value === "") return;
            addProject(projectNameInput.value);
            projectNameInput.value = "";
            renderProjects();
        });

        projectNameInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                addProjectBtn.click();
            }
        });
    }

    function renderProjects() {
        const projectContainer = document.getElementById("show-projects");
        projectContainer.innerHTML = "";
        let accumulator = 3;
        currentProjects.slice(3).forEach((project) => {
            projectContainer.innerHTML += `<div class="project-card" data-value="${accumulator}">
            <p>${project.name}</p>
            <button class="edit-button">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.5 7.5L5.92819 14.0718C5.71566 14.2843 5.60939 14.3906 5.53953 14.5212C5.46966 14.6517 5.44019 14.7991 5.38124 15.0938L4.64709 18.7646C4.58057 19.0972 4.5473 19.2635 4.64191 19.3581C4.73652 19.4527 4.90283 19.4194 5.23544 19.3529L8.90621 18.6188C9.20093 18.5598 9.3483 18.5303 9.47885 18.4605C9.60939 18.3906 9.71566 18.2843 9.92819 18.0718L16.5 11.5L12.5 7.5Z"
                        fill="#7E869E"
                        fill-opacity="0.25"
                    />
                    <path
                        d="M5.95396 19.38L5.95397 19.38L5.9801 19.3734L5.98012 19.3734L8.60809 18.7164C8.62428 18.7124 8.64043 18.7084 8.65654 18.7044C8.87531 18.65 9.08562 18.5978 9.27707 18.4894C9.46852 18.381 9.62153 18.2275 9.7807 18.0679C9.79242 18.0561 9.80418 18.0444 9.81598 18.0325L17.0101 10.8385L17.0101 10.8385L17.0369 10.8117C17.3472 10.5014 17.6215 10.2272 17.8128 9.97638C18.0202 9.70457 18.1858 9.39104 18.1858 9C18.1858 8.60896 18.0202 8.29543 17.8128 8.02361C17.6215 7.77285 17.3472 7.49863 17.0369 7.18835L17.01 7.16152L16.8385 6.98995L16.8117 6.96314C16.5014 6.6528 16.2272 6.37853 15.9764 6.1872C15.7046 5.97981 15.391 5.81421 15 5.81421C14.609 5.81421 14.2954 5.97981 14.0236 6.1872C13.7729 6.37853 13.4986 6.65278 13.1884 6.96311L13.1615 6.98995L5.96745 14.184C5.95565 14.1958 5.94386 14.2076 5.93211 14.2193C5.77249 14.3785 5.61904 14.5315 5.51064 14.7229C5.40225 14.9144 5.34999 15.1247 5.29562 15.3435C5.29162 15.3596 5.28761 15.3757 5.28356 15.3919L4.62003 18.046C4.61762 18.0557 4.61518 18.0654 4.61272 18.0752C4.57411 18.2293 4.53044 18.4035 4.51593 18.5518C4.49978 18.7169 4.50127 19.0162 4.74255 19.2574C4.98383 19.4987 5.28307 19.5002 5.44819 19.4841C5.59646 19.4696 5.77072 19.4259 5.92479 19.3873C5.9346 19.3848 5.94433 19.3824 5.95396 19.38Z"
                        stroke="#33363F"
                        stroke-width="1.2"
                    />
                    <path
                        d="M12.5 7.5L16.5 11.5"
                        stroke="#33363F"
                        stroke-width="1.2"
                    />
                </svg>
            </button>
            <button class="delete-project">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6L6 18"
                                        stroke="#33363F"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6 6L18 18"
                                        stroke="#33363F"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
        </div>`;
            accumulator += 1;
        });
        handleEditButton();
        handleDeleteButton();
    }

    function handleEditButton() {
        const projectContainer = document.getElementById("show-projects");
        projectContainer.addEventListener("click", (e) => {
            if (e.target.closest("div.project-card button.edit-button")) {
                const projectCard = e.target.closest(".project-card");
                const projectNameInput = document.createElement("input");
                projectNameInput.type = "text";
                projectNameInput.name = "project-name-input";
                projectNameInput.value =
                    currentProjects[projectCard.dataset.value].name;

                const saveButton = document.createElement("button");
                saveButton.className = "edit-project-name";
                saveButton.innerText = "✓";

                saveButton.addEventListener("click", () => {
                    const updatedProjectName = projectNameInput.value;
                    // Perform the desired action with the updated project name, such as saving it to a database or updating the UI.
                    currentProjects[projectCard.dataset.value].name =
                        updatedProjectName;
                    renderProjects();
                });

                projectCard.innerHTML = ""; // Clear existing content
                projectCard.appendChild(projectNameInput);
                projectCard.appendChild(saveButton);
            }
        });
    }

    function handleDeleteButton() {
        const projectContainer = document.getElementById("show-projects");
        projectContainer.addEventListener("click", (e) => {
            if (e.target && e.target.closest("button.delete-project")) {
                const index =
                    e.target.closest("div.project-card").dataset.value;
                currentProjects.splice(index, 1);
                renderProjects();
            }
        });
    }

    function handleProjectButtonsClick() {
        const taskPage = document.querySelector("#content");
        const projectContainer = document.getElementById("show-projects");
        projectContainer.addEventListener("click", (e) => {
            if (e.target && e.target.matches("div.project-card")) {
                taskPage.innerHTML = "";

                // Create <h2> element
                const listHeader = document.createElement("h2");
                listHeader.id = "list-header";
                listHeader.textContent =
                    currentProjects[e.target.dataset.value].name;
                taskPage.appendChild(listHeader);

                // Create <form> element
                const taskInputForm = document.createElement("form");
                taskInputForm.action = "";
                taskInputForm.id = "task-input-form";
                taskPage.appendChild(taskInputForm);

                // Create task name input
                const taskNameInput = document.createElement("input");
                taskNameInput.type = "text";
                taskNameInput.id = "task-name-input";
                taskInputForm.appendChild(taskNameInput);

                // Create task date input
                const taskDateInput = document.createElement("input");
                taskDateInput.type = "date";
                taskInputForm.appendChild(taskDateInput);

                // Create priority select
                const prioritySelect = document.createElement("select");
                taskInputForm.appendChild(prioritySelect);

                // Create select options
                const selectOptions = [
                    {
                        value: "default",
                        text: "--Select Priority--",
                        selected: true,
                        disabled: true,
                    },
                    { value: "low", text: "Low" },
                    { value: "medium", text: "Medium" },
                    { value: "high", text: "High" },
                ];

                selectOptions.forEach((option) => {
                    const selectOption = document.createElement("option");
                    selectOption.value = option.value;
                    selectOption.textContent = option.text;
                    selectOption.selected = option.selected;
                    selectOption.disabled = option.disabled;
                    prioritySelect.appendChild(selectOption);
                });

                const submitButton = document.createElement("input");
                submitButton.type = "submit";
                submitButton.id = "add-task-button";
                submitButton.value = " + Add Task";
                taskInputForm.appendChild(submitButton);

                // Create <div> for rendering tasks
                const renderTasksContainer = document.createElement("div");
                renderTasksContainer.id = "render-tasks";
                taskPage.appendChild(renderTasksContainer);

                taskInputForm.addEventListener("submit", (inputEvent) => {
                    inputEvent.preventDefault();
                    const taskName = taskNameInput.value;
                    const taskDate = taskDateInput.value;
                    const taskPriority = prioritySelect.value;

                    const taskObject = createTask(
                        taskName,
                        taskDate,
                        taskPriority
                    );

                    currentProjects[e.target.dataset.value].addTask(taskObject);
                    renderTasks(e.target.dataset.value);
                    taskInputForm.reset();
                    prioritySelect.value = "default";
                });

                renderTasks(e.target.dataset.value);
            }
        });
    }

    function renderTasks(index) {
        const taskContainer = document.getElementById("render-tasks");
        const tasksArr = currentProjects[index].tasks;
        taskContainer.innerHTML = "";
        let accumulator = 0;

        tasksArr.forEach((task) => {
            const taskCard = document.createElement("div");
            taskCard.className = "task-card";
            taskCard.dataset.value = accumulator;

            const statusCheckbox = document.createElement("input");
            statusCheckbox.type = "checkbox";
            statusCheckbox.name = "status-checkbox";
            taskCard.appendChild(statusCheckbox);

            const taskName = document.createElement("p");
            taskName.className = "task-name";
            taskName.textContent = task.name;
            taskCard.appendChild(taskName);

            const taskDate = document.createElement("p");
            taskDate.className = "task-date";
            taskDate.textContent = task.deadline;
            taskCard.appendChild(taskDate);

            const manageTaskControls = document.createElement("div");
            manageTaskControls.className = "manage-task-controls";
            taskCard.appendChild(manageTaskControls);

            const taskEditButton = document.createElement("button");
            taskEditButton.className = "task-edit-button";
            taskEditButton.innerHTML = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67152 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27311L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87627 11.7269 8.27311Z"
                fill="#222222"
            />
        </svg>`;
            manageTaskControls.appendChild(taskEditButton);

            const taskDeleteButton = document.createElement("button");
            taskDeleteButton.className = "task-delete-button";
            taskDeleteButton.innerHTML = `<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z"
                fill="#222222"
            />
        </svg>`;
            manageTaskControls.appendChild(taskDeleteButton);

            taskContainer.append(taskCard);
            accumulator += 1;

            handleTaskDeleteButton(index);
            handleTaskEditButton(index);
        });
    }

    function handleTaskDeleteButton(index) {
        const taskContainer = document.getElementById("render-tasks");
        taskContainer.addEventListener("click", (e) => {
            if (e.target && e.target.closest("button.task-delete-button")) {
                const taskIndex =
                    e.target.closest("div.task-card").dataset.value;
                currentProjects[index].deleteTask(taskIndex);
                renderTasks(index);
            }
        });
    }

    function handleTaskEditButton(index) {
        const taskContainer = document.getElementById("render-tasks");
        taskContainer.addEventListener("click", (e) => {
            if (
                e.target &&
                e.target.closest("div.task-card button.task-edit-button")
            ) {
                const taskDetailsCard = e.target.closest(
                    " div#render-tasks div.task-card"
                );
                const taskIndex = taskDetailsCard.dataset.value;
                taskDetailsCard.innerHTML = "";
                console.log(currentProjects[index].tasks[taskIndex].priority);

                const newTaskForm = document.createElement("form");
                newTaskForm.action = "";
                newTaskForm.className = "newTaskDataInput";

                const taskNameInput = document.createElement("input");
                taskNameInput.type = "text";
                taskNameInput.className = "new-task-name-input";
                taskNameInput.value =
                    currentProjects[index].tasks[taskIndex].name;
                newTaskForm.appendChild(taskNameInput);

                const taskDateInput = document.createElement("input");
                taskDateInput.type = "date";
                taskDateInput.name = "newDateInput";
                taskDateInput.className = "new-task-date-input";
                taskDateInput.value =
                    currentProjects[index].tasks[taskIndex].deadline;
                newTaskForm.appendChild(taskDateInput);

                const taskPriorityInput = document.createElement("select");
                taskPriorityInput.name = "newPriorityInput";
                taskPriorityInput.className = "new-task-priority-input";
                taskPriorityInput.value =
                    currentProjects[index].tasks[taskIndex].priority;

                console.log(taskPriorityInput.value);

                const priorityOption2 = document.createElement("option");
                priorityOption2.value = "low";
                priorityOption2.textContent = "Low";
                taskPriorityInput.appendChild(priorityOption2);

                const priorityOption3 = document.createElement("option");
                priorityOption3.value = "medium";
                priorityOption3.textContent = "Medium";
                taskPriorityInput.appendChild(priorityOption3);

                const priorityOption4 = document.createElement("option");
                priorityOption4.value = "high";
                priorityOption4.textContent = "High";
                taskPriorityInput.appendChild(priorityOption4);

                newTaskForm.appendChild(taskPriorityInput);

                const submitButton = document.createElement("input");
                submitButton.type = "submit";
                submitButton.value = "Save";
                newTaskForm.appendChild(submitButton);

                taskDetailsCard.appendChild(newTaskForm);
                console.log(currentProjects[index].tasks[taskIndex].priority);

                newTaskForm.addEventListener("submit", () => {
                    currentProjects[index].tasks[taskIndex].name =
                        taskNameInput.value;
                    currentProjects[index].tasks[taskIndex].deadline =
                        taskDateInput.value;
                    currentProjects[index].tasks[taskIndex].priority =
                        taskPriorityInput.value;

                    currentProjects[index].sortTasks();
                    renderTasks(index);
                });
            }
        });
    }

    return {
        init() {
            renderHome();
        },
    };
}
