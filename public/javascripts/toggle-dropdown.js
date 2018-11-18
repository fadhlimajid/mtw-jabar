/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  const dropdowns = document.getElementsByClassName("dropdown-content");

  for (let i = 0; i < dropdowns.length; i++) {
    if (!event.target.matches(`.${dropdowns[i].id}`) && dropdowns[i].classList.contains('show')) {
      dropdowns[i].classList.remove('show');
    }
  }

  if (!event.target.matches('.dropdown-btn')) {
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}