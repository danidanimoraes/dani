import Page from "@/app/(components)/Ppage/ppage";

export const metadata = {
  title: "Dani - Multidani",
};

export default function AreasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
