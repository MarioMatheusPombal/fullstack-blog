import Header from "@/src/components/Header";
import CategoryService from "@/src/lib/services/CategoryService";
import "./globals.scss";

export const metadata = {
  title: "Fullstack Blog",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const categories = await CategoryService.findAll();
  return (
      <html lang="pt-br">
      <body>
      <Header categories={categories}></Header>
      {children}
      <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
        ...
      </footer>
      </body>
      </html>
  );
}
