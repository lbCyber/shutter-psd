const app = {}

app.footer = () => {
  const footer = document.querySelector(".copy")
  let d = new Date();
  footer.innerHTML = `Copyright &copy; Shutter - ${d.getFullYear()}`
}

app.init = () => {
  app.footer();
}

if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', app.init)
} else {
  app.init();
}
