# Lead Distribution System

A full-stack Lead Distribution System built with **Next.js, MongoDB, Mongoose, and Tailwind CSS**.

The application automatically distributes incoming customer leads among providers using:

- Mandatory provider allocation
- Round Robin distribution
- Provider quota handling
- Transaction-safe database operations
- Real-time dashboard updates
- Webhook idempotency
- Bulk lead generation for testing

---

## Features

Lead creation API
MongoDB database integration
Mandatory provider allocation
Round Robin distribution logic
Provider quota management
Assignment tracking
MongoDB transactions
Dashboard with live updates
Webhook simulation
Bulk lead generation
Request service page
Test tools page

---

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS

### Backend

- Next.js API Routes
- MongoDB
- Mongoose

### Deployment

- Vercel

---

## Project Structure

```bash
src/

├── app/
│   ├── dashboard/
│   ├── request-service/
│   ├── test-tools/
│   └── api/
│       ├── dashboard/
│       ├── generate-leads/
│       ├── leads/
│       ├── webhook/
│       └── seed/
│
├── components/
│   └── Navbar.tsx
│
├── lib/
│   ├── mongodb.ts
│   └── constants.ts
│
├── models/
│   ├── Assignment.ts
│   ├── Lead.ts
│   ├── Provider.ts
│   ├── Service.ts
│   ├── AllocationState.ts
│   └── WebhookEvent.ts
│
├── services/
│   └── allocationService.ts
│
└── utils/
```

---

## Clone Project

Clone repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into project:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a file:

```bash
.env.local
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
```

Open:

```bash
http://localhost:3000
```

---

## Database Setup

Seed initial data:

Open:

```bash
http://localhost:3000/api/seed
```

This automatically creates:

### Providers

- Provider1
- Provider2
- Provider3
- Provider4
- Provider5
- Provider6
- Provider7
- Provider8

### Services

- Service1
- Service2
- Service3

---

## Pages

### Request Service

```bash
/request-service
```

Customer lead submission page.

Fields:

- Name
- Phone
- City
- Service Type
- Description

---

### Dashboard

```bash
/dashboard
```

Displays:

- Provider information
- Remaining quota
- Assigned leads
- Live updates

---

### Test Tools

```bash
/test-tools
```

Features:

- Generate 10 test leads
- Reset provider quota
- Open dashboard

---

## API Endpoints

### Create Lead

```bash
POST /api/leads
```

### Dashboard Data

```bash
GET /api/dashboard
```

### Seed Database

```bash
GET /api/seed
```

### Generate Test Leads

```bash
POST /api/generate-leads
```

### Webhook Simulation

```bash
POST /api/webhook
```

---

## Lead Allocation Logic

Step 1:

Mandatory providers are assigned.

Step 2:

Remaining providers are selected using Round Robin.

Step 3:

Provider quota is checked.

Step 4:

Assignments are stored.

Step 5:

Provider counts are updated using MongoDB transactions.

---

## Deployment (Vercel)

Push code to GitHub:

```bash
git add .

git commit -m "Initial commit"

git push
```

Go to:

https://vercel.com

Steps:

1. Import GitHub repository

2. Select project

3. Add environment variable:

```env
MONGODB_URI=your_connection_string
```

4. Click Deploy

---






## Author

**Gaurav Singh Bora**  
JK Lakshmipat University  
B.Tech CSE