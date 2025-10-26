FROM node:18-alpine  

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production  

COPY . .  

ENV NODE_ENV=production  

CMD ["node", "index.js"] 