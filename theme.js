function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
}

function toggleTheme() {
  const current = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  const next = current === "dark" ? "light" : "dark";

  applyTheme(next);
  localStorage.setItem("theme", next);
}

/* ทุกหน้าที่เปิด จะอ่านค่า theme เดิม */
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});
