# Circuito APPS-BSE

## 1 - Overview do circuito
O circuito analisa os potenciômetros do acelerador, switches do pedal de freio e envia os dados de acelerador e freio ao inversor

---

## 2 - Regulamento sobre esse circuito
- T.4.2
- T.4.3
- EV.6.5

---

## 3 - Local e fixação
O circuito é fixado no aquário de circuitos, porém pode ser fixado na pedal-box também caso melhore a disposição geral dos circuitos

---

## 4 - Chicote

| Conector | Sinal | Nome-PCB | Circuito ligado |
|----------|--------|-------|-------------|
| J1 | Referência | GND | RTDS |
| J1 | Alimentação | +5V | RTDS |
| J1 | Falha Apps | FAULT | RTDS |
| J1 | Carro ligado | RTD | RTDS |
| J1 | Idle | IDLE | RTDS |
| J1 | Sem falhas | OK | RTDS |
| P2 | Referência | GND | Pedalbox |
| P2 | Sinal do potenciômetro 1 | POT1 | Pedalbox |
| P2 | Alimentação | +5V | Pedalbox |
| P4 | Referência | GND | Pedalbox |
| P4 | Sinal do potenciômetro 2 |POT2 | Pedalbox |
| P4 | Alimentação variável do potenciômetro 2 | VCC  |Pedalbox |
| P3 | Sinal | SIG | Pedalbox |
| P3 | Referência | GND | Pedalbox |
| P6 | Sinal | SIG | Pedalbox |
| P6 | Referência | GND | Pedalbox |
| P8 | 12V | 12V | Power Delivery |
| P8 | Referência | GND | Power Delivery |
| P7 | Sinal de freio | BRKL | Brake Light |
| P7 | Referência | GND | Brake Light |
| P1 | Sinal de freio para o inversor | BRK | Inversor |
| P1 | Alimentação 15V vinda do inversor | 15V | Inversor |
| P5 | Alimentação 10V vinda do inversor | 10V | Inversor |
| P5 | Referência analogica Inversor | GND | Inversor |
| P5 | Sinal PWM de acelerador | ACC | Inversor |

---

## 5 - Filiação

Envia dados analogicos ao inversor, que esta localizado na parte traseira do carro
Controla a Luz de freio,
E também envia e recebe dados analogicos da pedalbox
Também é conectado ao RTDS

---

## 6 - Hardware

---

## 7 - Esquemático

![Esquemático](/public/docs/eletrica/apps1.jpg)

![Diagrama](/public/docs/eletrica/apps2.jpg)

O diagrama de blocos apresentado ilustra o funcionamento do circuito, detalhando os dados que ele recebe e envia. A seguir, uma explicação das suas principais funcionalidades.

O componente central do circuito é um Arduino Nano, responsável por executar toda a lógica de controle exigida pelos regulamentos APPS e BSE. O sistema APPS gera uma saída de tensão variável, que é ajustada por um amplificador operacional (U2). Essa tensão ajustada é lida pelo Arduino Nano, permitindo que ele calcule com precisão o sinal correspondente ao segundo potenciômetro — que, conforme a norma, possui uma curva de resposta específica.

Para garantir a integridade dos sinais, os dados dos interruptores de freio e da comunicação com o RTDS passam por uma porta lógica **NAND Schmitt Trigger**. Este componente atua como um filtro, eliminando ruídos elétricos e evitando problemas como o "debounce" (leituras múltiplas e falsas de um único acionamento). Essa filtragem assegura uma maior confiabilidade nos sinais que o Arduino recebe e envia.

Finalmente, para transmitir os dados de aceleração e freio ao inversor, o Arduino utiliza dois optoacopladores (U3 e U1). Ele envia um sinal PWM para o acelerador e um sinal digital para o freio. A função principal desses componentes é criar uma **isolação galvânica** entre os circuitos TS (Tractive System) e GLV (Ground Low Voltage), uma exigência do regulamento. É crucial notar que cada lado do optoacoplador é alimentado por um desses sistemas (TS de um lado, GLV do outro), e seus referenciais de terra nunca devem se conectar — por isso são representados com símbolos diferentes no diagrama. Um terceiro optoacoplador (U5) é usado para um propósito similar de separação, mas entre sinais de 12V e 5V que compartilham o mesmo referencial.

---

## 8 - Cronograma conceito-fabricação
Tempo estimado: **6 meses**

![Tabela](/public/docs/eletrica/apps3.jpg)

---

>Projetado por: Paulo Caleb, Lucas Mateus