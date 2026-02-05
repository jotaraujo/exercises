## Enunciado do exercício Birthday Cake Candles

Você é responsável pelo bolo de aniversário de uma criança. O bolo terá uma vela para cada ano da sua idade total. A criança só poderá apagar a vela mais alta. Sua tarefa é contar quantas velas são as mais altas.

### Exemplo

- candles = [4, 4, 1, 3]

As velas mais altas têm 4 unidades de altura. Existem 2 velas com essa altura, então a função deve retornar 2.

### Descrição da função

Complete a função birthdayCake com os seguintes parâmetros:

- int candles[n]: as alturas das velas

### Devoluções

- int: o número de velas mais altas

### Formato de entrada

A primeira linha contém um único número inteiro n, o tamanho de candles[].
A segunda linha contém n inteiros separados por espaços, onde cada inteiro i descreve a altura de candles[i].

### Restrições

- 1 <= n <= 10^5

- 1 <= candles[i] <= 10^7 

### Entrada de exemplo 0

4 
3 2 1 3

### Saída de exemplo 0

2

### Explicação 0

As alturas das velas são [3, 2, 1, 3]. As velas mais altas são os elementos de valor 3, e há 2 deles.