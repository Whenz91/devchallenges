let projects = document.querySelectorAll("[data-name='project']");

document.body.addEventListener("click", (e) => {
    if(!e.target.classList.contains("filter-btn")) return;

    hideAllProject();
    showSelectedProjects(getProjectsByTags(e.target.dataset.tag));
});

function getProjectsByTags(keyword) {
    let selectedProjects = [];
    
    projects.forEach(project => {
        let tags = project.dataset.tags.split(", ");

        if(tags.includes(keyword)) {
            selectedProjects.push(project);
        }
    });

    return selectedProjects;
}

function hideAllProject() {
    projects.forEach(project => {
        project.style.display = 'none';
    });
}

function showSelectedProjects(items) {
    items.forEach(item => {
        item.style.display = "block";
    })
}