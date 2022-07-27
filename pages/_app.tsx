import type { AppProps } from 'next/app'
import { MainLayout } from '~/common/components/layouts/Main/Main'
import { ThemeLayout } from '~/common/components/layouts/Theme/Theme'
import '~/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeLayout>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeLayout>
    )
}