# Use the official Node.js image as the base image
FROM node:14

# Create and set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies (node_modules)
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your Node.js application will run on (443 for HTTPS)
EXPOSE 443

# Command to start the Node.js application
CMD ["node", "server.js"]
