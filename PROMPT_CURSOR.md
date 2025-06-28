PRE: Se comunique em portugues

Este projeto veio do Replit e preciso remover todas as personalizações específicas da plataforma para rodar localmente. Por favor:

## Coleta de informações
Pergunte de maneira cadenciada cada pergunta abaixo.
1. Primeiro Solicite se ira usar API de conversao do facebook, pixel (nao receomendado) ou nenhum pixel necessario agora.
2. Depois Solicite se é uma landing page estatica (uma pagina) ou site instiucional?

## Comportamento
Após coleta de informações, uma analise completa do projeto deve ser feita para ter contexto dos arquivos.

O site deve ser exposto na porta 80, api do facebook na porta 5000 e criado na .env as variaveis necessarias.
Solicite se sera implementado no Coolify.

1. **Remova dependências específicas do Replit:**
   - Remova @replit/vite-plugin-cartographer e @replit/vite-plugin-runtime-error-modal do package.json
   - Remova quaisquer outras dependências específicas do Replit

2. **Limpe a configuração do Vite:**
   - Remova plugins específicos do Replit do vite.config.ts
   - Mantenha apenas os plugins essenciais (React, etc.)
   - Corrija problemas de __dirname em módulos ES usando import.meta.url

3. **Remova arquivos específicos do Replit:**
   - Delete .replit
   - Delete replit.md
   - Remova quaisquer outros arquivos de configuração específicos

4. **Ajuste scripts para funcionar localmente:**
   - Use cross-env para compatibilidade Windows nos scripts
   - Configure portas via variáveis de ambiente (FRONTEND_PORT e BACKEND_PORT, FACEBOOK_API_KEY)
   - Mantenha scripts separados para frontend e backend se necessário

5. **Configure variáveis de ambiente:**
   - Crie um arquivo env.example com configurações padrão
   - Configure FRONTEND_PORT e BACKEND_PORT, FACEBOOK_API_KEY (para domínio customizável no log), SERVER_HOST (para host do Express), e outras variáveis necessárias

6. **Ajuste o log de inicialização:**
   - O log do servidor deve exibir:
     - O domínio customizado se DOMAIN estiver definido
     - O endereço local (localhost)
     - O endereço de rede (IP local)

7. **Otimize SEO:**
   - Remova scripts específicos do Replit do HTML
   - Adicione meta tags Open Graph e Twitter completas (og:image, twitter:image, etc.)
   - Crie robots.txt e sitemap.xml
   - Adicione favicon e web manifest
   - Melhore structured data (schema.org)
   - Adicione meta tags de performance (preconnect, dns-prefetch)

8. **Teste e documente:**
   - Verifique se npm run dev funciona
   - Atualize o README.md com instruções claras para rodar localmente
   - Inclua seção de solução de problemas

9. **Remova todas referencias a banco de dados**
   - Remova toda mencao e referencia a banco de dados

10. 

O objetivo é ter uma aplicação que rode perfeitamente localmente sem dependências do Replit, mantendo toda a funcionalidade original e com SEO otimizado.