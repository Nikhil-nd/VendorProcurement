# Smart Procurement Vendor Management System

This repository is a monorepo containing:

- Backend: Spring Boot application
- Frontend: React + Vite application

## Repository Structure

- Smart-Procurement-Vendor-Management-System-Backend
- Smart-Procurement-Vendor-Management-System-Frontend

## Prerequisites

- Java 17+ (recommended for Spring Boot projects)
- Maven (or use the provided Maven wrapper)
- Node.js 18+ and npm

## Run Backend

```bash
cd Smart-Procurement-Vendor-Management-System-Backend
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
cd Smart-Procurement-Vendor-Management-System-Backend
.\mvnw.cmd spring-boot:run
```

## Run Frontend

```bash
cd Smart-Procurement-Vendor-Management-System-Frontend
npm install
npm run dev
```

## Build

Backend:

```bash
cd Smart-Procurement-Vendor-Management-System-Backend
./mvnw clean package
```

Frontend:

```bash
cd Smart-Procurement-Vendor-Management-System-Frontend
npm run build
```

## Notes

- Backend and frontend are tracked together in this single repository.
- Configure backend and frontend environment settings as needed before deployment.
