// app/layout.js 或 app/layout.tsx
import { Providers } from './providers';
import Navbar from './components/navbar';
import AppFooter from './components/appfooter';
import { AuthProvider } from './context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, padding: 0 }}>
        <Providers>
          <AuthProvider>
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#121a2b'
              }}
            >
              <Navbar />
                <div style={{flex: 1, paddingTop: 64 /* 或 AppBar 实际高度(px) */ }}>
                {children}
                </div>
              <AppFooter />
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}