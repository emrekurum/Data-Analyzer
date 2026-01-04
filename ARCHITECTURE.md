# Clean Architecture Implementation Guide

This document explains the Clean Architecture implementation in the Data Analyzer project.

## Overview

Clean Architecture separates the application into distinct layers, each with specific responsibilities. This ensures that business logic is independent of frameworks, UI, and external dependencies.

## Architecture Layers

### 1. Domain Layer (Core Business Logic)

**Location**: `src/domain/`

The domain layer is the innermost layer and contains:

- **Entities**: Core business objects (e.g., `Product`, `SalesData`)
- **Repository Interfaces**: Contracts for data access (e.g., `IProductRepository`)
- **Use Cases**: Business logic operations (e.g., `AddProductUseCase`, `GetSalesDataUseCase`)

**Rules**:
- No dependencies on other layers
- Pure business logic only
- No framework-specific code
- No external libraries (except for types/interfaces)

### 2. Application Layer (Use Cases)

**Location**: `src/application/usecases/` (Backend) or `src/domain/usecases/` (Frontend)

This layer orchestrates the domain entities and repository interfaces to fulfill use cases.

**Responsibilities**:
- Coordinate domain entities
- Validate business rules
- Handle use case-specific logic

### 3. Infrastructure/Data Layer (External Concerns)

**Location**: 
- Backend: `src/infrastructure/`
- Frontend: `src/data/`

This layer implements the interfaces defined in the domain layer.

**Components**:
- **Database Clients**: Database connection and queries
- **Repository Implementations**: Concrete implementations of repository interfaces
- **API Clients**: HTTP client for external API calls
- **External Services**: Third-party integrations

**Rules**:
- Implements domain interfaces
- Handles all external dependencies
- Can depend on domain layer only

### 4. Presentation Layer (UI/API)

**Location**: `src/presentation/`

This layer handles user interaction and API requests.

**Components**:
- **Screens/Components**: UI components (Frontend)
- **Controllers**: Request handlers (Backend)
- **Routes**: API route definitions (Backend)
- **Middleware**: Request/response processing (Backend)

**Rules**:
- Depends on application/domain layers
- No business logic
- Handles user input/output only

## Dependency Flow

```
Presentation → Application → Domain
     ↓              ↓
Infrastructure → Domain
```

**Key Principle**: Dependencies point inward. Outer layers depend on inner layers, but inner layers never depend on outer layers.

## Example: Adding a Product

### Frontend Flow

1. **Presentation Layer** (`DataInput.tsx`):
   - User fills form and clicks submit
   - Creates use case instance
   - Calls use case `execute()` method

2. **Domain Layer** (`AddProductUseCase.ts`):
   - Validates product data
   - Calls repository interface method

3. **Data Layer** (`ProductRepository.ts`):
   - Implements repository interface
   - Makes API call via `ApiClient`

4. **API Client** (`ApiClient.ts`):
   - Sends HTTP request to backend
   - Handles response/errors

### Backend Flow

1. **Presentation Layer** (`ProductController.js`):
   - Receives HTTP request
   - Creates use case instance
   - Calls use case `execute()` method

2. **Application Layer** (`AddProductUseCase.js`):
   - Creates domain entity
   - Validates entity
   - Calls repository interface method

3. **Infrastructure Layer** (`ProductRepository.js`):
   - Implements repository interface
   - Executes database query via `PostgresClient`

4. **Database Client** (`PostgresClient.js`):
   - Manages database connection
   - Executes SQL queries

## Benefits

1. **Testability**: Each layer can be tested independently
2. **Maintainability**: Changes in one layer don't affect others
3. **Flexibility**: Easy to swap implementations (e.g., change database)
4. **Independence**: Business logic is framework-agnostic
5. **Scalability**: Easy to add new features following the same pattern

## Adding New Features

When adding a new feature:

1. **Define Domain Entity** (if needed)
2. **Create Repository Interface** in domain layer
3. **Create Use Case** in application/domain layer
4. **Implement Repository** in infrastructure/data layer
5. **Create Controller/Component** in presentation layer
6. **Add Routes** (backend only)

## Testing Strategy

- **Domain Layer**: Unit tests with pure business logic
- **Application Layer**: Unit tests with mocked repositories
- **Infrastructure Layer**: Integration tests with real/external dependencies
- **Presentation Layer**: Component/API tests with mocked use cases

## Best Practices

1. **Keep domain layer pure**: No side effects, no dependencies
2. **Use dependency injection**: Pass dependencies through constructors
3. **Follow single responsibility**: Each class/function has one job
4. **Use interfaces**: Define contracts in domain layer
5. **Validate early**: Validate in use cases, not just in UI
6. **Handle errors properly**: Use proper error types and handling

## Common Patterns

### Repository Pattern
- Abstracts data access
- Makes it easy to swap data sources
- Defined in domain, implemented in infrastructure/data

### Use Case Pattern
- Encapsulates business logic
- Single responsibility per use case
- Easy to test and maintain

### Dependency Injection
- Pass dependencies through constructors
- Makes code testable and flexible
- Follows inversion of control principle

## Migration Notes

This project was migrated from a simple structure to Clean Architecture. Key changes:

1. Separated business logic from UI/API code
2. Introduced repository pattern for data access
3. Created use cases for business operations
4. Moved to layered folder structure
5. Added proper dependency management


