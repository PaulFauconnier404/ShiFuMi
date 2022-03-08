FROM node:16.10.0


# Install Dependencies
COPY package*.json ./

RUN npm install 

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["node","index.js"]

