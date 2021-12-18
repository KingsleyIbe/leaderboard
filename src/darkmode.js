const toggleTheme = () => {
  document.querySelector('.toggle-dark-mode').innerHTML = `
    <span><i class="fas fa-moon fa-rotate-100">Theme</i></span>
    `;

  const toggleDark = document.querySelector('.fa-moon');
  toggleDark.addEventListener('click', () => {
    const element = document.body;
    element.classList.toggle('dark-mode');
  });
};

export default toggleTheme;