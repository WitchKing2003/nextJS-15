export const metadata = {
  title: "Marketing Layout Page",
  description: "This is the marketing layout",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" title={metadata.title}>
      <body>
        {children}
        <footer>Footer of marketing</footer>
      </body>
    </html>
  );
}
