import { NextResponse } from 'next/server';

export async function GET() {
    // Mock data for the "AI Healer" demo
    // In a real scenario, this would fetch from an n8n webhook or database
    const statuses = [
        { workflowName: "System Health Monitor", status: "running" },
        { workflowName: "Auto-Scaler", status: "idle" },
        { workflowName: "Threat Detection", status: "success" },
        // Randomly trigger "healing" for demo purposes
        { workflowName: "Healer-Node-01", status: Math.random() > 0.7 ? "running" : "idle" }
    ];

    return NextResponse.json({ statuses });
}
