export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>HEADER</div>
        {children}
        <div>FOOTER</div>
      </body>
    </html>
  );
}
