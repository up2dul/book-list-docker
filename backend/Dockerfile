# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Install nodemon as global
RUN npm i -g nodemon 

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the files from the current directory on the host to the /app directory in the container
COPY package.json package-lock.json ./

# Run the `npm i` command inside the container to install the dependencies
RUN npm i

# Copy the files from the current directory on the host to the /app directory in the container
COPY . .

# Expose port 4000 on the container
EXPOSE 4000

# Set the default command to run when the container starts
# CMD ["node", "app.js"]

# Run the `npm run dev` command inside the container
CMD ["npm", "run", "dev"]