# 📊 Reg Reporting

**Live Demo**: [https://reg-reporting.netlify.app](https://reg-reporting.netlify.app)

## Overview

**Reg Reporting** is a web-based dashboard application designed to streamline the monitoring and analysis of regulatory reporting data.  
It offers an intuitive interface for visualizing key metrics such as total reports, successful submissions, pending items, and failures.  
The application aims to enhance transparency and efficiency in compliance processes by providing real-time insights into reporting statuses.

---

## 🚀 Features

- **Dashboard Overview**: Summarizes total reports, successful submissions, pending items, and failures.
- **Interactive Charts**: Visual representations of reporting data trends over time.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Real-Time Updates**: Dynamic data fetching ensures up-to-date information display.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, JSX
- **Styling**: CSS Modules / Tailwind CSS
- **Data Visualization**: Chart.js
- **Deployment**: Netlify

---

## 🧑‍💻 Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/erkrishnapandit/reg-reporting.git
cd reg-reporting

### 2. Install dependencies

```bash
npm install

### 3. Start the development server

```bash
npm run dev

## 📁 Project Structure

````plaintext
reg-reporting/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AIAnomalieCheck.jsx
│   │   └── DataQualitySummary.jsx
│   │   ├── ExcepttonKer.jsx
│   │   └── PieChart.jsx
│   │   ├── ProcesssLogs.jsx
│   │   └── ReportOverview.jsx
│   │   └── UpcommingDeadline.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md

## 🌐 Deployment

The application is deployed on Netlify. To deploy your own version:

### 1. Build the project

````bash
npm run build

### 2. Deploy
Upload the contents of the dist/ directory to Netlify
OR connect your GitHub repository for automatic deployment.