import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono p-4">
            <h1 className="text-9xl font-bold tracking-tighter text-neutral-800 animate-pulse">404</h1>
            <h2 className="text-2xl mt-4 font-bold text-red-500">SYSTEM RESOURCE NOT FOUND</h2>
            <p className="text-neutral-500 mt-2 max-w-md text-center">
                The requested blueprint or agent logs could not be retrieved from the central database. The infrastructure has already flagged this anomaly.
            </p>
            <Link href="/" className="mt-8 px-6 py-2 bg-white text-black font-bold rounded hover:scale-105 transition-transform">
                Initialize Restart Protocol
            </Link>
        </div>
    )
}
