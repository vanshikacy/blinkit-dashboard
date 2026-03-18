# Blinkit Analytics Dashboard — Frontend

## About
A React dashboard that visualizes operational analytics for a 
quick-commerce platform like Blinkit. It fetches data from a 
Spring Boot backend and displays insights through interactive 
charts, KPI cards, and tables.

## Tech Stack
- **React**
- **Recharts** — data visualization
- **Tailwind CSS** — styling
- **Axios** — API calls

## Features
- KPI cards — Total Orders, Revenue, Avg Order Value, 
  Cancellation Rate, Total Riders, Avg Delivery Time
- Line charts — Orders per Day (with sliding window), 
  Delivery Time by Hour
- Bar charts — Orders per City, Revenue per City, 
  Orders per Hour, Avg Delivery Time per City, 
  Cancellation per City, Zone Distribution, Rider Utilization
- Pie charts — Orders per Category, Orders per Payment Method
- Fastest Riders leaderboard table

## Architecture
```
src/
├── api/
│   └── analytics.js       ← all API calls
├── components/
│   ├── shared/            ← reusable chart wrappers
│   │   ├── KPI.jsx
│   │   ├── LineChartWrapper.jsx
│   │   ├── BarChartWrapper.jsx
│   │   └── PieChartWrapper.jsx
│   └── [feature components]
├── pages/
│   └── Dashboard.jsx
└── App.jsx
```

## Local Setup
### Prerequisites
- Node.js
- Backend running on `http://localhost:8080`

### Steps
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173`

## What I Learned
- Building reusable React components
- Connecting a React frontend to a Java backend
- Data visualization with Recharts
- Collaborating on a project using Git and GitHub

## Collaborators
| Name | GitHub |
|------|--------|
| Shagun Gupta | [@Shagungupta7](https://github.com/Shagungupta7) |
| Vanshika | [@vanshikacy](https://github.com/vanshikacy) |