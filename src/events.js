import {
    renderProjects,
    renderTasks,
    renderInbox,
    renderUpcoming,
    renderTodayTask,
    renderCompleted,
} from "./render";

import createTask from "./task";
import { currentProjects, createProject } from "./project";

function handlePrimaryButtonsClick() {
    const primaryButtons = document.querySelectorAll(".side-bar-button");
    primaryButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.dataset.value === "0") {
                renderInbox();
            }

            if (e.target.dataset.type === "today") {
                renderTodayTask();
            }

            if (e.target.dataset.type === "upcoming") {
                renderUpcoming();
            }

            if (e.target.dataset.type === "completed") {
                renderCompleted();
            }
        });
    });
}

function handleProjectButtonsClick() {
    const taskPage = document.querySelector("#content");
    const projectContainer = document.getElementById("show-projects");
    projectContainer.addEventListener("click", (e) => {
        if (e.target.closest("div.project-card")) {
            if (currentProjects.length === 1) {
                taskPage.innerHTML = "";
                return;
            }
            taskPage.innerHTML = "";
            const projectCard = e.target.closest("div.project-card");

            // Create <h2> element
            const listHeader = document.createElement("h2");
            listHeader.id = "list-header";
            listHeader.textContent =
                currentProjects[projectCard.dataset.value].name;
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
            taskNameInput.setAttribute("required", "");
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
                    projectCard.dataset.value,
                    taskName,
                    taskDate,
                    taskPriority
                );

                currentProjects[projectCard.dataset.value].tasks.push(
                    taskObject
                );
                currentProjects[projectCard.dataset.value].tasks.sort(
                    (a, b) => {
                        const date1 = new Date(a.deadline);
                        const date2 = new Date(b.deadline);

                        return date1 - date2;
                    }
                );

                localStorage.setItem(
                    "projectsList",
                    JSON.stringify(currentProjects)
                );

                renderTasks(projectCard.dataset.value);
                taskInputForm.reset();
                prioritySelect.value = "default";
            });

            renderTasks(projectCard.dataset.value);
        }
    });
}

function displayProjectInput() {
    const taskHeader = document.getElementById("task-header");

    taskHeader.addEventListener("click", (e) => {
        if (e.target && e.target.matches("button#create-project")) {
            taskHeader.innerHTML = "";
            const inputProject = document.createElement("div");
            inputProject.id = "input-project";

            const projectNameInput = document.createElement("input");
            projectNameInput.type = "text";
            projectNameInput.id = "project-name-input";

            const addProjectButton = document.createElement("button");
            addProjectButton.id = "add-project";
            addProjectButton.textContent = "✓";

            const cancelInputButton = document.createElement("button");
            cancelInputButton.id = "cancel-input";
            cancelInputButton.textContent = "X";

            [addProjectButton, cancelInputButton].forEach((button) => {
                button.addEventListener("click", () => {
                    taskHeader.innerHTML = "";
                    taskHeader.id = "task-header";

                    const taskHeaderTitle = document.createElement("h2");
                    taskHeaderTitle.textContent = "Projects";

                    const createProjectButton =
                        document.createElement("button");
                    createProjectButton.id = "create-project";
                    createProjectButton.textContent = "+";

                    taskHeader.appendChild(taskHeaderTitle);
                    taskHeader.appendChild(createProjectButton);
                });
            });

            addProjectButton.addEventListener("click", () => {
                if (projectNameInput.value === "") return;
                addProject(projectNameInput.value);
                projectNameInput.value = "";
                renderProjects();
            });

            projectNameInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    addProjectButton.click();
                }
            });

            inputProject.appendChild(projectNameInput);
            inputProject.appendChild(addProjectButton);
            inputProject.appendChild(cancelInputButton);
            taskHeader.appendChild(inputProject);
        }
    });
}

function addProject(name) {
    currentProjects.push(createProject(name));
    localStorage.setItem("projectsList", JSON.stringify(currentProjects));
}

function checkActiveTile() {
    const sideBar = document.getElementById("side-bar");
    sideBar.addEventListener("click", (e) => {
        if (e.target && e.target.matches("button.side-bar-button")) {
            const projectCards = document.querySelectorAll(".project-card");
            const sideBarButtons =
                document.querySelectorAll(".side-bar-button");

            projectCards.forEach((card) => {
                card.classList.remove("activeTile");
            });

            sideBarButtons.forEach((button) => {
                button.classList.remove("activeTile");
            });

            e.target.classList.add("activeTile");
        }

        if (e.target && e.target.closest("div.project-card")) {
            const projectCards = document.querySelectorAll(".project-card");
            const sideBarButtons =
                document.querySelectorAll(".side-bar-button");

            projectCards.forEach((card) => {
                card.classList.remove("activeTile");
            });

            sideBarButtons.forEach((button) => {
                button.classList.remove("activeTile");
            });

            e.target.closest("div.project-card").classList.add("activeTile");
        }
    });
}

export {
    handlePrimaryButtonsClick,
    handleProjectButtonsClick,
    displayProjectInput,
    checkActiveTile,
};
