## Enunciado do exercício Climbing the Leaderboard

Um jogador de arcade quer chegar ao topo da tabela de classificação e acompanhar sua posição. O jogo usa o algoritmo Dense Ranking , então sua tabela de classificação funciona assim:

O jogador com a pontuação mais alta é classificado em númerona tabela de classificação.
Jogadores com a mesma pontuação recebem o mesmo número de classificação, e o(s) próximo(s) jogador(es) recebe(m) o número de classificação imediatamente seguinte.

### Exemplo

 - ranked = [100, 90, 90, 80]
 - player = [70, 80, 105]

 Os jogadores classificados terão classificações 1, 2, 2 e 3, respectivamente. Se as pontuações do jogador forem 70, 80 e 105, suas classificações após cada jogo são quarto, terceiro e primeiro. Retornar [4, 3, 1].

### Descrição da função

Complete a função climbingLeaderboard no editor abaixo.

O ranking climbingLeaderboard possui os seguintes parâmetros:

 - int ranked[n] : as pontuações da tabela de classificação
 - int player[m] : a pontuação do jogador

### Devoluções

 - int[m]: a classificação do jogador após cada nova pontuação

### Formato de entrada

 - A primeira linha contém um número inteiro., o número de jogadores na tabela de classificação.
 - A próxima linha contém n inteiros separados por espaço ranked[i], as pontuações da tabela de classificação em ordem decrescente.
 - A próxima linha contém um número inteiro m, os jogos de números que o jogador joga.
 - A última linha contém m inteiros separados por espaço player[j], os pontos do jogo.

### Restrições

 - 1 <= n <= 2 * 10^5
 - 1 <= m <= 2 * 10^5
 - 0 <= ranked[i] <= 10^9 para <= i < n
 - 0 <= player[j] <= 10^9 para <= j < m
 - A tabela de classificação atual ranked, está em ordem decrescente.
 - As pontuações do jogador player, estão em ordem crescente.

### Subtarefa

Para 60% da pontuação máxima:

 - 1 <= n <= 200
 - 1 <= m <= 200

### Exemplo de entrada 1
