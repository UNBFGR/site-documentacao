# Battery Management System (BMS)

## Overview do circuito

O **Battery Management System (BMS)** é baseado no módulo **BQ79616EVM**, sendo capaz de:

- Monitorar tensões individuais de até **16 células** por módulo;
- Realizar **balanceamento passivo**;
- Medir temperatura e outros parâmetros críticos;
- Estimar **State of Charge (SoC)** e **State of Health (SoH)**.

O sistema permite operação em **stack**, conectando até **35 módulos** (≈ 2400 V).

No nosso veículo, utilizamos **4 módulos**, responsáveis por monitorar **6 seções** da bateria.

---

## Regulamento sobre esse circuito

De acordo com o **FSAE Rules 2026**, aplicam-se as seguintes regras:

### Monitoramento obrigatório
O BMS deve monitorar **tensão e temperatura** quando:
- o **Tractive System** estiver ativo;
- a bateria estiver conectada a um carregador.

### Requisitos de segurança
- Deve haver **isolamento galvânico entre módulos** conforme aprovado no ESF;
- O **balanceamento de células** não pode operar com o **Shutdown Circuit** aberto.

### Detecções obrigatórias
O BMS deve detectar:
- tensão fora dos valores permitidos;
- corrente excessiva ou interrupção nos fios de medição;
- temperatura fora dos limites;
- medições ausentes ou interrompidas;
- falha interna do próprio BMS.
