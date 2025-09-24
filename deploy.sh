#!/bin/bash
set -e  # Faz o script parar se algum comando falhar

echo "Iniciando o deploy..."

# Exemplo: Parar e iniciar um servidor Node.js (adicione os comandos conforme sua necessidade)
# pm2 stop app || true
# pm2 start app.js --name app

# Exemplo: Copiar arquivos para outro servidor (ajuste usuário@host e caminho)
# scp -r dist/* usuario@servidor:/caminho/do/deploy

# Exemplo: Deploy estático (GitHub Pages, S3, etc)
npm run deploy

# Adicione aqui seus comandos de deploy
echo "Deploy finalizado com sucesso!"