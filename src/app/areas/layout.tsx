import Page from "@/components/Ppage/ppage";

export const metadata = {
  title: "Dani em tudo",
};

export default function AreasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
