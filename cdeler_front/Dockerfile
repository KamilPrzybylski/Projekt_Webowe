# Use an official Node.js runtime as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use a smaller base image to serve the application
FROM node:16-alpine

# Install serve globally
RUN npm install -g serve

# Copy the built application from the build stage
COPY --from=build /app/dist /app/dist

# Set the working directory to the build output directory
WORKDIR /app/dist

# Expose the port the app runs on
EXPOSE 5173

# Serve the application
CMD ["serve", "-s", ".", "-l", "5173"]