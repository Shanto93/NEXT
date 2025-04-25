import Card from "@/components/Card";
import "../styles/global.css"

export default function RootLayout({
  children,
  route1,
  route2,
}: {
  children: React.ReactNode;
  route1: React.ReactNode;
  route2: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="text-red-500">{children}</div>
          <Card>{route1}</Card>
          <div>{route2}</div>
        </div>
      </body>
    </html>
  );
}
