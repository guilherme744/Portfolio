import { Metadata } from 'next'

import Layout from '@/components/Layout'
import TextShadowGenerator from '@/components/Tools/TextShadowGenerator'

export const metadata: Metadata = {
    title: 'Text Shadow Generator - Guilherme',
    description: 'Welcome to our Text Shadow CSS Generator, a powerful tool crafted to simplify the process of creating stunning text shadow effects for your website effortlessly. With a plethora of customizable options, this intuitive tool delivers instant previews, enabling you to perfect the shadows on your website&apos;s text elements with ease.',
    openGraph: {
        title: 'Text Shadow Generator - Guilherme',
        description: 'Welcome to our Text Shadow CSS Generator, a powerful tool crafted to simplify the process of creating stunning text shadow effects for your website effortlessly. With a plethora of customizable options, this intuitive tool delivers instant previews, enabling you to perfect the shadows on your website&apos;s text elements with ease.',
    },
}

export default function TextShadowGeneratorPage() {
    return (
        <Layout>
            <div className="w-full">
                <TextShadowGenerator />
            </div>
        </Layout>
    )
}
