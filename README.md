# gerenciador-estabelecimentos-fb

# Pré-Requisitos

 - [Node JS](https://nodejs.org/en/)

## Getting Started
    npm install   
    npm start

## Considerações Iniciais
- O escopo da aplicação vai bem além do pedido, contendo 3 nivéis de usuário, admin, superAdmin(admin que pode criar admins) e usuário.
- Localização é um model independente mas foi atrelado a estabelecimento, da forma como foi feito, o usuário não precisa se preocupar em cadastrar localização, nem em removê-las, isso é feito por de trás dos panos quando ele mexe no estabelecimento. Isso deixou o site mais intuitivo e com melhor usabilidade. 
- Dessa forma além do CRUD de estabelecimentos temos um CRUD implicito para localização, tudo isso sendo tratado dentro do controller.

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
- Ainda tem muitas coisas que poderiam ser mostradas em foto nesse README, mas ficaria muito grande, sinta-se a vontade para explorar o sistema e perceba que existem 3 roles diferentes de usuários que podem executar ações diferentes, além disso repare que os usuários admin, só estão recebendo informações relativas aos estabelecimentos e empresas cadastradas por eles mesmos, enquanto o usuário comum, pode ver todas as empresas e estabelecimentos cadastrados, além de fazer buscas por localização nos mesmos.
- Perceba também que a maioria das ações podem ser achados no dropdown com o nome do usuário
![](/readmeImages/dropdown.png)
- Antes de usar um usuário cadastre empresas e estabelecimentos com um admin, para a aplicação fazer algum sentido.
- Repare também, que só são mostradas aos usuários as empresas que tem um algum estabelecimento vinculado, além disso é possível fazer busca por localização independente da empresa usando o dropdown ou já dentro de uma empresa buscar por estabelecimentos de uma localização dentro de determinada empresa através da lupa em cima da tabela.
![](/readmeImages/dropdownLocalizacao.png)
![](/readmeImages/lupa.png)
