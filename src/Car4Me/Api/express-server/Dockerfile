# Usa versão LTS e leve
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /express-server

# Copia apenas ficheiros de dependências primeiro
COPY package*.json ./

# Instala dependências
RUN npm install --production

# Copia o resto do código
COPY . .

# Expõe a porta da aplicação
EXPOSE 8080

# Comando de arranque
CMD ["node", "index.js"]