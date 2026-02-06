# Proposta de Sistema de Telemetria

## 1. Overview do circuito
O circuito tem como objetivo adquirir dados e mostrar ao piloto por meio de uma interface gráfica amigável, além disso o circuito deverá enviar os dados para um computador externo, preferencialmente em tempo real.

---

## 2. Regulamento sobre esse circuito
N/A

---

## 3. Local e fixação
O circuito será localizado inteiramente no aquário de circuitos, a ideia primária que seja fixado atrás do display gráfico, ou seja na parte interna do painel frontal, o circuito deverá ser fixo por meio de travas.

---

## 4. Chicote
*[Aqui vem uma lista ou tabela considerando todos os conectores desse circuito, para onde vão e o sinal que ele manda/recebe, também é necessário adicionar se o chicote tem que ser blindado e ou trançado]*

---

## 5. Filiação

| Nome | Local | Envia/recebe |
|------|-------|--------------|
| Inversor | Traseira do carro | Recebe |
| Acumulador | Traseira do carro | Recebe |

---

## 6. Hardware
- Esp32 P4
- Display touch screen 
- Módulo GPS?
- Módulo SIM-LTE?
- Iso1044B

---

## 7. Esquemático
*[Esquemático do circuito e explicação um pouco mais aprofundada sobre o funcionamento do mesmo, focando no como o circuito executa aquela ação e não o porque, caso necessário adicione também um diagrama de blocos]*

**Tela configuração:**
- Endereços CAN
- Definição de portas de entrada e saída para sensores adicionais
- Conexão WIFI para OTA
- Desativar/Ativar funções
- Modo teste

## 8. Cronograma conceito-fabricação
Tempo estimado: **25 semanas (6 meses)**

![Cronograma](/docs/eletrica/telemetria1.jpg)

>Projetado por: Lucas Mateus Teixeira de Souza

