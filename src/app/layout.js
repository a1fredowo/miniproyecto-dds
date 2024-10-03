import '../styles/globals.css';

export const metadata = {
  title: 'Conversor de monedas',
  description: 'Un conversor de monedas utilizando Next.js y Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
