# Data Analyzer

A modern e-commerce data analysis application built with **Clean Architecture** principles, featuring a React Native (Expo) frontend and Node.js/Express backend with PostgreSQL database.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Product Management**: Add products with name, price, quantity, and category
- **Sales Analytics**: Visualize sales data by category using interactive charts
- **Clean Architecture**: Well-structured codebase following Clean Architecture principles
- **Type Safety**: TypeScript support in the frontend
- **Cross-Platform**: Works on iOS, Android, and Web using Expo
- **RESTful API**: Well-designed backend API with proper error handling
- **Database Integration**: PostgreSQL database with proper schema and indexes

## 🏗️ Architecture

This project follows **Clean Architecture** principles, which separates the code into distinct layers:

### Frontend Architecture

```
Frontend/
├── src/
│   ├── domain/           # Business logic layer
│   │   ├── entities/     # Domain entities (Product, SalesData)
│   │   ├── repositories/ # Repository interfaces
│   │   └── usecases/     # Business use cases
│   ├── data/             # Data layer
│   │   ├── api/          # API client
│   │   └── repositories/ # Repository implementations
│   └── presentation/     # Presentation layer
│       ├── components/   # React components
│       └── screens/      # Screen components
```

### Backend Architecture

```
Backend/
├── src/
│   ├── domain/           # Business logic layer
│   │   ├── entities/     # Domain entities
│   │   └── repositories/ # Repository interfaces
│   ├── application/      # Application layer
│   │   └── usecases/     # Application use cases
│   ├── infrastructure/   # Infrastructure layer
│   │   ├── database/     # Database client and schema
│   │   └── repositories/ # Repository implementations
│   └── presentation/     # Presentation layer
│       ├── controllers/  # Request handlers
│       ├── routes/       # API routes
│       └── middleware/   # Express middleware
```

### Layer Dependencies

- **Presentation** → **Application** → **Domain**
- **Infrastructure** → **Domain**
- **Data** → **Domain**

This ensures that business logic is independent of frameworks and external dependencies.

## 🛠️ Tech Stack

### Frontend
- **React Native** (0.76.5) - Mobile framework
- **Expo** (~52.0.0) - Development platform
- **TypeScript** - Type safety
- **React Native Chart Kit** - Data visualization
- **Axios** - HTTP client
- **React Native Picker** - Form inputs

### Backend
- **Node.js** (>=18) - Runtime environment
- **Express.js** (5.1.0) - Web framework
- **PostgreSQL** - Relational database
- **pg** - PostgreSQL client
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)
- **Expo CLI** (optional, for development)
- **Git**

For mobile development:
- **iOS**: Xcode (macOS only)
- **Android**: Android Studio

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd data-analyzer
```

### 2. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

## ⚙️ Configuration

### Backend Configuration

1. Copy the environment example file:

```bash
cd backend
cp .env.example .env
```

2. Edit `.env` with your database credentials:

```env
PORT=5000
NODE_ENV=development

PG_USER=your_db_user
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_db_password
PG_PORT=5432
```

### Frontend Configuration

1. Copy the environment example file:

```bash
cd Frontend
cp .env.example .env
```

2. Edit `.env` with your API URL:

```env
# For development (Android Emulator)
API_URL=http://10.0.2.2:5000/api

# For iOS Simulator
API_URL=http://localhost:5000/api

# For physical device (replace with your computer's IP)
API_URL=http://192.168.1.100:5000/api
```

## 🗄️ Database Setup

### 1. Create PostgreSQL Database

```sql
CREATE DATABASE your_database_name;
```

### 2. Run Database Schema

```bash
cd backend
psql -U your_db_user -d your_database_name -f src/infrastructure/database/schema.sql
```

Or manually execute the SQL in `backend/src/infrastructure/database/schema.sql`.

## 🏃 Running the Application

### Start the Backend Server

```bash
cd backend
npm start
# or for development with auto-reload
npm run dev
```

The server will start on `http://localhost:5000`

### Start the Frontend Application

```bash
cd Frontend
npm start
```

This will start the Expo development server. You can then:

- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator
- Scan the QR code with Expo Go app on your physical device
- Press `w` to open in web browser

### Running on Physical Device

1. Ensure your device and computer are on the same network
2. Update `Frontend/.env` with your computer's IP address
3. Update `backend/.env` if needed
4. Start both servers
5. Scan the QR code with Expo Go app

## 📁 Project Structure

```
data-analyzer/
├── Frontend/                 # React Native (Expo) frontend
│   ├── src/
│   │   ├── domain/          # Domain layer
│   │   │   ├── entities/    # Product, SalesData entities
│   │   │   ├── repositories/# Repository interfaces
│   │   │   └── usecases/    # Business use cases
│   │   ├── data/            # Data layer
│   │   │   ├── api/         # API client
│   │   │   └── repositories/# Repository implementations
│   │   └── presentation/    # Presentation layer
│   │       ├── components/  # React components
│   │       └── screens/     # Screen components
│   ├── App.tsx              # Main app component
│   ├── app.json             # Expo configuration
│   ├── package.json         # Frontend dependencies
│   └── tsconfig.json        # TypeScript configuration
│
├── backend/                  # Node.js/Express backend
│   ├── src/
│   │   ├── domain/          # Domain layer
│   │   │   ├── entities/    # Product entity
│   │   │   └── repositories/# Repository interfaces
│   │   ├── application/     # Application layer
│   │   │   └── usecases/    # Application use cases
│   │   ├── infrastructure/  # Infrastructure layer
│   │   │   ├── database/    # Database client and schema
│   │   │   └── repositories/# Repository implementations
│   │   └── presentation/    # Presentation layer
│   │       ├── controllers/ # Request handlers
│   │       ├── routes/      # API routes
│   │       └── middleware/  # Express middleware
│   ├── server.js            # Server entry point
│   └── package.json         # Backend dependencies
│
├── README.md                # This file
└── LICENSE                  # MIT License
```

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Endpoints

#### Health Check

```http
GET /health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Add Product

```http
POST /api/add-product
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Laptop",
  "price": 999.99,
  "quantity": 10,
  "category": "Electronics"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product added successfully",
  "data": {
    "id": 1,
    "name": "Laptop",
    "price": "999.99",
    "quantity": 10,
    "category": "Electronics",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Product name is required"
}
```

#### Get Sales Data

```http
GET /api/get-sales-data
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "category": "Electronics",
      "total_sales": "9999.90"
    },
    {
      "category": "Clothing",
      "total_sales": "5000.00"
    }
  ]
}
```

## 🧪 Testing

### Frontend Tests

```bash
cd Frontend
npm test
```

### Backend Tests

```bash
cd backend
npm test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for frontend code
- Write meaningful commit messages
- Add comments for complex logic
- Follow Clean Architecture principles

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Clean Architecture principles by Robert C. Martin
- Expo team for the amazing development platform
- React Native community for excellent libraries

## 📞 Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Made with ❤️ using Clean Architecture**

