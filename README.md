# Amigo Secreto

Um projeto simples em JavaScript, HTML e CSS que permite adicionar nomes de amigos em uma lista e sortear aleatoriamente um amigo secreto. Ideal para aprender manipulação de arrays, DOM e eventos em JavaScript.

## Funcionalidades

- Adicionar nomes de amigos através de um campo de input.
- Mostrar a lista de amigos na tela.
- Sortear um amigo aleatório e exibir o resultado.
- Impedir que o mesmo amigo seja sorteado duas vezes.
- Avisar se a lista estiver vazia ou se o usuário tentar adicionar um nome inválido.

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Digite o nome de um amigo no campo de input e clique em "Adicionar".
3. O nome será adicionado na lista de amigos.
4. Clique em "Sortear amigo" para escolher um amigo aleatoriamente.
5. O amigo sorteado será exibido na tela e removido da lista para evitar repetição.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

## Estrutura do projeto

/amigo-secreto
│
├─ index.html
├─ style.css
└─ app.js

## Observações

- Cada amigo só pode ser sorteado uma vez.
- O input não aceita strings vazias.
- O projeto pode ser facilmente expandido com recursos como salvar resultados anteriores ou adicionar estilos personalizados.
