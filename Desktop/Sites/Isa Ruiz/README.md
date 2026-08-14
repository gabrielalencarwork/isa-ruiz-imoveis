# Isa Ruiz — Corretora de Imóveis & Investidora Imobiliária

Website institucional de alto padrão para **Isa Ruiz (@isaruiz.imoveis)** em **Araçatuba/SP**, desenvolvido com estética Feminine Luxury, cores champanhe metálico e tom nude acetinado, formulário interativo de qualificação de compradores, simulador de crédito e fundo em vídeo animado com opacidade de 60%.

---

## 📁 Estrutura de Arquivos Organizada para GitHub

Para publicar no **GitHub** e fazer deploy no **Vercel** ou hosting de sua preferência, suba **TODOS** os seguintes arquivos e pastas do diretório `C:\Users\User\Desktop\Sites\Isa Ruiz`:

```
Isa Ruiz/
├── index.html                  <- Página principal do site
├── package.json                <- Dependências e scripts do projeto (Vite)
├── vite.config.js              <- Configuração do bundler Vite
├── vercel.json                 <- Configuração de rotas para deploy no Vercel
├── .gitignore                  <- Arquivos ignorados pelo Git (node_modules, etc.)
├── README.md                   <- Documentação do projeto
├── assets/                     <- Pasta de Mídias e Assets
│   ├── favicon.svg             <- Favicon oficial com monograma I/R
│   ├── isa-ruiz-logo.svg       <- Logotipo principal IR
│   ├── isa-ruiz-logo-white.svg <- Logotipo branco para rodapé
│   ├── isa-ruiz-hero-portrait.jpg <- Foto executiva de perfil da Isa Ruiz
│   └── hero-bg-video.mp4       <- Vídeo de fundo da Hero section (60% opacidade)
├── public/                     <- Assets estáticos públicos
│   ├── favicon.svg
│   ├── isa-ruiz-logo.svg
│   ├── isa-ruiz-logo-white.svg
│   ├── isa-ruiz-hero-portrait.jpg
│   └── hero-bg-video.mp4
└── src/
    ├── assets/                 <- Assets compilados pelo Vite
    │   ├── favicon.svg
    │   ├── isa-ruiz-logo.svg
    │   ├── isa-ruiz-logo-white.svg
    │   ├── isa-ruiz-hero-portrait.jpg
    │   └── hero-bg-video.mp4
    ├── css/                    <- Estilos CSS
    │   ├── main.css            <- Design System, tokens e reset
    │   ├── components.css      <- Navbar, Hero, Wizard, Imóveis, Vídeo, Simulador
    │   └── responsive.css      <- Responsividade mobile estrita (0% side-scroll)
    └── js/                     <- Módulos JavaScript
        ├── app.js              <- Menu mobile, animações e WhatsApp popup
        ├── wizard.js           <- Formulário interativo de qualificação em 5 passos
        └── simulator.js        <- Simulador de financiamento imobiliário
```

---

## 🚀 Como Subir para o GitHub (Passo a Passo)

### 1️⃣ Copiar Mídias para as Pastas `src/assets` e `public`
Certifique-se de que os dois arquivos de mídia baixados estejam presentes nas pastas `src/assets/` e `public/`:
- 🎥 **Vídeo:** `Criar_movimento_de_câmera_202608141701.mp4` -> Renomeado/salvo como `hero-bg-video.mp4`
- 🖼️ **Foto:** Foto da Isa em blazer preto executivo -> Renomeada/salva como `isa-ruiz-hero-portrait.jpg`

### 2️⃣ Comandos Git para Enviar ao GitHub
Abra o terminal na pasta `C:\Users\User\Desktop\Sites\Isa Ruiz` e execute:

```bash
# 1. Inicializar o repositório Git (caso ainda não esteja inicializado)
git init

# 2. Adicionar todos os arquivos organizados
git add .

# 3. Criar o commit inicial
git commit -m "feat: site institucional completo Isa Ruiz com responsividade mobile e vídeo background"

# 4. Vincular ao seu repositório no GitHub (substitua o link pelo seu repositório)
git remote add origin https://github.com/SEU-USUARIO/isa-ruiz-imoveis.git

# 5. Definir a branch principal e fazer push
git branch -M main
git push -u origin main
```

---

## 💻 Desenvolvimento Local

```bash
# Instalar dependências (opcional)
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

Desenvolvido por **Alien - Marketing Inteligente**.
