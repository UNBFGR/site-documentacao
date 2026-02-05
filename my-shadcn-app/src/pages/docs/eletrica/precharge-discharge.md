# Circuito Logic & Precharge-Discharge

## 1 - Overview do circuito
O circuito tem como objetivo dar uma pré-carga no inversor e descarregar o inversor, a fim de evitar danos prematuros e acidentes

---

## 2 - Regulamento sobre esse circuito

Temos no regulamento a regra EV.5.6 falando sobre 

### Precharge and Discharge circuits:

**EV.5.6:** Precharge and Discharge Circuits

**EV.5.6.1:** The Accumulator must contain a Precharge Circuit. The Precharge Circuit must:

**a)** Be able to charge the Intermediate Circuit to minimum 90% of the Accumulator voltage before closing the second IR

**b)** Be supplied from the Shutdown Circuit EV.7.1

**EV.5.6.2:** The Intermediate Circuit must precharge before closing the second IR

**a)** The end of precharge must be controlled by feedback by monitoring the voltage in the Intermediate Circuit

**EV.5.6.3:** The Tractive System must contain a Discharge Circuit. The Discharge Circuit must be:

**a)** Wired in a way that it is always active when the Shutdown Circuit is open

**b)** Able to discharge the Intermediate Circuit capacitors if the MSD has been opened

**c)** Not be fused

**d)** Designed to handle the maximum Tractive System voltage for minimum 15 seconds

**EV.5.6.4:** Positive Temperature Coefficient (PTC) devices must not be used to limit current for the Precharge Circuit or Discharge Circuit

**EV.5.6.5:** The precharge relay must be a mechanical type relay

**EV.7.1.2:** The Shutdown Circuit must directly carry the current driving the Isolation Relays (IRs) and the Precharge Circuit Relay.

---

## 3 - Local e fixação

Como a regra **EV.6.5.4** diz:

"EV.6.5.4 GLV Systems other than the IRs EV.5.4, parts of the Precharge and Discharge Circuits EV.5.6, HV DC/DC converters, the BMS EV.7.3, the IMD EV.7.6, parts of the Ready to Move Light EV.5.10 the Energy Meter EV.3.1 and cooling fans must not be inside the Accumulator Container.
Partes dele estarão na interna do acumulador, mais especificamente na tampa fixado no policarbonato, e outra será fixada no inversor para descarga do mesmo."

---

## 4 - Chicote
| Conector | Sinal | Nome-PCB | Circuito ligado |
|----------|-------|----------|-----------------|
| J1 | Referência | GND | PowerDelivery |
| J1 | +5V | +5V | PowerDelivery |
| J1 | +5VnISO | +5VnISO | TSM |
| J1 | 12V Shutdown | 12V Shutdown | ShutDown |
| J1 | Polo Positivo das Baterias | HV+ | Contator |
| J1 | Polo Negativo das Baterias | HV- | Contator |
| P2 | Polo positivo do inversor | GND | Pedalbox |
| P2 | Sinal do potenciômetro 1 | POT1 | Pedalbox |
| P2 | Alimentação | +5V | Pedalbox |
| P4 | Referência | GND | Pedalbox |
| P4 | Sinal do potenciômetro 2 | POT2 | Pedalbox |
| P4 | Alimentação variável do potenciômetro 2 | VCC | Pedalbox |
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

Esse circuito é completamente analógico, ele recebe (12V e 5VnISO)somente alimentação, 12V do shutdown, HV+(polo positivo da bateria), HV-(polo negativo da bateria), INV+(Polo positivo do inversor), INV-(Polo negativo do inversor) e a referência da baixa tensão

---

## 6 - Hardware
*[Tabela de componentes necessários para a montagem do circuito]*

---

## 7 - Esquemático
*[Esquemático do circuito e explicação um pouco mais aprofundada sobre o funcionamento do mesmo, focando no como o circuito executa aquela ação e não o porque, caso necessário adicione também um diagrama de blocos]*

---

## 8 - Cronograma conceito-fabricação

Tempo estimado: **[aqui o tempo estimado em semanas]**

![Cronograma](/docs/eletrica/prechargedischarge.jpg)

>Projetado por: Otávio Augusto Binder
