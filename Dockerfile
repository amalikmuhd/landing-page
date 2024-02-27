# Start from golang base image
FROM node:14.15.4-alpine3.12

# Set working directory
WORKDIR /landing_page

#Install curl so we can use healthcheck
RUN apk --no-cache add curl


# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

CMD ["npm", "run", "dev"]
