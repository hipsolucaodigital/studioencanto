# Studio Encanto Progressivas — arquivos para hospedagem

Exportação da landing page criada para o Studio Encanto, com as unidades Salvador e Vilas do Atlântico.

## Comece por aqui

1. Extraia o ZIP para uma pasta no computador.
2. Abra `index.html` no navegador para visualizar.
3. Para publicar, envie os arquivos extraídos, mantendo `assets` como pasta. Não envie apenas o ZIP para o repositório.

O pacote contém HTML, CSS, JavaScript e imagens. Não precisa de instalação, npm, banco de dados, chave de API, conta ChatGPT ou etapa de compilação. Os caminhos internos são relativos para funcionar também em subpastas, como as usadas por projetos do GitHub Pages.

## Arquivos

| Arquivo | Função |
| --- | --- |
| `index.html` | Conteúdo, textos, contatos, menus e links |
| `style.css` | Cores, fontes, layout responsivo e animações |
| `script.js` | Menu de celular, efeitos ao rolar e ano no rodapé |
| `assets/logo.png` | Logo fornecida |
| `assets/hero.webp` | Fotografia ilustrativa da seção inicial |
| `.nojekyll` | Indica ao GitHub Pages que os arquivos já estão prontos |
| `README.md` | Este guia |

As fontes DM Sans e Italiana são carregadas pelo Google Fonts e precisam de conexão. Se esse serviço estiver indisponível, o navegador utiliza fontes alternativas. WhatsApp e Google Maps são links externos. O clique no WhatsApp abre uma conversa com mensagem preenchida; não confirma automaticamente um agendamento.

## GitHub para guardar o código

Crie um repositório na sua conta e envie o conteúdo extraído do ZIP para a raiz. O arquivo `index.html` deve ficar no primeiro nível do repositório, junto de `style.css`, `script.js` e da pasta `assets`.

Você pode usar esse repositório como origem para a Vercel ou outro serviço. Nesse caso, não é necessário ativar o GitHub Pages. Um repositório privado evita expor o histórico e o código na página do GitHub; os arquivos entregues ao navegador de um site público continuam acessíveis aos visitantes.

## Vercel com GitHub

Importe o repositório como um novo projeto na Vercel. Para ESTA exportação, configure:

| Campo | Valor |
| --- | --- |
| Framework Preset | `Other` |
| Root Directory | Raiz do repositório |
| Build Command | Vazio, sem compilação |
| Output Directory | `.` (raiz) |

Publique e verifique a URL fornecida pela Vercel. Para domínio próprio, abra as configurações de domínio do projeto, adicione o endereço e configure no seu provedor os registros DNS exibidos pela Vercel.

Nesta exportação não há uma pasta `dist`: os arquivos já estão na raiz. Por isso, não use `dist` como saída.

Como o site promove um salão, considere um plano comercial: as regras atuais da Vercel reservam Hobby ao uso pessoal não comercial.

## GitHub Pages

Compatibilidade técnica não substitui a verificação das regras do serviço. O GitHub Pages restringe o uso como hospedagem gratuita para negócios e sites voltados a transações comerciais. Para a operação comercial do salão, prefira GitHub para guardar o código e uma hospedagem apropriada ao uso comercial.

Para uma utilização permitida pelo serviço:

1. Envie os arquivos à raiz da branch `main`.
2. Abra `Settings > Pages` no repositório.
3. Em `Source`, selecione `Deploy from a branch`.
4. Escolha `main` e a pasta `/(root)`; salve.
5. Aguarde a publicação e abra a URL informada pelo GitHub.

O arquivo `.nojekyll` pode ficar oculto no gerenciador de arquivos. Preserve-o ao enviar por Git. A disponibilidade do Pages em repositórios privados depende do plano.

## Outra hospedagem

Em uma hospedagem que aceite HTML estático, envie `index.html`, `style.css`, `script.js` e a pasta `assets` para a pasta pública do domínio, frequentemente chamada `public_html`, `www` ou `htdocs`. Use o diretório indicado pelo seu provedor. Não é necessário enviar este README.

## Alterações futuras

Edite os textos e links no HTML, o visual no CSS e os comportamentos no JavaScript. Se trocar uma imagem, mantenha o nome ou atualize sua referência no HTML. Antes de publicar, confira o menu de celular, as imagens e os dois contatos de WhatsApp.

A exportação não inclui a proteção de acesso privado do ChatGPT Sites. A visibilidade será definida na nova hospedagem. Nenhuma hospedagem externa, domínio ou conta foi configurado por esta exportação. O site existente continua separado; alterações em uma cópia não atualizam automaticamente a outra.

## Documentação dos provedores

Consultada em 23/09/2026; interfaces e condições podem mudar.

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Limites do GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Configuração da Vercel: https://vercel.com/docs/builds/configure-a-build
- Git na Vercel: https://vercel.com/docs/git
- Domínios na Vercel: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- Uso comercial na Vercel: https://vercel.com/docs/limits/fair-use-guidelines
