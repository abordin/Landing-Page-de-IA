# Landing Page IA

Landing page estática otimizada para conversão com foco em soluções de Inteligência Artificial.

https://whimsical.com/pre-imersao-Q92E38JMCQrritwrm5earC

## 🚀 Características

- **Landing Page Estática**: Uma página otimizada para conversão
- **SEO Otimizado**: Meta tags completas, sitemap, robots.txt
- **Performance**: Otimizada para carregamento rápido
- **Responsivo**: Design adaptável para todos os dispositivos
- **Acessível**: Seguindo as melhores práticas de acessibilidade

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd landing-page-ia
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp env.example .env
   ```
   
   Edite o arquivo `.env` conforme necessário:
   ```env
   FRONTEND_PORT=3000
   NODE_ENV=development
   SITE_TITLE=Landing Page IA
   SITE_DESCRIPTION=Landing page otimizada para conversão
   SITE_URL=http://localhost:3000
   ```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em: http://localhost:3000

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
landing-page-ia/
├── client/                 # Frontend React
│   ├── public/            # Arquivos estáticos
│   │   ├── robots.txt     # Configuração para crawlers
│   │   ├── sitemap.xml    # Sitemap para SEO
│   │   └── site.webmanifest # Manifest para PWA
│   ├── src/               # Código fonte
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   └── main.tsx       # Ponto de entrada
│   └── index.html         # HTML principal
├── shared/                # Código compartilhado
│   └── lead-schema.ts     # Schema de validação
├── attached_assets/       # Assets anexados
├── vite.config.ts         # Configuração do Vite
├── tailwind.config.ts     # Configuração do Tailwind
└── package.json           # Dependências e scripts
```

## 🎨 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados

## 📱 SEO e Performance

### Meta Tags Implementadas
- Open Graph para redes sociais
- Twitter Cards
- Meta tags de performance
- Canonical URLs

### Arquivos de SEO
- `robots.txt` - Diretrizes para crawlers
- `sitemap.xml` - Mapa do site
- `site.webmanifest` - Manifest para PWA

### Otimizações de Performance
- Preconnect para fontes
- DNS prefetch
- Lazy loading de componentes
- Otimização de imagens

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build
- `npm run lint` - Executa o linter
- `npm run check` - Verifica tipos TypeScript
- `npm run format` - Formata o código

## 🐛 Solução de Problemas

### Porta 3000 já em uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de build
```bash
npm run check
npm run lint
```

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um email para suporte@landingpageia.com ou abra uma issue no GitHub. 