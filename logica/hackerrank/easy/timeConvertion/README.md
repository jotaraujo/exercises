## Enunciado do exercício Time Conversion

Dado um tempo em 12 horas no formato AM/PM de hora , converta para o formato de horário militar (24 horas).

Nota: 12:00:00AM em um relógio de 12 horas corresponde a 00:00:00 em um relógio de 24 horas.

12:00:00PM em um relógio de 12 horas corresponde a 12:00:00 em um relógio de 24 horas.

Exemplo
 - s = '12:01:00PM'
Retorna '12:01:00'.

- s = '12:01:00AM'
Retorna '00:01:00'.

Descrição da função

Complete a função com os seguintes parâmetros:

String s: um tempo em formato de 12 horas

Devoluções

String s: o tempo em formato de 24 horas

Formato de entrada

Uma única string s que representa um tempo em formato de relógio de hora em hora (ou seja: HH:MM:SSAM ou HH:MM:SSPM).

Restrições

Todos os tempos de entrada são válidos.

Entrada de exemplo 0

07:05:45PM

Saída de exemplo 0

19:05:45