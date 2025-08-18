# Projeto CI/CD com Node.js, Jest e Vercel 🚀

Este projeto tem como objetivo demonstrar a configuração de um **pipeline de Integração Contínua e Deploy Contínuo (CI/CD)** usando **GitHub Actions** para testes automatizados e **Vercel** para deploy automático.

---

## 📖 Sobre o Projeto
- Desenvolvido em **Node.js**
- Testes automatizados com **Jest**
- Deploy automático via **Vercel**

---

## ⚙️ Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/ProjetoCICD.git
   cd ProjetoCICD
2. Instale as dependências:

npm install


3. Rode os testes localmente:

npm test


4. Rode o projeto:

node src/index.js

🧪 Pipeline CI/CD

O pipeline está configurado no GitHub Actions:

Ao dar push ou abrir um Pull Request:

O workflow executa o npm install

Roda os testes automatizados (npm test)

Se os testes passarem, a Vercel realiza o deploy automático da aplicação.

Arquivo de workflow:
.github/workflows/ci.yml

🚀 Deploy

O projeto está disponível em produção via Vercel:
👉https://projeto-cicd-sable.vercel.app/

🤝 Como Contribuir

Faça um fork do projeto

Crie uma nova branch:

git checkout -b minha-feature


Faça suas alterações e rode os testes:

npm test


Faça commit das mudanças:

git commit -m "Adiciona minha feature"


Envie para o seu repositório:

git push origin minha-feature


Abra um Pull Request 🚀
