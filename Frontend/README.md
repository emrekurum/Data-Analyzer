# Data Analyzer Frontend

This is the frontend application for Data Analyzer, built with **React Native** and **Expo**, following **Clean Architecture** principles.

## Quick Start

```bash
# Install dependencies
npm install

# Start the Expo development server
npm start
```

## Project Structure

```
Frontend/
├── src/
│   ├── domain/           # Business logic layer
│   │   ├── entities/     # Domain entities
│   │   ├── repositories/ # Repository interfaces
│   │   └── usecases/     # Business use cases
│   ├── data/             # Data layer
│   │   ├── api/          # API client
│   │   └── repositories/ # Repository implementations
│   └── presentation/     # Presentation layer
│       ├── components/   # React components
│       └── screens/      # Screen components
├── App.tsx               # Main app component
└── package.json          # Dependencies
```

## Environment Setup

1. Copy `.env.example` to `.env`
2. Update `API_URL` with your backend URL:
   - Android Emulator: `http://10.0.2.2:5000/api`
   - iOS Simulator: `http://localhost:5000/api`
   - Physical Device: `http://YOUR_IP:5000/api`

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Architecture

This project follows Clean Architecture principles. See the main [README.md](../README.md) and [ARCHITECTURE.md](../ARCHITECTURE.md) for detailed information.

## Dependencies

- **Expo** - Development platform
- **React Native** - Mobile framework
- **TypeScript** - Type safety
- **Axios** - HTTP client
- **React Native Chart Kit** - Data visualization

For more information, see the main project [README.md](../README.md).
