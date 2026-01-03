# Contributing to Data Analyzer

Thank you for your interest in contributing to Data Analyzer! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Follow the project's coding standards

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit your changes: `git commit -m 'Add some feature'`
7. Push to your branch: `git push origin feature/your-feature-name`
8. Open a Pull Request

## Development Setup

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
# Set up .env file
npm start
```

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for frontend code
- Follow ESLint rules
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Clean Architecture

- Follow the Clean Architecture principles
- Keep domain layer pure (no dependencies)
- Use dependency injection
- Implement repository pattern for data access
- Create use cases for business logic

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings (JavaScript)
- Use semicolons
- Maximum line length: 100 characters
- Add JSDoc comments for public functions

## Commit Messages

Follow the conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```
feat(frontend): add product search functionality
fix(backend): resolve database connection issue
docs: update API documentation
```

## Pull Request Process

1. Update README.md if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update documentation
5. Request review from maintainers

## Testing

### Frontend Tests

```bash
cd frontend
npm test
```

### Backend Tests

```bash
cd backend
npm test
```

## Project Structure

Please maintain the Clean Architecture structure:

- **Domain**: Business logic, entities, interfaces
- **Application/Data**: Use cases, repository implementations
- **Infrastructure**: Database, external services
- **Presentation**: UI components, controllers, routes

## Questions?

If you have questions, please open an issue with the `question` label.

Thank you for contributing!

