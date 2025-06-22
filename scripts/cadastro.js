function cadastrar(){
    const form = document.querySelector('#cadastro form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const dados = {
            nome: form.nome.value,
            email: form.email.value,
        }
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dados)
          };
          
          fetch('http://localhost:5000/clientes', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })}
    
