# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. 
<br></br>

<h1>CT-01</h1>

|Caso de Teste    | CT-01: Verificar o funcionamento dos links da página home |
|:---|:---|
| Resultados obtidos | Satisfatório  |
| Responsável pela execução do caso de Teste | Pedro |
<p></p>
<p></p>
Objetivo: Validar o funcionamento dos links da página home.

Procedimento:
1.	Acessar o navegador.
2.	Informar o endereço do site.
3.	Visualizar a página home.
4.	Testar o redirecionamento em Saiba mais para a página sobre nós.
5.	Testar o redirecionamento clicando “Busque por instituições”.
6.	Testar o redirecionamento clicando em “Ajude de outra forma”.
7.	Testar o redirecionamento clicando em “Cadastrar instituição”.
8.	Testar o redirecionamento da Navbar.
9.	Responsividade em telas menores.
10.	Teste em outros navegadores.

Resultados:

●	Todos os links da página home encaminharam para as respectivas páginas corretamente.

●	Não foram encontrados links quebrados ou que direcionassem para páginas erradas.

●	Obs: Quando a página foi redirecionada para a tela de Sobre Nós em telas menores (para smartphones), foi detectado que a imagem sobrescreve o conteúdo.

<h3>Avaliação:</h3>O teste de validação de links na página home foi bem-sucedido. Todos os links estão funcionando corretamente e direcionando para as páginas esperadas.
<br></br>
<br></br>
<h1>CT-02</h1>

|Caso de Teste    | CT-02: Verificar o funcionamento dos campos do formulário de atualização de cadastro e botão de voltar para página feed |
|:---|:---|
| Resultados obtidos | Satisfatório  |
| Responsável pela execução do caso de Teste | Lis |

Tela inicial de atualização de cadastro da instituição logada:
<img src="../documentos/img/ct21.jpg"><br>

Mensagem que notifica caso o usuário não preencha um ou mais campos:
<img src="../documentos/img/ct22.jpg"><br>
<img src="../documentos/img/ct23.jpg"><br>

Mensagem de atualização de cadastro.
<img src="../documentos/img/ct24.jpg"><br>

Cadastro atualizado na local storage.
<img src="../documentos/img/ct25.jpg"><br>
<img src="../documentos/img/ct26.jpg"><br>
O botão destacado redireciona para a página do feed.
<br></br>
<br></br>
<h1>CT-03</h1>

|Caso de Teste    | CT-03: Verificar a exibição das instituições cadastradas disponíveis para voluntariado/doações e o funcionamento dos filtros |
|:---|:---|
| Resultados obtidos | Não Satisfatório  |
| Responsável pela execução do caso de Teste | Lucas |

Funcionalidades da página Instituições com cards e instituições cadastradas.

<img src="../documentos/img/ct31.jpg"><br>
Ao cadastrar a Instituição seus dados foram armazenados em LocalStorage com sucesso como apresentado acima.

<img src="../documentos/img/ct32.jpg"><br>
Após cadastrado algumas instituições para realização do teste , todas as instituições apareceram com seus cards de forma dinâmica na página instituições.

<img src="../documentos/img/ct33.jpg"><br>
Ao realizar a ação de click em "saiba mais " contido no Card da instituição é aberto um modal com informações contidas no cadastro da instituição, entretanto como visualizado no teste acima 1 e 2 , foi percebido que as informações não estão sendo atualizadas de instituição para instituição contidas em LocalStorage como esperado nessa ação.

<img src="../documentos/img/ct34.jpg"><br>
no caso dos filtros como partilhado nas imagens acima , o filtro classificado como estado teve falha em seu funcionamento, já nos filtros de cidade e categoria obtevesse sucesso em sua funcionalidade.




<br></br>
<br></br>
<h1>CT-04</h1>

|Caso de Teste    | CT-04: Verificar redimencionamento da página sobre nós para outros tamanhos de tela |
|:---|:---|
| Resultados obtidos | Não Satisfatório  |
| Responsável pela execução do caso de Teste | João |

Imagem VolunTech se mantém estática em todos os navegadores, exceto quando é para o dimensionamento de tablet (768px) e celular (480px) que se sobrepõem.
<img src="../documentos/img/ct41.jpg"><br>
<img src="../documentos/img/ct42.jpg"><br>
<img src="../documentos/img/ct43.jpg"><br>

<br></br>
<br></br>
<h1>CT-05</h1>

|Caso de Teste    | CT-05: Verificar se ao inserir os dados cadastrados a página efetua o login.  |
|:---|:---|
| Resultados obtidos | Satisfatório  |
| Responsável pela execução do caso de Teste | Lis |

Usuário preenche os campos “email” e “senha” com valores diferentes do já cadastrado
<img src="../documentos/img/ct51.jpg"><br>
Se as informações de usuário forem válidas, o login será bem sucedido:
<img src="../documentos/img/ct52.jpg"><br>
<img src="../documentos/img/ct53.jpg"><br>
Informações armazenadas no LocalStorage do usuário logado.

<img src="../documentos/img/ct54.jpg"><br>

Através do botão destacado acima o usuário é redirecionado para a página de cadastro caso não possua conta:
<img src="../documentos/img/ct55.jpg"><br>


<br></br>
<br></br>
<h1>CT-06</h1>

|Caso de Teste    | CT-06: Verificar o funcionamento dos campos de cadastro e se estão sendo validados corretamente  |
|:---|:---|
| Resultados obtidos | Satisfatório  |
| Responsável pela execução do caso de Teste | Tatiana |

Verificar se os campos da página de cadastro estão sendo validados corretamente e armazenando os
dados em LocalStorage.

#### RF-001: O cadastro deve ter seus campos validados de forma correta e impedir que o usuário envie dados com o campo vazio.

<img src="../documentos/img/ct61.jpg">
<img src="../documentos/img/ct62.jpg">


#### RF-002: O cadastro deve possuir máscaras de formatação para os campos: celular, telefone e senha.


<img src="../documentos/img/ct63.jpg">
 

#### RF-003: O cadastro precisa ter o campo CEP preenchendo automaticamente os campos de rua, bairro e cidade.

<img src="../documentos/img/ct64.jpg">

#### RF-004: O cadastro deve direcionar para o login após 3 segundos.

<img src="../documentos/img/ct65.jpg">

<h3>Avaliação:</h3>Todos os campos da página de cadastro foram validados corretamente, impedindo que o usuário preenchesse campos vazios. Os testes de software mostraram que os requisitos priorizados foram atendidos, funcionando como planejado.
<br></br>
<br></br>
<h1>CT-07</h1>

|Caso de Teste    | CT-07: Verificar o funcionamento do mecanismo de publicação  |
|:---|:---|
| Resultados obtidos | Satisfatório  |
| Responsável pela execução do caso de Teste | Fred |

<img src="../documentos/img/ct71.jpg"><br>
Tela inicial com mecanismo de postagem de necessidade da instituição logada.

<img src="../documentos/img/ct72.jpg"><br>
Publicação realizada.

