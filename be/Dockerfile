# Stage 1: Build stage
FROM golang:1.18-buster AS builder

WORKDIR /project
COPY . ./
RUN cd /project/cmd && go build -o /project/bin/be

# Stage 2: Run stage
FROM debian:buster-slim

# Copy compiled binary from the builder stage
COPY --from=builder /project/bin/be /app/

# Copy necessary data files
COPY --from=builder /project/cmd/kodata /kodata

# Set necessary environment variable
ENV KO_DATA_PATH /kodata

# Specify the User 
USER root

# Expose the application on port 8081
EXPOSE 8081

# Set the working directory in the container
WORKDIR /app

# Command to run the executable
ENTRYPOINT ["/app/be"]
