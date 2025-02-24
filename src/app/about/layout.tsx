import Page from "@/app/(components)/Ppage/ppage";

export const metadata = {
  title: "Dani - Quem é a Dani?",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
