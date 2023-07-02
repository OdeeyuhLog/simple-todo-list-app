import {
    handlePrimaryButtonsClick,
    handleProjectButtonsClick,
    displayProjectInput,
    checkActiveTile,
} from "./events";

import { renderProjects, renderInbox } from "./render";
import "./style.scss";

export default function renderApp() {
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
        checkActiveTile();
        renderProjects();
        renderInbox();
    }

    return {
        init() {
            renderHome();
        },
    };
}
