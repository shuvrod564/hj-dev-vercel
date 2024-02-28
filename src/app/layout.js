import { Inter } from 'next/font/google'
import './globals.css'  
import Layout from '@components/components/common/Layout'
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300','400','500','600','700'],
  variable: "--font-inter"
})

export const metadata = {
  title: 'House Journey',
  description: 'Meta Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1, shrink-to-fit=no"/>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>  
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>  
          {children}
          </Layout>
        </AntdRegistry>
        
      </body>
    </html>
  )
}
