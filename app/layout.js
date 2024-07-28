// import { getUser, auth } from "@/appwrite/auth";
// import { redirect } from "next/navigation";
// import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soko247 Marketplace",
  description: "Soko247 Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// export default async function AuthLayout({ children }) {
//   let user = await auth.getUser();
//   if (!user) {
//     redirect("/login");
//   }
//   return (
//     <>
//       <Header />
//       <main className="container mx-auto  w-[600px] pt-10">
//         {children}
//       </main>
//     </>
//   );
// }
