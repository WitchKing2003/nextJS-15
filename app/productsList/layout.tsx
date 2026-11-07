export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
     <html lang="en">
       <body>
         {children}
         <footer>Footer of product  list</footer>
       </body>
     </html>
   );
}
