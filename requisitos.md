##  Requisitos Funcionais

### [RF001] CRUD de Alunos  
*Descrição*: O sistema deve permitir o CRUD de alunos.  
*Prioridade*: ☑ Essencial ☐ Importante ☐ Desejável  

#### [RF001.1] Leitura de um aluno específico  
*Descrição*: A rota readOne do aluno deve mostrar os dados de um aluno e seus empréstimos, contendo os dados dos livros emprestados.  
*Prioridade*: ☐ Essencial ☑ Importante ☐ Desejável  
*DCU*: DCU01  

---

### [RF002] CRUD de Empréstimos  
*Descrição*: O sistema deve permitir o CRUD de empréstimos.  
*Prioridade*: ☑ Essencial ☐ Importante ☐ Desejável  

#### [RF002.1] Associação de empréstimo a aluno e livro  
*Descrição*: O sistema deve associar o empréstimo a um aluno e a um livro.  
*Prioridade*: ☑ Essencial ☐ Importante ☐ Desejável  

#### [RF002.2] Data de retirada automática  
*Descrição*: Ao cadastrar um novo empréstimo (create no controller), a data e hora da retirada deve ser gerada automaticamente pelo banco de dados usando @default(now()).  
*Prioridade*: ☐ Essencial ☑ Importante ☐ Desejável  

#### [RF002.3] Devolução nula inicialmente  
*Descrição*: Ao cadastrar um novo empréstimo (create no controller), o campo de devolução deve ser nulo (?) e só será preenchido na rota update, quando o aluno devolver o livro.  
*Prioridade*: ☐ Essencial ☑ Importante ☐ Desejável  

#### [RF002.4] Cálculo de multa por atraso  
*Descrição*: Se ao realizar update o campo devolução for enviado, o sistema deve calcular a multa.  
- O aluno pode ficar apenas *3 dias* com o livro.  
- Se a data da devolução for *mais de três dias após a retirada, será cobrada uma **multa de R$10,00 por dia* de atraso.  
*Prioridade*: ☐ Essencial ☐ Importante ☑ Desejável  
*DCU*: DCU02  

---

##  Requisitos Não Funcionais

- [RN001] Linguagem de programação: *JavaScript*
- [RN002] Framework de back-end: *Node.js*
- [RN003] ORM: *Prisma*
- [RN004] IDE de desenvolvimento: *VS Code*
- [RN005] Ferramenta de testes: *Insomnia*