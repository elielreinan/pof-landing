# Publicação da landing page

Esta pasta pode ser publicada de forma independente: o `index.html`, as imagens,
o teaser e os downloads usam apenas arquivos incluídos aqui. Não é necessário
manter a pasta do projeto Godot no servidor.

## Publicar

1. Envie **todo o conteúdo** de `landing-page` para o provedor de hospedagem,
   preservando a estrutura de `assets` e `downloads`.
2. Configure `index.html` como página inicial. O site não requer build ou
   servidor de aplicação; hospedagem estática com HTTPS é suficiente.
3. Antes de divulgar, substitua os arquivos em `downloads` pelo APK assinado e
   pelo instalador `.exe` da versão lançada. O APK deve se chamar `Path of
   Flames.apk`; mantenha os nomes dos arquivos sincronizados com os links e
   versões exibidos em `index.html`.
4. Teste a página publicada em computador e celular e confirme que os dois
   downloads começam corretamente.

## Conteúdo

- `assets/`: identidade visual, mapas do jogo e teaser animado.
- `downloads/`: pacotes Android e Windows para distribuição.
- `index.html`: conteúdo, estilos e links da página.
- `script.js`: atualização do ano no rodapé.
- `chronicles_of_aethelgard.html`: referência visual original; não é a página
  inicial publicada.

O teaser é uma animação criada com cenários reais do jogo, não uma gravação de
gameplay. Para quem prefere movimento reduzido, a página mostra uma imagem
estática do Porto de Coral.
