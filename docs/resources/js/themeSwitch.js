var themeSwitch = document.getElementById("themeSwitch");
if (themeSwitch) {
  initTheme(); // On page load, if user has selected a theme, apply it.

  themeSwitch.addEventListener("change", function (event) {
    resetTheme(); // Update color theme
  });

  function initTheme() {
    var lightThemeSelected =
      localStorage.getItem("themeSwitch") !== null &&
      localStorage.getItem("themeSwitch") === "light";
    // Update checkbox.
    themeSwitch.checked = lightThemeSelected;
    // Update body data-theme attribute.
    lightThemeSelected
      ? document.body.setAttribute("data-theme", "light")
      : document.body.removeAttribute("data-theme");
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      // Light theme has been selected
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("themeSwitch", "light"); // Save theme selection.
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.removeItem("themeSwitch"); // Reset theme selection.
    }
  }
}
