## Monster Slayer

Esse foi o meu primeiro projeto desenvolvido usando Vue.js, nele apliquei os seguintes conhecimentos:


- **Estrutura básica:** A estrutura básica de um projeto Vue:
    - `Data`: Responsável por armazenar os dados do componente;
    - `Methods`: Funções que executam a lógica da aplicação e manipulam os dados;
    - `Computed`: Propriedades que dependem dos dados e são recalculdas apenas quando a depêndencia muda;
    - `Watch`: Propriedades que observam alterações nos dados do componente, e permitem realizar uma ação quando isso ocorrer;

- **Interpolação:** Uso da sintaxe `{{ }}` para exibição de texto;

- **Diretivas de ligação:** Uso de `v-bind` o u `:` para realizar ligação de mão única do JavaScript com o HTML;

- **Tratamento de eventos**: Uso de `v-on` ou `@` para escutar eventos do DOM e executar código JavaScript quando disparados

- **Two-Way Binding:** Uso de `v-model` para criar uma ligação de mão dupla entre elementos de formulário e o JavaScript. Ou seja, se o input for atualizado o dado no JS também é, e vice-versa;

- **Renderização condicional:** Uso de `v-if`, `v-else`, `v-else-if` para exibição de HTML condicional;

- **Renderização de listas e objetos:** Uso de `v-for` para percorrer listas ou objetos e exibir conteudos dinâmicamente;

---

#### Sobre o Jogo

O jogo consiste em turnos onde o Jogador enfrenta um Monstro. Ambos iniciam a partida com 100 de vida (HP), e vence quem zerar a vida do oponente primeiro.

**Ações do Jogador**
A cada turno, você deve escolher uma destas três opções:

- Atacar: Causa dano básico ao monstro.
- Ataque Especial: Um golpe mais forte que causa dano extra.
- Curar: Recupera uma parte da sua própria vida.

**Balanceamento**
Para manter o jogo justo e desafiador, a mecânica funciona por `ação e reação`. Imediatamente após qualquer escolha do jogador (inclusive curar), o monstro realiza um contra-ataque.



