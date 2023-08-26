import "@/styles/globals.css";
import {NextAuthProvider} from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
      <NextAuthProvider>
      {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
