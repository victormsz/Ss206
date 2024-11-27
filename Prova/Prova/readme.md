Testes Automatizados com Cypress para o Website Demoblaze
Este projeto contém testes automatizados para validar funcionalidades essenciais do site Demoblaze, incluindo cadastro, login e compras. Utilizamos o Cypress como ferramenta de testes, com geração de relatórios detalhados através do Mochawesome.

Estrutura do Projeto
signup.cy.js: Testes relacionados ao cadastro e login de usuários.
comprar.cy.js: Testes relacionados à funcionalidade de compras.
cypress.config.js: Configuração do Cypress, incluindo integração com o repórter Mochawesome.
cypress/reports: Diretório onde os relatórios de testes são armazenados.
Tecnologias Utilizadas
Cypress: Framework para automação de testes.
Mochawesome: Ferramenta para geração de relatórios detalhados.
Casos de Teste
Arquivo: signup.cy.js
Cadastro com usuário já existente

Verifica que o sistema exibe uma mensagem de erro ao tentar cadastrar um usuário duplicado.
Resultado esperado: Exibe o alerta "User already exists".
Cadastro de novo usuário

Valida que um novo usuário pode ser cadastrado com sucesso.
Resultado esperado: Exibe o alerta "Sign up successful.".
Login com credenciais válidas

Verifica que um usuário cadastrado pode fazer login.
Resultado esperado: O nome do usuário é exibido na interface com a mensagem "Welcome <username>".
Arquivo: comprar.cy.js
Adicionar produtos ao carrinho

Valida que os produtos podem ser adicionados ao carrinho com sucesso.
Resultado esperado: Os itens aparecem no carrinho após serem adicionados.
Tentativa de compra com informações faltantes

Verifica que o sistema exibe um erro ao tentar finalizar a compra sem preencher todos os campos obrigatórios.
Resultado esperado: Exibe o alerta "Please fill out Name and Creditcard.".
Finalizar compra com sucesso

Valida que um usuário pode finalizar uma compra com todas as informações preenchidas corretamente.
Resultado esperado: Exibe a mensagem "Thank you for your purchase!".
Configuração e Execução
Pré-requisitos
Node.js instalado em sua máquina.
Cypress instalado globalmente ou no projeto (npm install cypress --save-dev).
Instalação
Clone este repositório:
bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>
Instale as dependências:
bash
Copiar código
npm install
Executando os Testes
Abra a interface do Cypress:

bash
Copiar código
npx cypress open
Selecione o navegador e clique nos arquivos signup.cy.js e comprar.cy.js para executar os testes.

Execute os testes no terminal (modo headless):

bash
Copiar código
npx cypress run