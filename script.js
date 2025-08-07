function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    const activeSection = document.getElementById(id);
    activeSection.innerHTML = `<h2>${id.toUpperCase()} Section</h2><p>Working content will be added here.</p>`;
    activeSection.style.display = 'block';
}