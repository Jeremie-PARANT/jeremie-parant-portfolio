import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Jeremie PARANT Portfolio - Developpeur Web Fullstack",
    description: "Decouvrez mon expertise en developpement web, incluant le back-end (.NET, Symfony), le front-end (Angular, Blazor), et la gestion de projet (Scrum agile, Jira, GitHub). A travers ce portfolio, explorez mes projets d'applications web comportant un back-end (API), gestion de base de donnees et front-end optimise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
