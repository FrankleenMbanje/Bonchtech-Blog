import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Unplug | Digital Minimalism Blog',
        short_name: 'Unplug',
        description: 'Reclaim your attention. Digital minimalism, dumb phones, and intentional living.',
        start_url: '/',
        display: 'standalone',
        background_color: '#faf8f5',
        theme_color: '#5f8d6a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
