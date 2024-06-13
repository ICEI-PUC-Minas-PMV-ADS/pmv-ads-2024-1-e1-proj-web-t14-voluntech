# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página home</td>
  <td>
   <ul>
    <li>RF-001: A página deve permitir ao usuário allterar seus dados nos campos do formulário com preenchimento automático.</li>
    <li>RF-002: O site deve permitir ao usuário fazer o login da sua conta.</li>
    <li>RF-003: O site deve permitir ao usuário disponibilizar informações das instituições para contato</li>
    <li>RF-004: O site deve permitir ao usuário visualizar as necessidades das instituições.</li>
   </ul>
  </td>
  <td>Verificar se os links da página home estão encaminhando para as respectivas páginas corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página home.</li>
    <li>Clicar nos links da página home.</li>
   </ol>
   </td>
  <td>Todos os links da página home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Pedro</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento dos  campos do formulário de atualização de cadastro e botão de voltar para página feed</td>
  <td>
   <ul>
    <li>RF-001: A página deve permitir ao usuário allterar seus dados nos campos do formulário com preenchimento automático.</li>
    <li>RF-002: Deve permitir também a funcionalidade de Necessidades da instituição para que apareça na página da instituição.</li>
    <li>RF-003: Não pode permitir campos vazios ou preenchimento de campos em formato incompatível.</li>
    <li>RF-004: deve aparecer uma mensagem de alerta caso haja campos vazios ou quando concluído com sucesso.</li>
    <li>RF-005: Quando clicado na seta ao lado de editar perfil, usuário deve ser redirecionado para a página feed onde está localizado a opção editar perfil.</li>
   </ul>
  </td>
  <td>Verificar se os campos da página de cadastro estão sendo validados corretamente e armazenando os dados em LocalStorage, além de verificar a funcionalidade do botão de voltar localizado ao lado de editar perfil.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página feed e depois edital perfil.</li>
    <li>Clicar em salvar e cancelar alterações.</li>
   </ol>
   </td>
  <td>Todos as alterações cadastrais devem modificar o formulário e salvar no localStorage.</td>
  <td>Lis</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar a exibição das instituições cadastradas disponíveis para voluntariado/doações e o funcionamento dos filtros</td>
  <td>
   <ul>
    <li>RF-001: O site deve exibir um card dinâmico ao cadastrar com o nome da instituição, descrição e um botão saiba mais contendo informações.</li>
    <li>RF-002: Exibir um filtro de informações.</li>
   </ul>
  </td>
  <td>Verificar se ao cadastrar uma instituição está sendo gerado um card dinâmico contendo informações específicas e filtragem de instituições para uma busca mais precisa.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Eefetuar um cadastro na página portal das instituições.</li>
    <li>Visualizar a página instituições.</li>
    <li>Clicar em filtros e saiba mais.</li>
   </ol>
   </td>
  <td>Ao se cadastrar em portal das instituições, apresentar um card dinâmico gerado pelo localStorage e exibir com as informações específicas.</td>
  <td>Lucas</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar redimencionamento da página sobre nós para outros tamanhos de tela</td>
  <td>
   <ul>
    <li>RF-001: A página deve permitir fluidez ao ser visitada em outros dispositivos.</li>
   </ul>
  </td>
  <td>Verificar se a fluidez da página está de acordo.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Acessar a página em outros dispositivos.</li>
   </ol>
   </td>
  <td>Aspecto agradável da página, sem que o logo sobreponha o texto.</td>
  <td>João</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar se ao inserir os dados cadastrados a página efetua o login</td>
  <td>
   <ul>
    <li>RF-001: A página deve permitir ao usuário já cadastrado inserir os dados e efetuar o login.</li>
    <li>RF-002: A página deve permitir que o usuário que não possua cadastro seja redirecionado para a página de cadastramento.</li>
   </ul>
  </td>
  <td>Verificar se há o redirecionamento correto ao efetuar o login ou cadastro de novo usuário para a página correspondente à solicitação.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Inserir dados cadastrados e clicar no botão correspondente para enviá-los.</li>
    <li>Clicar no botão cadastre-se (para nosvos usuários).</li>
    <li>Aguardar redirecionamento para nova página solicitada.</li>
   </ol>
   </td>
  <td>Ao efetuar o login o usuário é redirecionado para a página correspondente à sua solicitação. No caso de novos usuários, estes serão redirecinados para a página de cadastro.</td>
  <td>Fred</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar o funcionamento dos campos de cadastro e se estão sendo validados corretamente</td>
  <td>
   <ul>
    <li>RF-001: O cadastro deve ter seus campos validados de forma correta e impedir que o usuário envie dados com o campo vazio.</li>
    <li>RF-002: O cadastro deve possuir máscaras de formatação para os campos: celular, telefone e senha.</li>
    <li>RF-003: O cadastro precisa ter o campo CEP prenchendo automaticamente os campos de rua, bairro e cidade.</li>
    <li>RF-004: O cadastro deve direcionar para o login após 3 segundos.</li>
   </ul>
  </td>
  <td>Verificar se os campos da página de cadastro estão sendo validados corretamente e armazenando os dados em LocalStorage.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página cadastro.</li>
    <li>Clicar e preencher os dados nos campos respectivos.</li>
   </ol>
   </td>
  <td>Todos os campos da página de cadastro devem ser validados corretamente, impedir que o usuário prrencha campos vazios, armazenar os dados em LocalStorage e ser redirecionado para login em 3 segundos.</td>
  <td>Tatiana</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar o funcionamento do mecanismo de publicação</td>
  <td>
   <ul>
    <li>RF-001: Criar um mecanismo para postagem de necessidades das instituições de caridade.</li>
    <li>RF-002: Criar um mecanismo (feed) para exibir as postagens das necessidades das instituições de caridade.</li>
   </ul>
  </td>
  <td>Verificar se o mecanismo de publicação está funcionando corretamente, permitindo que as instituições de caridade criem postagens de necessidades e que essas postagens sejam exibidas no feed.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Acessar a plataforma como uma instituição de caridade.</li>
    <li>Navegar até a seção de criação de postagens.</li>
    <li>Preencher os campos necessários, como título, descrição e categoria da necessidade.</li>
    <li>Selecionar a opção de publicar a postagem.</li>
    <li>Verificar se a postagem é exibida corretamente no feed de postagens.</li>
   </ol>
   </td>
  <td>
    A postagem deve ser criada com sucesso, exibida corretamente no feed de postagens, incluindo nome, descrição e foto com a ordem cronológica das postagens mais recentes primeiro. Verificar ortografia nos avisos exibidos e se usuários não logados conseguem publicar. Testar os redirecionamentos das páginas.
</td>
  <td>Fred</td>
 </tr>
</table>
