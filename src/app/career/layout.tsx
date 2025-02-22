import Page from "@/components/Ppage/ppage";

export const metadata = {
  title: "Carreira da Dani",
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
