const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const senha = document.getElementById("senha")?.value;
    const confirmSenha = document.getElementById("confirmSenha")?.value;

    if (!nome || !email || !senha || !confirmSenha) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (senha !== confirmSenha) {
        alert("As senhas não conferem!");
        return;
    }

    const bodyData = {
        nome,
        email,
        senha,
        telefone: "",
        endereco:""
    };

    try {
        const res = await fetch("http://localhost:3001/api/clientes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        });

        const data = await res.json();

        if (res.ok) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../web/cadastro.html";
        } else {
            alert("Erro ao cadastrar: " + data.error);
        }
    } catch (err) {
        console.error(err);
        alert("Erro ao cadastrar: verifique se o servidor está rodando.");
    }
});
