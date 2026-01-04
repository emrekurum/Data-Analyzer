# Database Setup

This directory contains database-related files for the Data Analyzer application.

## Files

- `schema.sql` - Database schema and initial setup
- `PostgresClient.js` - PostgreSQL connection client

## Setup Instructions

1. Create a PostgreSQL database:
```sql
CREATE DATABASE your_database_name;
```

2. Run the schema file:
```bash
psql -U your_db_user -d your_database_name -f schema.sql
```

Or connect to your database and execute the SQL manually.

## Schema Overview

The `products` table stores product information with the following structure:

- `id` - Primary key (auto-increment)
- `name` - Product name (required)
- `price` - Product price (required, must be > 0)
- `quantity` - Product quantity (required, must be > 0)
- `category` - Product category (required)
- `created_at` - Timestamp of creation
- `updated_at` - Timestamp of last update (auto-updated)

## Indexes

- Index on `category` for faster category-based queries
- Index on `created_at` for time-based queries

## Triggers

- Automatic `updated_at` timestamp update on record modification


