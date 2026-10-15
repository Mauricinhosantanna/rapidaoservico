# Site do Rapidão Serviços (rapidaoservico.com.br)

Site estático publicado na Hostinger. Cada envio para a branch `main`
gera o site e sobe sozinho, pela esteira em `.github/workflows/publicar.yml`.

## Atualizar o site

1. Edite os arquivos em `apps/web/src`. Os textos e links principais
   ficam em `apps/web/src/data/rapidao.ts`; as seções da página, em
   `apps/web/src/components/home/`.
2. Para ver no computador antes: `npm install` e `npm run dev`, e abra
   http://localhost:3000.
3. Envie para a `main` (commit e push). Em uns 2 minutos o site está
   atualizado. O andamento aparece na aba **Actions** do GitHub.

Se a esteira ficar vermelha, o site no ar continua o anterior: nada
quebrado sobe.

## O formulário "Fale com a gente"

Envia por e-mail pelo `apps/web/public/contato.php`. O endereço que
recebe é a linha `DESTINO`, no topo desse arquivo. A caixa de e-mail
precisa existir na Hostinger.

## Configuração, uma vez só

1. **Conta FTP:** no hPanel, no site **rapidaoservico.com.br**, Arquivos >
   Contas FTP, crie uma conta com a pasta `public_html`.
2. **Segredos no GitHub:** Settings > Secrets and variables > Actions >
   New repository secret: `FTP_SERVIDOR`, `FTP_USUARIO` e `FTP_SENHA`.
3. **Primeiro envio como ensaio:** aba Actions > Publicar o site > Run
   workflow, marcando "Ensaio". Ele lista o que subiria, sem enviar. Se
   estiver certo, rode de novo sem marcar.

## Não faça

- Não coloque senhas, chaves ou `.env` no repositório.
- Não envie arquivos do aplicativo (app.rapidaoservico.com.br): ele é
  publicado por outra esteira, da InApps.
