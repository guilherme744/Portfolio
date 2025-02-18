import './globals.css'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

const poppins = Poppins({ 
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    manifest: 'https://fabra.dev/manifest.json',
    title: 'Guilherme - Senior Full Stack Software Engineer',
    description: 'Turning Ideas into Digital Reality: Guilherme, a Full Stack Software Engineer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences',
    keywords: ['Full Stack Software Engineer', 'Web Developer', 'HTML', 'CSS',
        'JavaScript', 'React', 'Vue.js', 'Angular', 'UI/UX Design', 'Responsiveness', 'Web Accessibility', 'SEO', 'Web Performance', 'Full Stack Development', 'Programming', 'Git', 'GitHub', 'Online Portfolio', 'Development Blog'
    ],
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon.ico',
                href: '/favicon.ico',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon.ico',
                href: '/favicon.ico',
            },
        ],
    },
    creator: 'Guilherme',
    openGraph: {
        type: 'website',
        url: 'fabra.dev',
        title: 'Guilherme - Senior Full Stack Software Engineer',
        description: 'Turning Ideas into Digital Reality: Guilherme, a Full Stack Software Engineer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences',
        siteName: 'My Website',
        images: [{
            url: 'https://raw.githubusercontent.com/raminhuk/fabra-dev/master/public/images/frontend-developer.png',
        }],
    },
    other: {
        'google-adsense-account': 'ca-pub-4699585166403980',
    },
}

export const viewport: Viewport = {
    themeColor: '#0c121e'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4699585166403980"
                crossOrigin="anonymous" />
            <body className={poppins.className}>
                {children}
            </body>
            <GoogleAnalytics gaId="G-CSXQC9RNJD" />
            <GoogleTagManager gtmId="GTM-NSVBBRH9" />
        </html>
    )
}
