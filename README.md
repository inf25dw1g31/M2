# Car4Me – API chapter 

##  Descrição do Projeto

O **Car4Me** é uma API REST criada para apoiar as operações diárias de uma empresa de aluguer de veículos.  
O sistema permite gerir:

- clientes  
- veículos  
- categorias  
- funcionários  
- reservas  
- manutenções  
- relação N:N de favoritos (clientes ⇄ veículos)

A solução foi construída com **Node.js + Express**, utiliza **MySQL 8** como base de dados relacional, é totalmente **documentada com OpenAPI 3.0**, e executada em ambiente **Docker**.

---

##  Organização do Repositório

A estrutura do repositório é a seguinte:

```
/
├── express-server/         # Código fonte da API (routes, controllers, services)
├── db/                     # Scripts SQL e ficheiros de inicialização
├── api/                    # Especificação OpenAPI (openapi.yaml)
├── doc/                    # Capítulos do relatório (C1, C2, C3, C4)
├── presentation/           # Ficheiros da apresentação
└── docker-compose.yml      # Definição completa do ambiente Docker
```

Ligações rápidas:

- **Código da API** → `express-server/`  
- **Relatório em Markdown** → `doc/`  
- **Documentação OpenAPI** → `api/openapi.yaml`

---

## 🖼 Galeria

*(Adicionar as imagens reais dentro da pasta `/doc/imagens/`.)*

| Imagem | Descrição |
|--------|-----------|
| ![Swagger](./doc/imagens/swagger.png) | Interface Swagger – Documentação da API |
| ![ER Diagram](./doc/imagens/er_diagram.png) | Diagrama Entidade–Relação |
| ![Architecture](./doc/imagens/architecture.png) | Arquitetura do Sistema |

---

## 🛠 Tecnologias Utilizadas

A API foi construída com uma stack moderna, estável e escalável:

- **Node.js**
- **Express.js**
- **MySQL 8**
- **Docker / Docker Compose**
- **OpenAPI 3.0**
- **Swagger UI**
- **Mermaid / Draw.io**
- **VS Code**

### Bibliotecas e Frameworks Adicionais

- mysql2  
- dotenv  
- express-router  
- nodemon (ambiente de desenvolvimento)  
- DockerHub para publicação de imagens  

---

##  Relatório do Projeto

O relatório encontra-se organizado em capítulos:

- **Capítulo 1:** `doc/c1.md`  
- **Capítulo 2:** `doc/c2.md`  
- **Capítulo 3:** `doc/c3.md`  
- **Capítulo 4:** `doc/c4.md`

---

##  Equipa

| Nome | GitHub |
|------|--------|
| **Carlos Miguel Castro** | https://github.com/a046404 |
| **Marcelo Pinto** | https://github.com/MarceloCostaOBJ |
| **Rui Amorim** | https://github.com/a047906 |

---
