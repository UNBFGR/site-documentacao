# Brake System Plausibility Device (BSPD)

## 1 - Overview do circuito

Circuito que garante que nenhuma das condições a seguir estão acontecendo:
1. Pedal de freio e de acelerador estão sendo pressionados ao mesmo tempo(print). 
2. Pedal de freio sendo apertado até o fim de curso por mais de um tempo delimitado por regulamento.

---

## 2 - Regulamento sobre esse circuito

```
EV.7.7 — Brake System Plausibility Device (BSPD)

EV.7.7.1
The vehicle must have a standalone non-programmable circuit to check for simultaneous braking and high power output.

The BSPD must be provided in addition to the APPS / Brake Pedal Plausibility Check (EV.4.7).

---

EV.7.7.2
The BSPD must open the Shutdown Circuit (EV.7.2.2) when both of the following conditions exist:

- Demand for Hard Braking (EV.4.6);
- Tractive System current at a level where 5 kW of electrical power in the DC circuit is delivered to the motor(s) at the nominal battery voltage.

The BSPD may delay opening the Shutdown Circuit by up to 0.5 s to prevent false trips.

---

EV.7.7.3
The BSPD must open the Shutdown Circuit (EV.7.2.2) when there is an open or short circuit in any sensor input.

---

EV.7.7.4
The team must have a test to demonstrate BSPD operation at Electrical Technical Inspection.

a. Power must not be sent to the motor(s) of the vehicle during the test;  
b. The test must prove the function of the complete BSPD in the vehicle, including the current sensor.

> The suggested test would introduce a current by a separate wire from an external power supply simulating the Tractive System current while pressing the brake pedal.
```

---

## 3 - Local e fixação

Aquário de circuitos.

---

## 4 - Chicote
*[Aqui vem uma lista ou tabela considerando todos os conectores desse circuito, para onde vão e o sinal que ele manda/recebe, também é necessário adicionar se o chicote tem que ser blindado e ou trançado]*

---

# 5 - Filiação
Ele recebe dados do APPS e em caso de falha ele abre o circuito Shutdown.

---

# 6 - Hardware
*[Tabela de componentes necessários para a montagem do circuito]*

---

# 7 - Esquemático
*[Esquemático do circuito e explicação um pouco mais aprofundada sobre o funcionamento do mesmo, focando no como o circuito executa aquela ação e não o porque, caso necessário adicione também um diagrama de blocos]*

---

# 8 - Cronograma conceito-fabricação
Tempo estimado: *[aqui o tempo estimado em semanas]*

![Cronograma](/docs/eletrica/bspd1.jpg)

>Projetado por: *[Seu nome.]*


