const links = [
      {
        category: "Serviços",
        links: [
          { title: "Dify", url: "https://llm.estevamsouza.com.br/signin", icon: <FaRobot /> },
          { title: "Chatwoot", url: "https://chatwoot.estevamsouza.com.br/app/accounts/1/conversations/1", icon: <FaRegEnvelope /> },
          { title: "Hasura", url: "http://145.223.27.163:8585/console/login?redirect_url=%2F", icon: <FaDatabase /> },
          { title: "Evolution", url: "https://evolutionapi.estevamsouza.com.br/manager/instance/f7cfff4b-47b7-4944-b5ca-e48e6f758f4a/dashboard", icon: <FaCode /> },
          { title: "Typebot", url: "https://app.typebot.io/signin?redirectPath=/typebots?", icon: <FaRobot /> },
          { title: "n8n", url: "https://automation.estevamsouza.com.br/home/workflows", icon: <FaNetworkWired /> },
          { title: "Portainer", url: "https://portainer.estevamsouza.com.br/#!/auth", icon: <FaServer /> },
          { title: "Code Server (VSCode)", url: "http://145.223.27.163:8443/login?folder=/home/coder&to=", icon: <FaCode /> },
          { title: "VPS Hostinger", url: "https://hpanel.hostinger.com/vps/678324/overview", icon: <FaServer /> },
          { title: "EmailJS", url: "https://dashboard.emailjs.com/sign-in", icon: <FaRegEnvelope /> },
          { title: "NestJS DevTools", url: "https://devtools.nestjs.com/login", icon: <FaCode /> },
          { title: "Cloudflare", url: "https://www.cloudflare.com/pt-br/", icon: <FaCloud /> },
          { title: "Hostzone", url: "https://hostzone.com.br/", icon: <FaServer /> },
          { title: "Pi-hole", url: "http://192.168.1.140/admin/groups/clients", icon: <FaNetworkWired /> },
          { title: "DocHub", url: "https://www.dochub.com/", icon: <FaBook /> },
          { title: "Supabase", url: "https://supabase.com/dashboard/projects", icon: <FaDatabase /> },
          { title: "Leadster", url: "https://app.leadster.com.br/", icon: <FaRegEnvelope /> },
        ]
      },
      {
        category: "Portfólio",
        links: [
          { title: "Landing Page", url: "https://landingpage.estevamsouza.com.br", icon: <FaGlobe /> },
          { title: "LinkedIn", url: "https://www.linkedin.com/in/estevam-souza", icon: <FaBriefcase /> },
          { title: "Blog", url: "https://blog.estevamsouza.com.br", icon: <FaBook /> },
          { title: "Website", url: "https://www.estevamsouza.com.br", icon: <FaGlobe /> },
          { title: "Newsletter", url: "https://newsletter.estevamsouza.com.br", icon: <FaRegEnvelope /> },
          { title: "Artigos", url: "https://artigos.estevamsouza.com.br", icon: <FaBook /> },
          { title: "Setup", url: "https://setup.estevamsouza.com.br", icon: <FaDesktop /> },
          { title: "VSCode", url: "https://vscode.estevamsouza.com.br", icon: <FaCode /> },
          { title: "Git Connected", url: "https://gitconnected.com/estevam5s?configure_resume=true", icon: <FaCode /> },
          { title: "Star History", url: "https://www.star-history.com/#estevam5/estevam5s&Date", icon: <BsStarFill /> },
        ]
      },
      {
        category: "Templates & Serviços",
        links: [
          { title: "Render", url: "https://render.com", icon: <FaServer /> },
          { title: "Railway", url: "https://railway.com", icon: <FaServer /> },
          { title: "MailChimp", url: "https://mailchimp.com/pt-br", icon: <FaRegEnvelope /> },
          { title: "Envato Elements Templates", url: "https://elements.envato.com/pt-br/web-templates", icon: <FaDesktop /> },
          { title: "Template Monster", url: "https://www.templatemonster.com", icon: <FaDesktop /> },
          { title: "ThemeForest", url: "https://themeforest.net/category/all", icon: <FaDesktop /> },
          { title: "Zoho Mail", url: "https://www.zoho.com/pt-br/mail", icon: <FaRegEnvelope /> },
        ]
      },
      {
        category: "Currículo & Vagas",
        links: [
          { title: "Currículo LinkedIn", url: "https://www.linkedin.com/in/estevam-souza/overlay/1730776596333/single-media-viewer/?type=DOCUMENT&profileId=ACoAACm6b_QBezL5lfr48f3yqBlHmvETB2WMPt4", icon: <FaBriefcase /> },
          { title: "Indeed Profile", url: "https://profile.indeed.com/p/estevams-2704c7s", icon: <FaBriefcase /> },
          { title: "Remote OK", url: "https://remoteok.com", icon: <FaLaptopCode /> },
          { title: "Startup Jobs", url: "https://startup.jobs/", icon: <FaBriefcase /> },
          { title: "Glassdoor", url: "https://www.glassdoor.com.br/Vaga/index.htm", icon: <FaBriefcase /> },
          { title: "Freelancer", url: "https://www.freelancer.com/login", icon: <FaLaptopCode /> },
          { title: "Canva", url: "https://www.canva.com/", icon: <FaDesktop /> },
        ]
      },
      {
        category: "Domínios & Hosting",
        links: [
          { title: "Vercel Domains", url: "https://vercel.com/domains", icon: <FaGlobe /> },
          { title: "Registro.br", url: "https://registro.br", icon: <FaGlobe /> },
          { title: "Netlify", url: "https://www.netlify.com", icon: <FaCloud /> },
          { title: "Hostinger", url: "https://hpanel.hostinger.com/websites", icon: <FaServer /> },
          { title: "Heroku", url: "https://id.heroku.com/login", icon: <FaCloud /> },
          { title: "Streamlit", url: "https://streamlit.io/", icon: <FaCode /> },
          { title: "GoDaddy", url: "https://www.godaddy.com/pt-br/dominios", icon: <FaGlobe /> },
          { title: "HostGator", url: "https://www.hostgator.com.br/registro-de-dominio/", icon: <FaServer /> },
          { title: "Locaweb", url: "https://www.locaweb.com.br/registro-de-dominio-web/", icon: <FaGlobe /> },
          { title: "Wix Domínios", url: "https://pt.wix.com/dominio/gratis", icon: <FaGlobe /> },
          { title: "Shopify Domínios", url: "https://www.shopify.com/br/dominios", icon: <FaGlobe /> },
          { title: "Canva Domínios", url: "https://www.canva.com/pt_br/dominios/", icon: <FaGlobe /> },
          { title: "Domínio Web", url: "https://www.dominioweb.com.br/", icon: <FaGlobe /> },
          { title: "Umbler", url: "https://www.umbler.com/br/registro-de-dominio", icon: <FaGlobe /> },
          { title: "Squarespace", url: "https://domains.squarespace.com/pt", icon: <FaGlobe /> },
          { title: "Hostnet", url: "https://www.hostnet.com.br/registro-de-dominio/", icon: <FaServer /> },
          { title: "King Host", url: "https://king.host/registro-de-dominio", icon: <FaServer /> },
          { title: "Super Domínios", url: "https://superdominios.org/", icon: <FaGlobe /> },
        ]
      },
      // Continuing with more categories
      {
        category: "Desenvolvimento",
        links: [
          { title: "VSCode Web", url: "https://vscode.dev", icon: <FaCode /> },
          { title: "CodePen", url: "https://codepen.io/estevam5s", icon: <FaCode /> },
          { title: "NestJS Docs", url: "https://docs.nestjs.com", icon: <FaBook /> },
          { title: "NPM", url: "https://www.npmjs.com/", icon: <FaCode /> },
          { title: "StackBlitz", url: "https://stackblitz.com/", icon: <FaCode /> },
          { title: "Google Colab", url: "https://colab.research.google.com/", icon: <FaCode /> },
          { title: "Replit", url: "https://replit.com/~", icon: <FaCode /> },
          { title: "Gitpod", url: "https://gitpod.io/", icon: <FaCode /> },
          { title: "CodeSandbox", url: "https://codesandbox.io/", icon: <FaCode /> },
          { title: "Codeanywhere", url: "https://codeanywhere.com/solutions/collaborate", icon: <FaCode /> },
          { title: "React Icons", url: "https://react-icons.github.io/react-icons/search/#q=bitcoin", icon: <FaCode /> },
        ]
      },
      {
        category: "IoT & Desenvolvimento",
        links: [
          { title: "Alexa Skills Development", url: "https://www.amazon.com/ap/signin", icon: <FaMicrochip /> },
          { title: "Arduino", url: "https://app.arduino.cc/", icon: <FaMicrochip /> },
          { title: "AWS Free Tier", url: "https://aws.amazon.com/pt/free/", icon: <FaCloud /> },
        ]
      },
      {
        category: "Cyber Segurança",
        links: [
          { title: "TryHackMe", url: "https://tryhackme.com/r/hacktivities", icon: <FaShieldAlt /> },
          { title: "Hispy", url: "https://www.hispy.io", icon: <FaShieldAlt /> },
          { title: "Exploit-DB", url: "https://www.exploit-db.com", icon: <FaShieldAlt /> },
          { title: "Kali Forums", url: "https://forums.kali.org", icon: <FaShieldAlt /> },
          { title: "Google Hacking DB", url: "https://www.exploit-db.com/google-hacking-database", icon: <FaShieldAlt /> },
          { title: "OffSec", url: "https://www.offsec.com", icon: <FaShieldAlt /> },
          { title: "Shodan", url: "https://www.shodan.io", icon: <FaShieldAlt /> },
          { title: "WiFi Pumpkin", url: "https://wifipumpkin3.github.io/docs/getting-started", icon: <FaShieldAlt /> },
          { title: "Ngrok", url: "https://dashboard.ngrok.com/login/mfa/recovery?state=iHCMeyYIHPTE3flOPuyu2SSpN16TnFXZvKemOuZOxU7z10gEr71KwDYnCVH6EcuiyOAuAimEpEZa3nrgO4XkBoqnCROKsZS_0FTt8J847OX18gkUlR10Qz9BroSWDxd4Uy4l7vAyh_Ua1zsXoyaLEVpOZRlBEzlRoNnqKVClIhY4vOMNxnu4", icon: <FaNetworkWired /> },
        ]
      },
      {
        category: "Inteligência Artificial",
        links: [
          { title: "Claude AI", url: "https://claude.ai", icon: <FaBrain /> },
          { title: "ChatGPT", url: "https://chatgpt.com/auth/login", icon: <FaRobot /> },
          { title: "Perplexity AI", url: "https://www.perplexity.ai", icon: <FaBrain /> },
          { title: "Google Gemini", url: "https://gemini.google.com", icon: <FaBrain /> },
          { title: "Blackbox AI", url: "https://www.blackbox.ai", icon: <FaBrain /> },
          { title: "Microsoft Copilot", url: "https://copilot.microsoft.com", icon: <FaRobot /> },
          { title: "Mapify", url: "https://mapify.so/pt/editor", icon: <FaBrain /> },
          { title: "Devin AI", url: "https://www.cognition.ai/blog/introducing-devin", icon: <FaRobot /> },
          { title: "OpenAI Playground", url: "https://platform.openai.com/playground", icon: <FaBrain /> },
          { title: "CrewAI", url: "https://www.crewai.com/", icon: <FaRobot /> },
          { title: "DeepSeek", url: "https://chat.deepseek.com/", icon: <FaBrain /> },
          { title: "Grok", url: "https://grok.com/", icon: <FaRobot /> },
          { title: "V0", url: "https://v0.dev/", icon: <FaCode /> },
          { title: "Lovable", url: "https://lovable.dev/", icon: <FaCode /> },
          { title: "Bolt", url: "https://bolt.new/", icon: <FaCode /> },
        ]
      },
      // Additional categories to complete the dataset
      {
        category: "Cloud & DevOps",
        links: [
          { title: "DigitalOcean", url: "https://www.digitalocean.com", icon: <FaCloud /> },
          { title: "Termius", url: "https://account.termius.com/login", icon: <FaTerminal /> },
          { title: "Easypanel", url: "http://147.93.66.4:3000/projects/services/create", icon: <FaServer /> },
          { title: "Proxmox", url: "https://192.168.1.109:8606/#nodes/proxmox", icon: <FaServer /> },
          { title: "Proxmox Scripts", url: "https://tteck.github.io/Proxmox/#n8n-lxc", icon: <FaServer /> },
          { title: "Umbrel", url: "http://192.168.1.111/login?redirect=/", icon: <FaServer /> },
        ]
      },
      {
        category: "Educação",
        links: [
          { title: "Udemy", url: "https://www.udemy.com/", icon: <FaGraduationCap /> },
          { title: "Danki Code", url: "https://cursos.dankicode.com/login", icon: <FaLaptopCode /> },
          { title: "Origamid", url: "https://www.origamid.com/conta/", icon: <FaLaptopCode /> },
          { title: "Ignite", url: "https://hotmart.com/pt-br/marketplace/produtos/ignite-6eb3n/K83217735E", icon: <FaLaptopCode /> },
          { title: "StudoCu", url: "https://www.studocu.com/pt-br/home", icon: <FaBook /> },
          { title: "Passei Direto", url: "https://www.passeidireto.com/", icon: <FaBook /> },
          { title: "Codecademy", url: "https://www.codecademy.com/", icon: <FaCode /> },
          { title: "W3Schools", url: "https://www.w3schools.com/", icon: <FaCode /> },
          { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", icon: <FaLaptopCode /> },
          { title: "GitHub Learning Lab", url: "https://github.com/apps/github-learning-lab", icon: <FaCode /> },
        ]
      },
      {
        category: "Documentação de Código",
        links: [
          { title: "NestJS", url: "https://nestjs.com/", icon: <FaCode /> },
          { title: "Node.js", url: "https://nodejs.org/docs/latest/api/", icon: <FaCode /> },
          { title: "Prisma", url: "https://www.prisma.io/docs", icon: <FaDatabase /> },
          { title: "Sequelize", url: "https://sequelize.org/docs/v7/getting-started/", icon: <FaDatabase /> },
          { title: "NPM Docs", url: "https://docs.npmjs.com/", icon: <FaCode /> },
          { title: "DevDocs", url: "https://devdocs.io/", icon: <FaBook /> },
          { title: "Express.js", url: "https://expressjs.com/", icon: <FaCode /> },
        ]
      },
      {
        category: "Segurança & Senhas",
        links: [
          { title: "Bitwarden", url: "https://bitwarden.com", icon: <FaShieldAlt /> },
          { title: "Bitwarden Pessoal", url: "https://bitwarden.estevamsouza.com.br/#/login", icon: <FaShieldAlt /> },
          { title: "LastPass Generator", url: "https://www.lastpass.com/pt/features/password-generator", icon: <FaShieldAlt /> },
          { title: "Yubico Authenticator", url: "https://www.yubico.com/products/yubico-authenticator/#h-download-yubico-authenticator", icon: <FaShieldAlt /> },
        ]
      },
      {
        category: "Monetização",
        links: [
          { title: "GitHub Sponsors", url: "https://github.com/sponsors/estevam5s/dashboard", icon: <FaWallet /> },
          { title: "Patreon", url: "https://www.patreon.com/profile?u=148884361", icon: <FaWallet /> },
          { title: "Buy Me a Coffee", url: "https://buymeacoffee.com/estevamsl/extras", icon: <FaWallet /> },
          { title: "Stripe", url: "https://dashboard.stripe.com/login?redirect=/settings/user", icon: <FaWallet /> },
        ]
      },
      {
        category: "Treino de Código",
        links: [
          { title: "LeetCode", url: "https://leetcode.com/", icon: <FaLaptopCode /> },
          { title: "CodeWars", url: "https://www.codewars.com/", icon: <FaLaptopCode /> },
          { title: "HackerRank", url: "https://www.hackerrank.com/", icon: <FaLaptopCode /> },
        ]
      },
      {
        category: "Treino de Digitação",
        links: [
          { title: "MonkeyType", url: "https://monkeytype.com/", icon: <FaDesktop /> },
        ]
      },
      {
        category: "Carteira de Cripto",
        links: [
          { title: "Binance", url: "https://accounts.binance.com/pt-BR/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vcHQtQlIvbXkvZGFzaGJvYXJk", icon: <FaWallet /> },
          { title: "Bity Preço", url: "https://market.bitypreco.com/profile/account", icon: <FaWallet /> },
          { title: "Bity", url: "https://www.bity.com.br/", icon: <FaWallet /> },
          { title: "SafePal", url: "https://safepal.com/", icon: <FaWallet /> },
        ]
      },
      {
        category: "Armazenamento em Nuvem",
        links: [
          { title: "Dropbox", url: "https://www.dropbox.com/home", icon: <FaCloud /> },
        ]
      },
      {
        category: "VPN",
        links: [
          { title: "NordVPN", url: "https://nordaccount.com/login/identifier?challenge=4%7C9d755e33426d458992e706dfd930ee00", icon: <FaShieldAlt /> },
          { title: "Tailscale", url: "https://login.tailscale.com/admin/machines", icon: <FaNetworkWired /> },
        ]
      },
      {
        category: "Serviços de Pagamento",
        links: [
          { title: "PayPal", url: "https://www.paypal.com/signin", icon: <FaWallet /> },
        ]
      },
    ];
