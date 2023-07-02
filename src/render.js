import { format, isFuture, parseISO } from "date-fns";
import createProject from "./project";
import createTask from "./task";
import "./style.scss";

export default function renderApp() {
    const currentProjects = [];
    currentProjects.push(createProject("Inbox"));

    function addProject(name) {
        currentProjects.push(createProject(name));
    }

    function renderHome() {
        const main = document.querySelector("body");

        const appTitle = document.createElement("header");
        appTitle.id = "app-title";

        const svgElement = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svgElement.setAttribute("width", "26");
        svgElement.setAttribute("height", "24");
        svgElement.setAttribute("viewBox", "0 0 26 24");
        svgElement.setAttribute("fill", "none");

        const path1 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path1.setAttribute(
            "d",
            "M17.5479 7.26651C18.2474 6.41162 18.1214 5.15157 17.2665 4.45212C16.4116 3.75266 15.1515 3.87866 14.4521 4.73355L6.66618 14.2497L4.2 12.4C3.31634 11.7373 2.06274 11.9164 1.4 12.8C0.737259 13.6837 0.916345 14.9373 1.8 15.6L5.03309 18.0248C6.31916 18.9894 8.13697 18.7688 9.15496 17.5246L17.5479 7.26651Z"
        );
        path1.setAttribute("stroke", "#222222");
        path1.setAttribute("stroke-width", "2");
        path1.setAttribute("stroke-linecap", "round");

        const mask = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "mask"
        );
        mask.setAttribute("id", "path-2-outside-1_1654_11454");
        mask.setAttribute("maskUnits", "userSpaceOnUse");
        mask.setAttribute("x", "8.86932");
        mask.setAttribute("y", "3");
        mask.setAttribute("width", "18");
        mask.setAttribute("height", "17");
        mask.setAttribute("fill", "black");

        const rect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
        );
        rect.setAttribute("fill", "white");
        rect.setAttribute("x", "8.86932");
        rect.setAttribute("y", "3");
        rect.setAttribute("width", "18");
        rect.setAttribute("height", "17");

        const path2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path2.setAttribute("fill-rule", "evenodd");
        path2.setAttribute("clip-rule", "evenodd");
        path2.setAttribute(
            "d",
            "M11.8693 16.5761L12.603 17.163C13.4588 17.8477 14.7062 17.716 15.4003 16.8678L23.774 6.63327C24.1237 6.20582 24.0607 5.5758 23.6332 5.22607C23.2058 4.87635 22.5758 4.93935 22.226 5.36679L13.8524 15.6013L13.1359 15.0281L11.8693 16.5761Z"
        );

        mask.appendChild(rect);
        mask.appendChild(path2);

        const path3 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path3.setAttribute(
            "d",
            "M12.603 17.163L11.3536 18.7248L11.3536 18.7248L12.603 17.163ZM11.8693 16.5761L10.3214 15.3096L9.04094 16.8747L10.6199 18.1379L11.8693 16.5761ZM15.4003 16.8678L13.8524 15.6013H13.8524L15.4003 16.8678ZM23.774 6.63327L22.226 5.36679V5.36679L23.774 6.63327ZM23.6332 5.22607L22.3668 6.77399L23.6332 5.22607ZM22.226 5.36679L20.6781 4.10032L22.226 5.36679ZM13.8524 15.6013L12.603 17.163L14.1476 18.3988L15.4003 16.8678L13.8524 15.6013ZM13.1359 15.0281L14.3853 13.4664L12.8406 12.2306L11.588 13.7616L13.1359 15.0281ZM13.8524 15.6013L13.1187 15.0144L10.6199 18.1379L11.3536 18.7248L13.8524 15.6013ZM13.8524 15.6013L13.8524 15.6013L11.3536 18.7248C13.0652 20.0941 15.5601 19.8308 16.9482 18.1342L13.8524 15.6013ZM22.226 5.36679L13.8524 15.6013L16.9482 18.1342L25.3219 7.89974L22.226 5.36679ZM22.3668 6.77399C21.9393 6.42426 21.8763 5.79424 22.226 5.36679L25.3219 7.89974C26.3711 6.61741 26.182 4.72734 24.8997 3.67816L22.3668 6.77399ZM23.774 6.63327C23.4242 7.06071 22.7942 7.12372 22.3668 6.77399L24.8997 3.67816C23.6174 2.62898 21.7273 2.81798 20.6781 4.10032L23.774 6.63327ZM15.4003 16.8678L23.774 6.63327L20.6781 4.10032L12.3044 14.3348L15.4003 16.8678ZM11.8865 16.5898L12.603 17.163L15.1017 14.0396L14.3853 13.4664L11.8865 16.5898ZM11.588 13.7616L10.3214 15.3096L13.4172 17.8426L14.6838 16.2946L11.588 13.7616Z"
        );
        path3.setAttribute("fill", "#222222");
        path3.setAttribute("mask", "url(#path-2-outside-1_1654_11454)");

        svgElement.appendChild(path1);
        svgElement.appendChild(mask);
        svgElement.appendChild(path3);

        appTitle.textContent = "Todo App";
        appTitle.appendChild(svgElement);

        const container = document.createElement("div");
        container.id = "container";

        const sideBar = document.createElement("div");
        sideBar.id = "side-bar";

        const primaryButtons = document.createElement("div");
        primaryButtons.id = "primary-buttons";

        const inboxButton = document.createElement("button");
        inboxButton.classList.add("side-bar-button");
        inboxButton.dataset.value = "0";

        inboxButton.textContent = "Inbox";
        inboxButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6376396cc3a86d32eae6f0ed-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><path class="cls-6376396cc3a86d32eae6f0ed-1" d="M21.38,10.28A3.82,3.82,0,0,1,22.5,13v7.63H14.86V13a3.82,3.82,0,0,1,6.52-2.7"></path><path class="cls-6376396cc3a86d32eae6f0ed-1" d="M18.68,9.16A3.82,3.82,0,0,0,14.86,13v7.63H1.5V13A3.82,3.82,0,0,1,5.32,9.16Z"></path><line class="cls-6376396cc3a86d32eae6f0ed-1" x1="6.27" y1="14.89" x2="10.09" y2="14.89"></line><line class="cls-6376396cc3a86d32eae6f0ed-1" x1="1.5" y1="1.52" x2="1.5" y2="16.8"></line><rect class="cls-6376396cc3a86d32eae6f0ed-1" x="1.5" y="1.52" width="4.77" height="3.82"></rect><polyline class="cls-6376396cc3a86d32eae6f0ed-1" points="11.04 23.48 11.04 20.61 14.86 20.61 14.86 23.48"></polyline></svg>`;

        const todayButton = document.createElement("button");
        todayButton.classList.add("side-bar-button");
        todayButton.dataset.type = "today";
        todayButton.textContent = "Today";
        todayButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-637b8b31f95e86b59c57a2a1-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="0.5" x2="12" y2="2.42"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="21.58" x2="12" y2="23.5"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="23.5" y1="12" x2="21.58" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="2.42" y1="12" x2="0.5" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="0.5" x2="12" y2="2.42"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="12" y1="21.58" x2="12" y2="23.5"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="23.5" y1="12" x2="21.58" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="2.42" y1="12" x2="0.5" y2="12"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="3.87" x2="18.78" y2="5.22"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="18.78" x2="3.87" y2="20.13"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="20.13" x2="18.78" y2="18.78"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="5.22" x2="3.87" y2="3.87"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="3.87" x2="18.78" y2="5.22"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="18.78" x2="3.87" y2="20.13"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="20.13" y1="20.13" x2="18.78" y2="18.78"></line><line class="cls-637b8b31f95e86b59c57a2a1-1" x1="5.22" y1="5.22" x2="3.87" y2="3.87"></line><circle class="cls-637b8b31f95e86b59c57a2a1-1" cx="12" cy="12" r="6.71"></circle></svg>`;

        const upcomingButton = document.createElement("button");
        upcomingButton.classList.add("side-bar-button");
        upcomingButton.dataset.type = "upcoming";
        upcomingButton.textContent = "Upcoming";
        upcomingButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6374f8d9b67f094e4896c61a-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><rect class="cls-6374f8d9b67f094e4896c61a-1" x="1.48" y="3.37" width="21.04" height="4.78"></rect><rect class="cls-6374f8d9b67f094e4896c61a-1" x="1.48" y="8.15" width="21.04" height="14.35"></rect><line class="cls-6374f8d9b67f094e4896c61a-1" x1="5.3" y1="12.93" x2="7.22" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="9.13" y1="12.93" x2="11.04" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="12.96" y1="12.93" x2="14.87" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="16.78" y1="12.93" x2="18.7" y2="12.93"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="16.78" y1="17.72" x2="18.7" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="5.3" y1="17.72" x2="7.22" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="9.13" y1="17.72" x2="11.04" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="12.96" y1="17.72" x2="14.87" y2="17.72"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="6.26" y1="0.5" x2="6.26" y2="5.28"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="12" y1="0.5" x2="12" y2="5.28"></line><line class="cls-6374f8d9b67f094e4896c61a-1" x1="17.74" y1="0.5" x2="17.74" y2="5.28"></line></svg>`;

        const completedButton = document.createElement("button");
        completedButton.classList.add("side-bar-button");
        completedButton.dataset.type = "completed";
        completedButton.textContent = "Completed";
        completedButton.innerHTML += `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6374f8d9b67f094e4896c625-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><path class="cls-6374f8d9b67f094e4896c625-1" d="M20.59,14.86V10.09A8.6,8.6,0,0,0,12,1.5h0a8.6,8.6,0,0,0-8.59,8.59v4.77L1.5,16.77v1.91h21V16.77Z"></path><path class="cls-6374f8d9b67f094e4896c625-1" d="M14.69,18.68a2.55,2.55,0,0,1,.17,1,2.86,2.86,0,0,1-5.72,0,2.55,2.55,0,0,1,.17-1"></path><polyline class="cls-6374f8d9b67f094e4896c625-1" points="14.7 8.34 10.57 12.48 8.34 10.25"></polyline></svg>`;

        primaryButtons.append(inboxButton);
        primaryButtons.append(todayButton);
        primaryButtons.append(upcomingButton);
        primaryButtons.append(completedButton);

        const projectsContainer = document.createElement("div");
        projectsContainer.id = "projects-container";

        const taskHeader = document.createElement("div");
        taskHeader.id = "task-header";

        const taskHeaderTitle = document.createElement("h2");
        taskHeaderTitle.textContent = "Projects";

        const createProjectButton = document.createElement("button");
        createProjectButton.id = "create-project";
        createProjectButton.textContent = "+";

        taskHeader.appendChild(taskHeaderTitle);
        taskHeader.appendChild(createProjectButton);

        const showProjects = document.createElement("div");
        showProjects.id = "show-projects";

        projectsContainer.appendChild(taskHeader);
        projectsContainer.appendChild(showProjects);

        sideBar.appendChild(appTitle);
        sideBar.appendChild(primaryButtons);
        sideBar.appendChild(projectsContainer);

        const content = document.createElement("div");
        content.id = "content";

        container.appendChild(sideBar);
        container.appendChild(content);

        main.innerHTML = "";
        main.appendChild(appTitle);
        main.appendChild(container);

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

    function renderInbox() {
        const taskPage = document.querySelector("#content");
        taskPage.innerHTML = "";

        // Create <h2> element
        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = currentProjects[0].name;
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

            const taskObject = createTask(0, taskName, taskDate, taskPriority);

            currentProjects[0].addTask(taskObject);
            renderTasks(0);
            taskInputForm.reset();
            prioritySelect.value = "default";
        });

        renderTasks(0);
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

    function checkActiveTile() {
        const sideBar = document.getElementById("side-bar");
    }

    function renderProjects() {
        const projectContainer = document.getElementById("show-projects");
        projectContainer.innerHTML = "";
        let accumulator = 1;
        currentProjects.slice(1).forEach((project) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.dataset.value = accumulator;

            const projectName = document.createElement("p");
            projectName.textContent = project.name;

            const editButton = document.createElement("button");
            editButton.classList.add("edit-button");
            const editButtonSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );
            editButtonSvg.setAttribute("width", "24");
            editButtonSvg.setAttribute("height", "24");
            editButtonSvg.setAttribute("viewBox", "0 0 24 24");
            editButtonSvg.setAttribute("fill", "none");
            const editButtonPath1 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            editButtonPath1.setAttribute(
                "d",
                "M12.5 7.5L5.92819 14.0718C5.71566 14.2843 5.60939 14.3906 5.53953 14.5212C5.46966 14.6517 5.44019 14.7991 5.38124 15.0938L4.64709 18.7646C4.58057 19.0972 4.5473 19.2635 4.64191 19.3581C4.73652 19.4527 4.90283 19.4194 5.23544 19.3529L8.90621 18.6188C9.20093 18.5598 9.3483 18.5303 9.47885 18.4605C9.60939 18.3906 9.71566 18.2843 9.92819 18.0718L16.5 11.5L12.5 7.5Z"
            );
            editButtonPath1.setAttribute("fill", "#7E869E");
            editButtonPath1.setAttribute("fill-opacity", "0.25");
            const editButtonPath2 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            editButtonPath2.setAttribute(
                "d",
                "M5.95396 19.38L5.95397 19.38L5.9801 19.3734L5.98012 19.3734L8.60809 18.7164C8.62428 18.7124 8.64043 18.7084 8.65654 18.7044C8.87531 18.65 9.08562 18.5978 9.27707 18.4894C9.46852 18.381 9.62153 18.2275 9.7807 18.0679C9.79242 18.0561 9.80418 18.0444 9.81598 18.0325L17.0101 10.8385L17.0101 10.8385L17.0369 10.8117C17.3472 10.5014 17.6215 10.2272 17.8128 9.97638C18.0202 9.70457 18.1858 9.39104 18.1858 9C18.1858 8.60896 18.0202 8.29543 17.8128 8.02361C17.6215 7.77285 17.3472 7.49863 17.0369 7.18835L17.01 7.16152L16.8385 6.98995L16.8117 6.96314C16.5014 6.6528 16.2272 6.37853 15.9764 6.1872C15.7046 5.97981 15.391 5.81421 15 5.81421C14.609 5.81421 14.2954 5.97981 14.0236 6.1872C13.7729 6.37853 13.4986 6.65278 13.1884 6.96311L13.1615 6.98995L5.96745 14.184C5.95565 14.1958 5.94386 14.2076 5.93211 14.2193C5.77249 14.3785 5.61904 14.5315 5.51064 14.7229C5.40225 14.9144 5.34999 15.1247 5.29562 15.3435C5.29162 15.3596 5.28761 15.3757 5.28356 15.3919L4.62003 18.046C4.61762 18.0557 4.61518 18.0654 4.61272 18.0752C4.57411 18.2293 4.53044 18.4035 4.51593 18.5518C4.49978 18.7169 4.50127 19.0162 4.74255 19.2574C4.98383 19.4987 5.28307 19.5002 5.44819 19.4841C5.59646 19.4696 5.77072 19.4259 5.92479 19.3873C5.9346 19.3848 5.94433 19.3824 5.95396 19.38Z"
            );
            editButtonPath2.setAttribute("stroke", "#33363F");
            editButtonPath2.setAttribute("stroke-width", "1.2");
            const editButtonPath3 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            editButtonPath3.setAttribute("d", "M12.5 7.5L16.5 11.5");
            editButtonPath3.setAttribute("stroke", "#33363F");
            editButtonPath3.setAttribute("stroke-width", "1.2");

            editButtonSvg.appendChild(editButtonPath1);
            editButtonSvg.appendChild(editButtonPath2);
            editButtonSvg.appendChild(editButtonPath3);
            editButton.appendChild(editButtonSvg);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-project");
            const deleteButtonSvg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );
            deleteButtonSvg.setAttribute("width", "24");
            deleteButtonSvg.setAttribute("height", "24");
            deleteButtonSvg.setAttribute("viewBox", "0 0 24 24");
            deleteButtonSvg.setAttribute("fill", "none");
            const deleteButtonPath1 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            deleteButtonPath1.setAttribute("d", "M18 6L6 18");
            deleteButtonPath1.setAttribute("stroke", "#33363F");
            deleteButtonPath1.setAttribute("stroke-width", "2");
            deleteButtonPath1.setAttribute("stroke-linecap", "round");
            deleteButtonPath1.setAttribute("stroke-linejoin", "round");
            const deleteButtonPath2 = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            deleteButtonPath2.setAttribute("d", "M6 6L18 18");
            deleteButtonPath2.setAttribute("stroke", "#33363F");
            deleteButtonPath2.setAttribute("stroke-width", "2");
            deleteButtonPath2.setAttribute("stroke-linecap", "round");
            deleteButtonPath2.setAttribute("stroke-linejoin", "round");

            deleteButtonSvg.appendChild(deleteButtonPath1);
            deleteButtonSvg.appendChild(deleteButtonPath2);
            deleteButton.appendChild(deleteButtonSvg);

            projectCard.appendChild(projectName);
            projectCard.appendChild(editButton);
            projectCard.appendChild(deleteButton);
            projectContainer.append(projectCard);

            deleteButton.addEventListener("click", (e) => {
                currentProjects.splice(projectCard.dataset.value, 1);
                e.stopPropagation();
                renderProjects();
                renderInbox();
            });

            editButton.addEventListener("click", () => {
                const projectNameInput = document.createElement("input");
                projectNameInput.type = "text";
                projectNameInput.name = "project-name-input";
                projectNameInput.value =
                    currentProjects[projectCard.dataset.value].name;

                const saveButton = document.createElement("button");
                saveButton.className = "edit-project-name";
                saveButton.innerText = "✓";

                saveButton.addEventListener("click", (e) => {
                    const updatedProjectName = projectNameInput.value;
                    currentProjects[projectCard.dataset.value].name =
                        updatedProjectName;
                    e.stopPropagation();

                    renderProjects();
                });

                projectCard.innerHTML = ""; // Clear existing content
                projectCard.appendChild(projectNameInput);
                projectCard.appendChild(saveButton);
            });

            accumulator += 1;
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

                    currentProjects[projectCard.dataset.value].addTask(
                        taskObject
                    );
                    renderTasks(projectCard.dataset.value);
                    taskInputForm.reset();
                    prioritySelect.value = "default";
                });

                renderTasks(projectCard.dataset.value);
            }
        });
    }

    function renderTasks(index) {
        const taskContainer = document.getElementById("render-tasks");
        taskContainer.innerHTML = "";
        let accumulator = 0;
        currentProjects[index].tasks.forEach((task) => {
            renderTaskToDOM(
                index,
                accumulator,
                task.name,
                task.deadline,
                task.priority,
                task.completed
            );
            accumulator += 1;
        });
    }

    function renderTaskToDOM(
        projIndex,
        taskIndex,
        name,
        date,
        priority,
        status
    ) {
        const taskContainer = document.getElementById("render-tasks");

        const taskCard = document.createElement("div");
        taskCard.className = "task-card";
        taskCard.dataset.value = taskIndex;
        if (status) {
            taskCard.classList.add("completed");
        }

        taskCard.classList.add = priority;
        taskCard.dataset.projNum = projIndex;

        const statusCheckbox = document.createElement("input");
        statusCheckbox.type = "checkbox";
        statusCheckbox.name = "status-checkbox";
        statusCheckbox.checked = status;
        statusCheckbox.classList.add(priority);

        taskCard.appendChild(statusCheckbox);

        const taskName = document.createElement("p");
        taskName.className = "task-name";
        taskName.textContent = name;
        taskCard.appendChild(taskName);

        const taskDate = document.createElement("p");
        taskDate.className = "task-date";
        taskDate.textContent = date;
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

        // Event Listener -- Utilities for Task Cards
        taskDeleteButton.addEventListener("click", () => {
            currentProjects[projIndex].tasks.splice(taskIndex, 1);
            renderTasks(projIndex);
        });

        taskEditButton.addEventListener("click", () => {
            taskCard.innerHTML = "";

            const newTaskForm = document.createElement("form");
            newTaskForm.action = "";
            newTaskForm.className = "newTaskDataInput";

            const taskNameInput = document.createElement("input");
            taskNameInput.type = "text";
            taskNameInput.className = "new-task-name-input";
            taskNameInput.value =
                currentProjects[projIndex].tasks[taskIndex].name;
            newTaskForm.appendChild(taskNameInput);

            const taskDateInput = document.createElement("input");
            taskDateInput.type = "date";
            taskDateInput.name = "newDateInput";
            taskDateInput.className = "new-task-date-input";
            taskDateInput.value =
                currentProjects[projIndex].tasks[taskIndex].deadline;
            newTaskForm.appendChild(taskDateInput);

            const taskPriorityInput = document.createElement("select");
            taskPriorityInput.name = "newPriorityInput";
            taskPriorityInput.className = "new-task-priority-input";

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

            taskPriorityInput.value = priority;

            newTaskForm.appendChild(taskPriorityInput);

            const submitButton = document.createElement("input");
            submitButton.type = "submit";
            submitButton.value = "Save";
            newTaskForm.appendChild(submitButton);

            taskCard.appendChild(newTaskForm);

            newTaskForm.addEventListener("submit", () => {
                currentProjects[projIndex].tasks[taskIndex].name =
                    taskNameInput.value;
                currentProjects[projIndex].tasks[taskIndex].deadline =
                    taskDateInput.value;
                currentProjects[projIndex].tasks[taskIndex].priority =
                    taskPriorityInput.value;

                currentProjects[projIndex].sortTasks();
                renderTasks(projIndex);
            });
        });

        statusCheckbox.addEventListener("click", () => {
            currentProjects[projIndex].tasks[taskIndex].completed =
                statusCheckbox.checked;
            taskCard.classList.toggle("completed");
        });

        taskContainer.append(taskCard);
    }

    function renderTodayTask() {
        const taskPage = document.getElementById("content");
        taskPage.innerHTML = "";

        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = "Today";
        taskPage.appendChild(listHeader);

        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        const today = format(new Date(), "yyyy-MM-dd");
        renderTasksContainer.innerHTML = "";
        currentProjects.forEach((project) => {
            project.tasks.forEach((task) => {
                if (task.deadline === today) {
                    renderTaskToDOM(
                        task.projNum,
                        project.tasks.indexOf(task),
                        task.name,
                        task.deadline,
                        task.priority,
                        task.completed
                    );
                }
            });
        });
    }

    function renderUpcoming() {
        const taskPage = document.getElementById("content");
        taskPage.innerHTML = "";

        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = "Upcoming";
        taskPage.appendChild(listHeader);

        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        renderTasksContainer.innerHTML = "";

        currentProjects.forEach((project) => {
            project.tasks.forEach((task) => {
                if (isFuture(parseISO(task.deadline))) {
                    renderTaskToDOM(
                        task.projNum,
                        project.tasks.indexOf(task),
                        task.name,
                        task.deadline,
                        task.priority,
                        task.completed
                    );
                }
            });
        });
    }

    function renderCompleted() {
        const taskPage = document.getElementById("content");
        taskPage.innerHTML = "";

        const listHeader = document.createElement("h2");
        listHeader.id = "list-header";
        listHeader.textContent = "Completed";
        taskPage.appendChild(listHeader);

        const renderTasksContainer = document.createElement("div");
        renderTasksContainer.id = "render-tasks";
        taskPage.appendChild(renderTasksContainer);

        renderTasksContainer.innerHTML = "";

        currentProjects.forEach((project) => {
            project.tasks.forEach((task) => {
                if (task.completed) {
                    renderTaskToDOM(
                        task.projNum,
                        project.tasks.indexOf(task),
                        task.name,
                        task.deadline,
                        task.priority,
                        task.completed
                    );
                }
            });
        });
    }

    return {
        init() {
            renderHome();
        },
    };
}
