import requests
import time
import random

BASE_URL = "http://localhost:3000/api/n8n-webhook"

workflows = [
    {
        "workflowName": "SEO Content Optimizer",
        "status": "success",
        "summary": "Generated meta tags for 5 new blog posts.",
    },
    {
        "workflowName": "GitHub issue triager",
        "status": "success", 
        "summary": "Labeled 3 bugs and closed 1 duplicate.",
    },
    {
        "workflowName": "System Health Check",
        "status": "running",
        "summary": "Scanning Vercel deployment logs...",
    }
]

print("Seeding automation data...")

for wf in workflows:
    try:
        payload = wf.copy()
        payload["id"] = f"seed-{random.randint(1000,9999)}"
        requests.post(BASE_URL, json=payload)
        print(f"Sent: {wf['workflowName']}")
        time.sleep(0.5)
    except Exception as e:
        print(f"Failed to seed {wf['workflowName']}: {e}")

print("Done!")
