export default function CounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Footer of Counter</footer>
      </body>
    </html>
  );
}
