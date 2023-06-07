import createProject from "./project";

export default function renderApp() {
    const projects = [];

    function addProject(name) {
        projects.unshift(createProject(name));
    }

    function renderHome() {
        const main = document.querySelector("body");
        main.innerHTML += `<div id="container">
        <div id="side-bar">
            <div id="primary-buttons">
                <button class="side-bar-button" data-type="inbox">
                    Inbox</button
                ><button class="side-bar-button" data-type="thisWeek">
                    Next 7 Days</button
                ><button class="side-bar-button" data-type="upcoming">
                    Upcoming
                </button>
            </div>
            <div id="projects-container">
                <div id="task-header">
                    <h2>Projects</h2>
                    <button id="create-project">+</button>
                    <input type="text" id="project-name-input" />
                </div>
                <div id="show-projects"></div>
            </div>
        </div>
        <div id="content">
        </div>
    </div>`;

        bindEvents();
    }

    function bindEvents() {
        const primaryButtons = document.querySelectorAll(".side-bar-button");
        primaryButtons.forEach((element) => {
            element.addEventListener("click", () => {});
        });

        const addProjectBtn = document.getElementById("create-project");
        const projectNameInput = document.getElementById("project-name-input");
        addProjectBtn.addEventListener("click", () => {
            if (projectNameInput.value === "") return;
            addProject(projectNameInput.value);
            projectNameInput.value = "";
            renderProjects();
        });

        renderMain();
    }

    function renderProjects() {
        const projectContainer = document.getElementById("show-projects");
        projectContainer.innerHTML = "";
        let accumulator = 0;
        projects.forEach((project) => {
            projectContainer.innerHTML += `<div class="project-card" data-value=${accumulator}>${project.name}</div>`;
            accumulator += 1;
        });
    }

    function renderMain() {
        const taskContainer = document.querySelector("#content");
        const projectContainer = document.getElementById("show-projects");
        projectContainer.addEventListener("click", (e) => {
            if (e.target && e.target.matches("div.project-card")) {
                taskContainer.innerHTML = `<h2 id="list-header">${
                    projects[e.target.dataset.value].name
                }</h2>
        <button id="create-task">+ Add Task</button>
        <div id="render-tasks"></div>`;
            }
        });
    }

    return {
        init() {
            renderHome();
        },
    };
}
