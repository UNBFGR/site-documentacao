# Circuito Power Delivery

## 1 - Overview do circuito
Recebe os 12 volts da bateria LV e distribui para os outros circuitos, 12V, 12VSB, 5V e 5VSB, o sufixo SB, significa Stand-By ou seja, a partir do momento em que a bateria é conectada tais tensões se tornam disponíveis para uso.

---

## 2 - Regulamento sobre esse circuito
N/A

---

## 3 - Local e fixação
Aquário de circuitos

---

## 4 - Chicote 
RTDS: GND, 5VSB, 12V, RelaySIG
Todos os outros circuitos com suas respectivas alimentações.

---

## 5 - Filiação
O circuito é dependente direto do RTDS, os relés que ativam as saídas não stand-by são controlados pelo RTDS.

---

## 6 - Hardware
- 2 Relés 12V SPST
- 1 LED 
- 1 LM2576HVT-5.0
- 1 1N5822
- 2 1N4007
- 1 BC337
- 1 Resistor 1k
- 1 Resistor 330k
- 1 Indutor 470µH
- 5 Conectores tipo borne 2 vias
- 1 Conector tipo Molex KK 4 Vias

---

## 7 - Esquemático

![Esquemático](/docs/eletrica/cpowerdelivery1.jpg)

Entram 12 Volts da bateria, esses 12V passam pelo regulador de tensão que cria um sinal de 5V, após isso os sinais são  “duplicados” e entram nos relés, os relés são controlados pelo sinal RELAY_SIG, ou seja assim que o sinal for alto, os relés são ativados.  

---

## 8 - Cronograma conceito-fabricação
Tempo estimado: **6 semanas**

![Esquemático](/docs/eletrica/cpowerdelivery2.jpg)


> Projetado por: Lucas Mateus 
