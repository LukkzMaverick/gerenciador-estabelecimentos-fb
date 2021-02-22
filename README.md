# gerenciador-de-estabelecimentos

# Pré-Requisitos

 - [Node JS](https://nodejs.org/en/)

## Getting Started
    npm install   
    npm start

## Passo a passo
Essa aplicação foi além dos requisitos e tem algumas particularidades, é necessário seguir o passo a passo, para usá-la corretamente.

- Iniciar o back-end antes de rodar o front - back-end_rep: https://github.com/LukkzMaverick/gerenciador-de-estabelecimentos-api-fb
- Criar uma nova conta em Cadastre-se
![](/readmeImages/cadastrar.png)
- Após o cadastro o usuário ficará logado como usuário, mas não poderá executar nenhum cadastro, para mudar isso entre no MongoDB Compass(local, pode utilizar a mongoURI que está na .env) entre no banco test, dentro da collection usuarios e modifique a role do usuário criado para "superAdmin"

![](/readmeImages/connectionString.png)
![](/readmeImages/superAdmin.png)

- Este novo usuário agora é um super admin, isto significa que ele pode fazer tudo o que um admin faz(todos os cadastros, atualizações e exclusões), e além disso também pode criar outros admins, esses outros admins não podem criar outros admins.
- Ao fazer o login com o super admin, você vai para a Home dele que é uma página de cadastro de admins. Criando um novo admin, você recebe a sua senha.
![](/readmeImages/cadastrarAdmin.png)
