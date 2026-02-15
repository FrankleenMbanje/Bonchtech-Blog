# BonchTech: Agentic IT & Automation Hub

BonchTech is a next-generation personal tech blog and automation hub, demonstrating "Agentic IT" and "Self-Healing Infrastructure" using Next.js 15, React, Tailwind CSS, Framer Motion, and Python.

## Features

*   **Self-Healing Infrastructure**: A Python script monitors system health and triggers n8n workflows to fix issues automatically.
*   **Live Automation Feed**: Real-time visualization of active n8n workflows via a custom API polling mechanism.
*   **Agentic Coding**: "Hire My Agent" CTA initiates an AI client onboarding process.
*   **Neo-Brutalist Design**: Glassmorphism, tactile maximalism, and responsive Bento Grids.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    pip install requests
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

3.  **Start Self-Healing Monitor**:
    In a separate terminal, run the monitoring script. This script watches for 500 errors and triggers "healing" workflows.
    ```bash
    python monitor-health.py
    ```

4.  **Simulate Activity**:
    To see the "Live Automation Feed" populated with data immediately, run:
    ```bash
    python seed_data.py
    ```

## Triggering Self-Healing

The monitoring script `monitor-health.py` polls `http://localhost:3000`. To test the self-healing feature:
1.  Ensure `monitor-health.py` is running.
2.  Navigate to a route that might cause an error or manually stop the Next.js server to simulate downtime.
3.  Watch the console output of `monitor-health.py` as it detects the issue and sends a webhook to update the dashboard status to "AI Healing in Progress".

## Project Structure

*   `src/app`: Next.js App Router pages and API routes.
*   `src/components`: React components including `BentoGrid`, `TactileButton`, and `LiveAutomationFeed`.
*   `monitor-health.py`: Python script for external health monitoring.
*   `seed_data.py`: Utility to populate initial automation data.

## Technologies

*   Next.js 15 (App Router)
*   Tailwind CSS v4 (Alpha/PostCSS)
*   Framer Motion
*   Python (Monitoring)
*   Lucide React (Icons)
