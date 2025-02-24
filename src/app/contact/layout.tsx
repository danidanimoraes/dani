import Page from "@/app/(components)/Ppage/ppage";

export const metadata = {
  title: "Dani - Fale com a Dani",
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
