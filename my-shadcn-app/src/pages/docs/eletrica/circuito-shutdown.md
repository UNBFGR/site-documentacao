# Circuito Shutdown

## 1 - Overview do circuito
O circuito recebe 4 sinais de falha, que vem do IMD, APPS, BSPD e APPS, além disso o circuito também identifica falha caso algum interlock do carro seja aberto (botões de shutdown, BOTS, Inertia Switch…), caso algum interlock do shutdown circuit esteja aberto, os contatores do acumulador são desligados.

---

## 2 - Regulamento sobre esse circuito
- EV.7
- EV.7.1
- EV.7.2

---

## 3 - Local e fixação
Circuito localizado no aquário de circuitos

---

## 4 - Chicote

| Sinal | Tipo | Circuito que recebe/manda |
|------|------|---------------------------|
| Alimentação 5 volts | 5V_VSB_IN | Power delivery circuit |
| Alimentação 12 volts | 12_VSB_IN | Power delivery circuit |
| Referência | GND_IN | Power delivery circuit |
| BMS | SIGNAL_IN | TMS |
| IMD | SIGNAL_IN | IMD Interface |
| APPS_OBUF | SIGNAL_IN | APPS_BSE |
| BSPD | SIGNAL_IN | BSPD |
| BMS_TSSI | SIGNAL_OUT | TSSI |
| BMS_TSSI | SIGNAL_OUT | TSSI |

| Sinal | Tipo | Circuito que recebe/manda |
|------|------|---------------------------|
| Alimentação 5 volts | 5V_VSB_IN | Power delivery circuit |
| Alimentação 12 volts | 12_VSB_IN | Power delivery circuit |
| Referência | GND_IN | Power delivery circuit |
| BMS | SIGNAL_IN | TMS |
| IMD | SIGNAL_IN | IMD Interface |
| APPS_OBUF | SIGNAL_IN | APPS_BSE |
| SHUTDOWN | SHUTDOWN_SIGNAL | Shutdown Circuit |
| AIR | 12V_OUT | Battery Container |



Os cabos de sinal, deverão ser todos trançados, para redução de ruído.

---

## 5 - Filiação
Manda 12V para o acumulador ligar os contatores.

Recebe sinal ALTO(12V) e BAIXO(0V)  de saída do IMD que está localizado dentro do acumulador.

Recebe sinal analógico ALTO(5V) e BAIXO(0V) do BSPD,APPS e TMS, todos localizados no aquário de circuitos.
 

## 6 - Hardware
**[Tabela de componentes necessários para a montagem do circuito]**

---

## 7 - Esquemático
**[Esquemático do circuito e explicação um pouco mais aprofundada sobre o funcionamento do mesmo, focando no como o circuito executa aquela ação e não o porque, caso necessário adicione também um diagrama de blocos]**

---

## 8 - Cronograma conceito-fabricação
Tempo estimado: **6 semanas**

![Cronograma](/docs/eletrica/shutdown1.jpg)


>Projetado por: Lucas Mateus, Paulo Caleb