FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npx prisma generate 
COPY . .
RUN npm run build 
EXPOSE 3000
CMD ["npm", "start"]