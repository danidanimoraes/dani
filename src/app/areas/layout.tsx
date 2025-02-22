import Page from "@/components/Ppage/ppage";

export default function AreasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
