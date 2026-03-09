# Battery Management System (BMS)

## 1 - Overview do circuito

O Battery Management System é baseado no módulo BQ79616EVM, capaz de monitorar, proteger, balancear e comunicar células de baterias de íon-lítio.

Ele mede com alta precisão as tensões individuais de até 16 células (máx. 80 V por módulo), realiza balanceamento passivo de carga e fornece mais alguns dados importantes a mais, como por exemplo o State of Charge e State of Health, ambos autoexplicativos.

O sistema pode operar de forma empilhável (stack), permitindo a conexão em série de até 35 módulos para pacotes de baterias de alta tensão (até 2400 V). Mas no nosso caso só serão utilizados 4 módulos em stack, capazes de monitorar e balancear seis sessões.

---

## 2 - Regulamento sobre esse circuito

De acordo com o **FSAE Rules 2026**, aplicam-se as seguintes regras:

- O BMS deve monitorar tensão e temperatura quando:
    1. o Tractive System estiver ativo;
    2. a bateria estiver conectada a um carregador.

- Deve haver isolamento galvânico entre módulos (module-to-module) conforme aprovado no documento ESF;
- O balanceamento de células não pode funcionar quando o circuito de desligamento (Shutdown Circuit) estiver aberto.

- O BMS deve detectar:
    1. tensão fora dos valores permitidos;
    2. corrente excessiva ou interrupção nos fios de medição;
    3. temperatura fora dos limites;
    4. medições ausentes ou interrompidas;
    5. falha interna do próprio BMS.

- Se qualquer uma das condições acima for detectada, o BMS deve:
    1. abrir o circuito de desligamento (Shutdown Circuit);
    2. acender o BMS Indicator Light e o Tractive System Status Indicator; esses devem permanecer acesos até acontecer algum reset manual. 

- O LED ou luz indicadora do BMS deve ser:
    1. Vermelha;
    2. claramente visível para o piloto, mesmo com luz solar intensa;
    3. rotulada com “BMS”.

- As tensões de cada célula devem ser medidas; quando células estiverem conectadas em paralelo, apenas uma medida de tensão por paralelo é necessária.

- Temperaturas críticas devem ser monitoradas:
    1. pelos pontos críticos da bateria (a nossa especificamente apresenta as seguintes temperaturas críticas: Qualquer valor **<-20ºC e >60ºC**);
    2. os limites devem ser o menor entre: limite máximo do datasheet da célula, e 60°C (no datasheet das nossas células não é recomendado utilizá-las caso a temperatura exceda 50º).

- Sensores de temperatura (termistors) devem estar em contato direto com o terminal negativo ou muito próximos **(≤ 10 mm)** de bus bar negativas ou ponto de solda do terminal negativo. 

- Deve haver monitoramento de pelo menos 20% das células quanto à temperatura, distribuídas igualmente pelo contêiner da Tractive Battery (mais conhecido como acumulador).

---

## 3 - Local e fixação

Os módulos obrigatoriamente precisam estar vinculados no HV, e mais especificamente no acumulador, encontramos a melhor solução de acoplar as placas em stack na tampa do acumulador, juntamente com seus chicotes.

---

## 4 - Chicote

| Conector | Função | Sinal | Observações |
|----------|--------|-------|-------------|
| J15 | Conexão das células da bateria | CELL0–CELL16 | Mede tensões individuais e realiza balanceamento. |
| J17 | Interface UART com host/PC | TX, RX, nFAULT, GND | Comunicação com microcontrolador ou PC. |
| J4 / J5 | GPIO / Termistores | GPIO1–GPIO8 | Entradas configuráveis para sensores de temperatura. *(Recomenda-se chicote dedicado)* |
| J10 / J11 | Comunicação alta/baixa (stack) | COMH_P/N, COML_P/N | Barramento diferencial isolado para empilhamento de módulos. |

- **J10** (envia comunicação) e **J11** (recebe comunicação):

  Precisam estar trançados (nossos atuais são trançados) para reduzir ruídos EMI.
  Idealmente, esses cabos deveriam ser blindados, pois algumas placas não estavam
  comunicando corretamente entre si.

- **J15**:

  Conexão HV do módulo. O chicote precisa ser devidamente blindado devido à alta
  tensão, além de minimizar interferências eletromagnéticas.

---

## 5 - Filiação

- Envia/recebe dados para o TMS, localizado no aquário;
- No stack, comunica-se com as outras placas por meio de um diferencial isolado (daisy chain).
- Dados: tensão das células, temperatura (via GPIO/termistores) e status de balanceamento.
- Envia sinal para o *Shutdown* em caso de falhas ou situações críticas, como: sub e sobretensão, sub e sobrecorrente, falhas internas do BMS e temperaturas críticas.

---

## 6 - Hardware

O necessário para montar o circuito basicamente são os componentes do módulo:
**BQ79616EVM-021 Bill of Materials (BOM)**: disponível nesta planilha do excel:

[Planilha](https://unbbr-my.sharepoint.com/:x:/g/personal/232002682_aluno_unb_br/IQDZPonYBuYGSKthldDqnKtnAQlwohg9fcs06xLibJ2W-Dk?rtime=9JlS6Bpj3kg) .

---

## 7 - Esquemático

É um esquemático imenso para colocar aqui, acaba perdendo muita qualidade, mas está disponível no **datasheet da Texas Instruments** com o seguinte diretório:


`User's Guide - BQ79616-Q1, BQ75614-Q1, and BQ79656-Q1 - Evaluation Modules (Seção 8.1)`

---

## 8 - Cronograma conceito-fabricação

Tempo estimado: **25 semanas** (considerando a insuficiência de tempo do Daniel e do Felipe que estão com outras prioridades).

![Tabela](/docs/eletrica/bms1.jpg)


> Projetado por: Gustavo Resende, Daniel Ribeiro e Felipe Andrade

