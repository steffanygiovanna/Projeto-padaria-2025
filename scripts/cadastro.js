// cadastro.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita recarregar a página

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");
        window.location.href = "../web/home.html";
      } else {
        alert(data.error || "Erro ao realizar login");
      }

    } catch (error) {
      console.error("Erro ao enviar login:", error);
      alert("Erro ao enviar login");
    }
  });
});
