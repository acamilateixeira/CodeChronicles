function theme() {
  if (localStorage.getItem("theme") === "dark") {
    c();

    if (document.getElementById("checkbox").checked) {
      localStorage.setItem("checkbox", true);
    }
  }

  function setDarkMode() {
    let isDark = document.body.classList.toggle("darkmode");

    if (isDark) {
      document.getElementById("checkbox").checked = true;
      localStorage.setItem("theme", "dark");
    } else {
      document.getElementById("checkbox").checked = false;
      localStorage.removeItem("theme");
    }
  }
}
