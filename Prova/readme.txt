Prova - Postman Collection
Este repositório contém uma coleção de testes para a API JSONPlaceholder, organizada para realizar operações sobre os posts. O objetivo é validar a resposta da API com base em requisições GET, POST, PATCH e PUT. A coleção foi criada no Postman e contém testes automatizados para garantir a integridade das respostas.
Estrutura da Coleção
1. GetPostByUserId
* Método: GET
* Descrição: Faz uma requisição para obter todos os posts de um usuário específico (userId=2).
* Testes:
   * Verifica se o código de status é 200.
   * Verifica se o userId nos posts retornados é o mesmo do parâmetro fornecido.
2. PostPost
* Método: POST
* Descrição: Cria um novo post com os dados fornecidos.
* Testes:
   * Verifica se o código de status é 201 (criação bem-sucedida).
   * Verifica se a resposta contém o id da nova postagem.
   * Verifica se os dados enviados estão corretos na resposta.
3. PostId
* Método: PATCH
* Descrição: Atualiza o título de um post com id=1.
* Testes:
   * Verifica se o código de status é 200.
   * Verifica se o título do post foi alterado corretamente.
   * Valida que o corpo (body), userId, e id não foram modificados, além do título.
4. PostIdNaN
* Método: PUT
* Descrição: Tenta atualizar um post com um id inválido (id=123456).
* Testes:
   * Verifica se o código de status é 500, indicando um erro no servidor devido ao id inválido.
Como Usar
1. Importar para o Postman:
   * Abra o Postman.
   * Clique em "Import".
   * Cole o JSON da coleção ou faça o upload do arquivo.
2. Executar Testes:
   * Selecione a coleção "Prova".
   * Clique em "Run" para executar todos os testes.
   * Os resultados aparecerão na interface do Postman, onde você poderá verificar se todos os testes passaram.
Dependências
Esta coleção utiliza o Postman para execução dos testes e não requer dependências externas além do próprio Postman.
Contribuição
* Faça um fork do repositório.
* Adicione ou modifique testes conforme