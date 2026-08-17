# Guia para transformar “81 Bedford Street” em um CD físico

Este documento descreve como sair da versão online e chegar a um CD que toca em aparelhos comuns, com encarte impresso e embalagem. Há dois caminhos:

1. **Protótipo caseiro:** indicado para fazer de 1 a 10 cópias, testar a arte e presentear.
2. **Produção profissional:** indicado para vender, distribuir ou fabricar uma tiragem maior.

> Recomendação: faça primeiro uma cópia caseira completa. Escute o CD inteiro, monte a embalagem e revise cada texto antes de pagar uma tiragem.

---

## 1. Situação atual do projeto

O projeto já possui:

- site publicado em <https://bedford-street.vercel.app>;
- capa quadrada;
- tracklist;
- páginas com as letras das 10 músicas;
- página de créditos;
- página de agradecimento;
- exportação de cada página em PNG e PDF de **120 × 120 mm**;
- arquivos `.m4a` das 10 músicas em `public/musicas/`.

Ainda falta preparar:

- masters de áudio em WAV para fabricação profissional;
- uma contracapa de jewel case no formato de **tray card**, com lombadas;
- arte para a face do disco;
- sangria nos arquivos profissionais de impressão;
- imposição das páginas do livreto;
- prova física para verificar tamanho das fontes e cores.

### Ordem e duração

| Nº | Faixa | Duração |
|---:|---|---:|
| 01 | sunday | 2:54 |
| 02 | coffee and gray | 2:31 |
| 03 | loose plans | 4:02 |
| 04 | in between | 3:17 |
| 05 | wrong number | 3:38 |
| 06 | walking around | 3:59 |
| 07 | maybe later | 4:06 |
| 08 | small town | 2:52 |
| 09 | no rush | 5:13 |
| 10 | may 28 | 4:45 |

**Duração total aproximada: 37:17.** Isso cabe com bastante folga em um CD-R de áudio de 74 ou 80 minutos.

---

# PARTE A — Fazer um protótipo em casa

## 2. O que comprar ou conseguir

- 1 gravador de CD/DVD externo compatível com macOS, caso o computador não tenha drive;
- discos **CD-R** de boa qualidade — não use CD-RW para a cópia final;
- jewel case padrão, preferencialmente com bandeja transparente se a arte for pensada para isso;
- papel para o encarte;
- impressora colorida ou serviço de impressão rápida;
- régua metálica, estilete e base de corte;
- opcional: CD-R com superfície branca imprimível e impressora compatível com impressão em disco.

Evite etiquetas adesivas de papel coladas no CD. Uma etiqueta mal centralizada pode desbalancear o disco, soltar dentro do aparelho ou dificultar a leitura.

## 3. Fazer uma cópia de segurança

Antes de alterar áudio ou arte, guarde uma cópia de:

- `public/musicas/`;
- `src/letras.txt`;
- imagens originais;
- PDFs exportados;
- masters originais, se existirem.

Não trabalhe apenas sobre os únicos arquivos disponíveis.

## 4. Preparar o áudio para o protótipo

Os arquivos atuais são `.m4a`. Eles podem ser importados no app Música do macOS e gravados como **CD de áudio**. O programa fará a conversão necessária durante a gravação.

### Importante sobre qualidade

M4A normalmente contém áudio AAC comprimido. Converter M4A para WAV não recupera a qualidade que já foi removida pela compressão. Para uma tiragem profissional, o ideal é obter os arquivos originais em WAV ou outro formato lossless diretamente da fonte que gerou/exportou as músicas.

Para um primeiro protótipo, os M4A atuais são suficientes.

## 5. Gravar um CD de áudio no macOS

Não grave simplesmente os arquivos pelo Finder como um “disco de dados”. Um disco de dados pode não tocar em aparelhos de CD convencionais. Escolha **CD de áudio**.

Passo a passo pelo app Música:

1. Conecte o gravador externo ao Mac.
2. Abra o app **Música**.
3. Importe os dez arquivos de `public/musicas/`.
4. Crie uma playlist chamada `81 Bedford Street — master`.
5. Coloque as músicas na ordem exata de 01 a 10.
6. Confira título, artista e ordem antes de continuar.
7. Insira um CD-R vazio.
8. Selecione a playlist.
9. Use **Arquivo → Gravar Playlist em Disco**.
10. Escolha **CD de Áudio**, não CD de MP3 nem disco de dados.
11. Escolha a pausa entre faixas:
    - `0 segundos` se as transições foram pensadas para ser contínuas;
    - `2 segundos` para uma separação tradicional entre músicas.
12. Desative “Sound Check” para não alterar artificialmente os volumes já preparados.
13. Ative CD-Text, caso a opção esteja disponível e você queira gravar títulos e artista.
14. Use velocidade moderada, como 4× ou 8×, se o drive e o disco permitirem.
15. Inicie a gravação e aguarde a verificação do disco.

### Teste obrigatório do CD

Escute o disco inteiro, do começo ao fim, em pelo menos:

- um computador;
- um aparelho de CD doméstico ou portátil;
- um aparelho de carro, se possível.

Confira:

- ordem das músicas;
- início e final de cada faixa;
- ausência de cortes e estalos;
- pausas entre faixas;
- diferenças excessivas de volume;
- CD-Text, quando aplicável;
- funcionamento dos botões anterior/próxima.

## 6. Exportar o encarte atual

Abra <https://bedford-street.vercel.app> e use os botões **PDF** ou **PNG** disponíveis no topo das páginas do encarte.

Exporte:

1. Capa;
2. Faixas;
3. cada uma das 10 letras, selecionando uma música por vez;
4. Créditos;
5. Obrigada.

Use nomes numerados para não perder a ordem, por exemplo:

```text
01-capa.pdf
02-faixas.pdf
03-letra-sunday.pdf
04-letra-coffee-and-gray.pdf
05-letra-loose-plans.pdf
06-letra-in-between.pdf
07-letra-wrong-number.pdf
08-letra-walking-around.pdf
09-letra-maybe-later.pdf
10-letra-small-town.pdf
11-letra-no-rush.pdf
12-letra-may-28.pdf
13-creditos.pdf
14-obrigada.pdf
```

O PDF atual tem **120 × 120 mm**. O PNG é capturado em escala 3 e fica próximo de 300 dpi no tamanho final. Isso é adequado para uma prova, mas uma gráfica pode exigir outro padrão.

## 7. Fazer uma prova de impressão

Antes de montar um livreto completo:

1. Imprima a capa e uma das letras mais longas.
2. Nas opções da impressora, escolha **100%** ou **Tamanho real**.
3. Desative “Ajustar à página”.
4. Meça o resultado com uma régua: ele deve ter 120 × 120 mm depois do corte.
5. Leia a letra sob iluminação normal.
6. Peça para outra pessoa testar a leitura.

As letras longas podem usar fonte muito pequena porque o app reduz automaticamente o texto para caber em uma única página. Se uma página não for confortável no papel, divida aquela letra em duas páginas antes da tiragem. Não aprove uma impressão apenas olhando a tela.

## 8. Escolher o tipo de encarte

### Opção simples: cartões soltos

Para o primeiro protótipo, você pode imprimir:

- capa em um cartão de 120 × 120 mm;
- tracklist em outro cartão;
- letras em folhas separadas;
- créditos e agradecimento no verso de outras páginas.

É mais simples, mas não forma um livreto tradicional.

### Opção recomendada: livreto de 16 páginas

O conteúdo atual produz 14 páginas. Livretos dobrados e grampeados normalmente precisam ter quantidade de páginas múltipla de 4. Uma sugestão de ordem de leitura é:

1. Capa;
2. Faixas;
3. sunday;
4. coffee and gray;
5. loose plans;
6. in between;
7. wrong number;
8. walking around;
9. maybe later;
10. small town;
11. no rush;
12. may 28;
13. Créditos;
14. Obrigada;
15. página com QR code ou informações do site;
16. quarta capa do livreto.

Não reorganize manualmente as páginas em ordem de impressão. Entregue a ordem de leitura para a gráfica ou use um programa de imposição de livreto. A ordem física na folha é diferente da ordem de leitura.

## 9. Papel e acabamento para o protótipo

Sugestões iniciais — sempre faça uma prova:

- miolo: papel couché fosco ou offset entre 120 e 150 g/m²;
- capa: 170 a 250 g/m², dependendo de como o livreto será dobrado;
- impressão frente e verso;
- acabamento fosco para combinar com a estética do projeto;
- corte final de 120 × 120 mm;
- grampo canoa para livreto, se a espessura permitir.

Papel muito grosso em todas as páginas dificulta a dobra e aumenta o volume dentro do jewel case.

## 10. Montar o protótipo

1. Corte as peças usando régua metálica, estilete e base de corte.
2. Confira novamente o tamanho final.
3. Dobre e grampeie o livreto, se houver.
4. Coloque o livreto na tampa frontal do jewel case.
5. Coloque a contracapa atrás da bandeja quando ela estiver pronta.
6. Posicione o CD gravado.
7. Abra e feche a caixa para confirmar que nada prende ou rasga.
8. Fotografe o protótipo e anote tudo que precisa mudar.

---

# PARTE B — Preparar uma fabricação profissional

## 11. Escolher duplicação ou replicação

### Duplicação em CD-R

- o conteúdo é gravado em discos graváveis;
- indicada para tiragens pequenas;
- normalmente tem custo inicial menor;
- pode ser feita por gráficas e empresas de mídia física;
- aparência pode ser profissional com impressão direta na face do disco.

### Replicação industrial

- o disco é prensado a partir de uma matriz;
- é o processo tradicional de CDs comerciais;
- costuma exigir quantidade mínima maior;
- possui custo inicial de preparação;
- quantidades mínimas e preços variam por fornecedor.

Peça orçamento para pelo menos três fornecedores e confirme se o serviço inclui disco, impressão, jewel case, livreto, tray card, montagem, lacre, prova e frete.

## 12. Preparar os masters profissionais

Solicite ou exporte um master lossless de cada faixa com:

- WAV PCM;
- estéreo;
- 44,1 kHz;
- 16 bits para o master final de CD de áudio;
- sem normalização automática posterior;
- nomes começando por `01-`, `02-` etc.

Se você só tiver os M4A, pode gerar WAV tecnicamente compatível, mas isso não melhora a qualidade. Use essa conversão apenas quando não for possível obter o original lossless.

Com FFmpeg instalado no macOS, a conversão técnica seria:

```bash
mkdir -p masters-cd
for f in public/musicas/*.m4a; do
  name="${f##*/}"
  ffmpeg -i "$f" -c:a pcm_s16le -ar 44100 -ac 2 "masters-cd/${name%.m4a}.wav"
done
```

Para instalar FFmpeg via Homebrew, se necessário:

```bash
brew install ffmpeg
```

### Masterização e controle de qualidade

Antes da fabricação, confira ou contrate alguém para conferir:

- equilíbrio de volume entre as dez músicas;
- graves, agudos e imagem estéreo;
- picos e distorção;
- fades e silêncios;
- ordem definitiva;
- pausas entre faixas;
- compatibilidade mono, quando relevante;
- ausência de cliques no início e no fim.

A fábrica pode solicitar um arquivo **DDP** em vez de WAVs separados. O DDP contém áudio, ordem, índices, pausas e metadados do disco, além de mecanismos de verificação. Se a fábrica pedir DDP, use um software ou profissional de masterização que gere e valide esse pacote.

## 13. Preparar os arquivos gráficos profissionais

### Livreto frontal

- corte final: **120 × 120 mm**;
- sangria comum: 3 mm em cada lado;
- documento com sangria: **126 × 126 mm**;
- área segura: mantenha textos importantes pelo menos 5 mm para dentro do corte;
- o projeto atual já usa margem interna de 8 mm, mas não gera sangria.

### Contracapa/tray card

O jewel case padrão precisa de uma peça diferente das páginas quadradas:

- tamanho final comum: aproximadamente **150 × 118 mm**;
- inclui painel traseiro e duas lombadas;
- cada lombada costuma ter cerca de 6 mm;
- com 3 mm de sangria, a arte pode chegar a aproximadamente **156 × 124 mm**.

Essas medidas podem variar conforme o fornecedor. Baixe e use o template exato da empresa escolhida antes de finalizar a arte.

A página “Faixas” atual mede 120 × 120 mm e, portanto, **não substitui diretamente o tray card**. Ela pode ficar dentro do livreto, enquanto uma nova arte é criada para a parte traseira da caixa.

### Face do disco

Crie uma arte separada usando o template do fabricante. Ela precisa considerar:

- diâmetro externo do disco;
- furo central;
- área não imprimível;
- possível anel transparente;
- título do álbum, artista e identificação de lado/faixa quando desejado.

Nunca estime o círculo apenas visualmente. Use o gabarito do fornecedor.

### Padrão dos arquivos

Confirme com a gráfica, mas normalmente serão solicitados:

- PDF no padrão pedido pela empresa, frequentemente PDF/X;
- imagens a 300 dpi no tamanho final;
- perfil de cor CMYK indicado pela gráfica;
- fontes incorporadas ou convertidas em curvas;
- sangria e marcas de corte conforme o template;
- preto e cores configurados de acordo com as instruções da gráfica.

Os PDFs gerados pelo site são RGB e rasterizados. Eles funcionam para prova e impressão simples, mas não devem ser enviados automaticamente para fabricação profissional sem uma checagem de pré-impressão.

## 14. Conteúdo sugerido para lombadas e tray card

Lombada esquerda:

```text
LINO · 81 BEDFORD STREET
```

Lombada direita:

```text
81 BEDFORD STREET · LINO
```

No painel traseiro, inclua:

- tracklist numerada;
- duração opcional;
- nome da artista;
- ano;
- créditos essenciais;
- site: `bedford-street.vercel.app`;
- código de catálogo, se existir;
- código de barras, se necessário;
- avisos legais e selos apenas quando aplicáveis.

## 15. Metadados e identificação

Prepare uma planilha ou documento com:

- título do álbum;
- artista principal;
- título de cada faixa;
- compositores/autores;
- produtores;
- duração;
- ano;
- número de catálogo;
- ISRC de cada faixa, se houver;
- UPC/EAN do produto, se for vendido no varejo;
- texto de CD-Text.

ISRC identifica gravações; UPC/EAN identifica o produto. Nem todo protótipo precisa deles, mas distribuidores e fabricantes podem solicitar.

## 16. Direitos e créditos

Antes de vender ou distribuir cópias:

- confirme os termos da conta/plano usado para gerar as músicas no Suno;
- confirme que você possui direito de uso comercial das gravações;
- revise autoria e créditos das letras;
- confirme permissões das fotografias e imagens;
- revise nomes, locais e informações pessoais;
- mantenha registros dos arquivos originais e datas de criação;
- peça orientação jurídica profissional se houver dúvida sobre exploração comercial.

Os créditos impressos precisam corresponder à decisão final de autoria e produção. Faça essa revisão antes da prova gráfica.

## 17. Pedir orçamento à fábrica/gráfica

Envie uma mensagem contendo:

- quantidade desejada;
- CD-R duplicado ou CD replicado;
- jewel case padrão;
- bandeja transparente ou preta;
- livreto de 16 páginas, 120 × 120 mm;
- impressão colorida frente e verso;
- tray card colorido com lombadas;
- impressão direta na face do disco;
- montagem e lacre;
- entrega no seu CEP;
- necessidade de prova física ou digital;
- formato do master: WAV ou DDP.

Pergunte explicitamente:

1. Qual é o template oficial de cada peça?
2. Qual sangria e área segura são exigidas?
3. Qual perfil de cor deve ser usado?
4. Qual formato de PDF é aceito?
5. A empresa faz imposição do livreto?
6. A empresa gera ou valida DDP?
7. Há custo de prova?
8. Qual é o prazo depois da aprovação?
9. Existe tolerância de quantidade para mais ou para menos?
10. O orçamento inclui montagem, lacre, impostos e frete?

## 18. Aprovar uma prova

Não aprove apenas por uma imagem pequena enviada por mensagem. Confira:

- ortografia de todos os títulos;
- ordem das músicas;
- legibilidade das letras;
- alinhamento das lombadas;
- posição do furo na arte do disco;
- corte e sangria;
- cor da pele, preto e tons neutros;
- códigos e URL;
- créditos;
- correspondência entre master e tracklist.

Quando possível, peça uma prova física ou produza uma montagem em tamanho real antes da aprovação final.

## 19. Controle de qualidade ao receber a tiragem

Abra unidades de caixas diferentes e verifique:

- caixas quebradas ou riscadas;
- páginas invertidas ou fora de ordem;
- grampos, dobras e cortes;
- lombadas centralizadas;
- impressão do disco;
- disco preso corretamente na bandeja;
- reprodução das faixas 1, 5 e 10;
- leitura em mais de um aparelho;
- quantidade recebida.

Guarde algumas cópias fechadas e pelo menos uma cópia de referência aberta.

---

# PARTE C — Se também quiser fabricar em vinil

Um LP não usa os mesmos masters nem os mesmos arquivos gráficos do CD. Contrate ou consulte alguém com experiência em masterização para vinil.

A duração atual é compatível, em princípio, com um LP de 12 polegadas a 33⅓ rpm. Uma divisão inicial seria:

### Lado A — aproximadamente 16:22

1. sunday
2. coffee and gray
3. loose plans
4. in between
5. wrong number

### Lado B — aproximadamente 20:55

6. walking around
7. maybe later
8. small town
9. no rush
10. may 28

O lado B é mais longo e pode exigir ajustes de nível, graves ou espaçamento dos sulcos. A fábrica e o engenheiro de corte devem aprovar a divisão.

Para LP também será necessário:

- master específico para vinil;
- indicação clara de lado A e lado B;
- capa de aproximadamente 12 polegadas, usando template do fabricante;
- rótulos centrais do lado A e B;
- lombada própria;
- sangria e área segura específicas;
- teste de sequência e duração por lado;
- prova de corte, quando disponível.

A capa atual de 120 × 120 mm não deve ser simplesmente ampliada para LP. Ela precisará ser refeita em alta resolução no template correto.

---

# Plano recomendado para este projeto

## Etapa 1 — Protótipo

- [ ] Obter um gravador externo e um CD-R.
- [ ] Importar os 10 M4A no app Música.
- [ ] Gravar um CD de áudio na ordem correta.
- [ ] Escutar o disco inteiro em dois aparelhos.
- [ ] Exportar todas as páginas do encarte em PDF.
- [ ] Imprimir capa e a letra mais longa em tamanho real.
- [ ] Avaliar legibilidade.
- [ ] Montar uma caixa de teste.

## Etapa 2 — Completar o design

- [ ] Criar duas páginas adicionais para fechar um livreto de 16 páginas.
- [ ] Criar o tray card de 150 × 118 mm usando o template da gráfica.
- [ ] Criar as duas lombadas.
- [ ] Criar a arte da face do disco.
- [ ] Adicionar o site ou QR code, se desejado.
- [ ] Revisar créditos e ortografia.
- [ ] Fazer uma prova física completa.

## Etapa 3 — Master profissional

- [ ] Obter os arquivos lossless originais.
- [ ] Fazer revisão de mix/master e volumes.
- [ ] Definir pausas e sequência definitiva.
- [ ] Gerar WAV 44,1 kHz/16-bit ou DDP validado.
- [ ] Preparar metadados e CD-Text.

## Etapa 4 — Fabricação

- [ ] Escolher quantidade e processo.
- [ ] Solicitar três orçamentos.
- [ ] Baixar o template do fornecedor escolhido.
- [ ] Adaptar as artes com sangria e CMYK.
- [ ] Enviar master e arquivos gráficos.
- [ ] Aprovar prova digital e, se possível, física.
- [ ] Autorizar produção.
- [ ] Conferir a tiragem recebida.

---

# Arquivos finais que devem existir

Uma pasta final de produção pode seguir esta estrutura:

```text
81-bedford-street-fisico/
├── audio/
│   ├── 01-sunday.wav
│   ├── 02-coffee-and-gray.wav
│   ├── 03-loose-plans.wav
│   ├── 04-in-between.wav
│   ├── 05-wrong-number.wav
│   ├── 06-walking-around.wav
│   ├── 07-maybe-later.wav
│   ├── 08-small-town.wav
│   ├── 09-no-rush.wav
│   └── 10-may-28.wav
├── ddp/
│   └── pacote-ddp-validado/
├── arte/
│   ├── livreto-16-paginas.pdf
│   ├── tray-card.pdf
│   └── face-do-disco.pdf
├── provas/
│   ├── prova-digital.pdf
│   └── fotos-da-prova-fisica/
└── documentos/
    ├── tracklist-e-metadados.pdf
    ├── creditos-finais.pdf
    └── aprovacao-da-fabrica.pdf
```

Não é necessário criar o DDP por conta própria se a empresa de masterização ou fabricação fizer essa etapa. O importante é confirmar quem será responsável e receber uma versão validada antes da produção.
