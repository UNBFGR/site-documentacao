# Ready to Drive System

## 1. Overview do circuito
O circuito tem como objetivo, ligar o carro, observando se há high voltage presente, além disso esse circuito é responsável por enviar um sinal para energizar o circuito de power-delivery.

---

## 2. Regulamento sobre esse circuito
Todos os tópicos abordados no EV.9

---

## 3. Local e fixação
Aquário de circuitos.

---

## 4. Chicote
*[Aqui vem uma lista ou tabela considerando todos os conectores desse circuito, para onde vão e o sinal que ele manda/recebe, também é necessário adicionar se o chicote tem que ser blindado e ou trançado]*

---

## 5. Filiação
Comanda o power delivery, e recebe dados do APPS e do TSM

---

## 6. Hardware
*[Tabela de componentes necessários para a montagem do circuito]*

---

## 7. Esquemático

![Esquemático](/docs/eletrica/rtds1.jpg)

![Diagrama](/docs/eletrica/rtds2.jpg)

O circuito é dividido em duas partes principais: uma de Controle e outra responsável pelo RTDS (Ready To Drive Sound). A seção de Controle gerencia toda a lógica de operação e a sequência de partida do veículo. Para ligar o carro, o primeiro passo é acionar o botão "wakeup", que energiza os sistemas. Nesse momento, o circuito realiza uma verificação inicial, e qualquer falha existente será indicada.

Se nenhuma falha for detectada, o operador pode executar a sequência de partida. Após a conclusão bem-sucedida dessa sequência, o circuito ativa a sirene, confirmando que o carro está ligado e pronto para operar (estado RTD). Para garantir a comunicação confiável com outros sistemas, como o APPS, o circuito utiliza um bloco com portas NAND Schmitt Trigger. Essa abordagem, assim como no APPS, implementa o "debouncing" diretamente em hardware, aumentando a integridade dos dados enviados e recebidos.

## 8. Cronograma conceito-fabricação
Tempo estimado: **6 semanas**

![Cronograma2](/docs/eletrica/rtds3.jpg)

>Projetado por: Paulo Caleb, Lucas Mateus