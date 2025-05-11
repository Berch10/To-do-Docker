# Basis-Image
FROM node:20-alpine

# Arbeitsverzeichnis setzen
WORKDIR /app

# TypeScript-Compiler global installieren
RUN npm install -g typescript

# package.json-Dateien kopieren
COPY client_app/package*.json client_app/
COPY server_api/package*.json server_api/

# Nur Produktionsabhängigkeiten installieren
RUN npm install --omit=dev --prefix client_app \
 && npm install --omit=dev --prefix server_api

# Restliche Dateien kopieren
COPY . .

# Backend kompilieren
RUN npx tsc --build server_api/tsconfig.json

# Umgebungsvariable HOST setzen
ENV HOST=0.0.0.0

# Port für außen freigeben
EXPOSE 8080

# Server starten
CMD ["node", "server_api/build/start.js"]
