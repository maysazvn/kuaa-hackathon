# KUAA - Rede Social de Estudos
* Link: kuaa-hackathon.surge.sh

## Visão geral
O KUAA é uma rede social voltada para o ambiente acadêmico, com o objetivo de conectar estudantes e professores para discussão, planejamento e colaboração em atividades de estudo.

## Funcionalidades planejadas

* **Autenticação (Login):** Criação, gerenciamento e exclusão de contas, além de controle de sessão (login/logout).
* **Gerenciamento de usuários:** Visualização e edição de perfis, exclusão de conta e sistema de seguir/deixar de seguir outros usuários.
* **Salas de estudo:** Criação, visualização, edição e exclusão de salas.
* **Postagens:** Criação, visualização, edição, exclusão, curtidas e salvamento de publicações.
* **Timeline (Feed):** Exibição de publicações das salas inscritas, destaques (posts populares) e recurso de publicação rápida.
* **Busca e filtros:** Sistema de busca para localização de usuários, salas e postagens.
* **Chat (em avaliação):** Comunicação direta via mensagens entre usuários que se seguem mutuamente.

## Funcionalidades desenvolvidas

* **Autenticação (Login):** Pode-se considerar majoritariamente pronto: a maior parte já está feita, só falta linkar com outras páginas;
* **Gerenciamento de usuários:** Está completamente pronto, pode estar só sujeito a algumas alterações;
* **Salas de estudo:** Está praticamente pronto, mas tem alguns bugs e falta CSS em algumas partes;
* **Postagens:** Boa parte já está feita, porém falta colocar imagens, curtidas e salvos, além de arrumar alguns bugs;
* **Timeline (Feed):** Está com bastante bugs, mas as funcionalidades em si estão prontas;
* **Busca e filtros:** Está quase pronto, ainda falta o filtro por postagem e CSS;
* **Chat (em avaliação):** Não foi iniciado ainda.

## Dificuldades encontradas
* Identificação do próprio usuário às suas postagens;
* Implementação do localStorage;
* Emits e props;
* Algumas coisas específicas com Router.

## Divisão de tarefas

* **André:** Sistema de login e autenticação
* **Pietro:** Gerenciamento de usuários e sistema de busca
* **Samuel:** Exploração e visualização de salas
* **Clara:** Criar, gerenciamento e exclusão salas
* **Hallana:** Sistema de postagens
* **Maysa:** Estilização (CSS) e Timeline

obs: no processo, os membros se ajudaram em diversos momentos.

## Avaliação do projeto
* **Nota atribuída:** 9
* **Justificativa:** Para uma apresentação parcial, foi um resultado bom, mas não perfeito. Temos bastante funcionalidades que já estão prontas, mas ainda faltam algumas e tem bugs. Também fomos realistas quanto aos problemas do site e dificuldades durante a apresentação presencial, cada um apresentou suas funcionalidades e mostrou o que foi feito.