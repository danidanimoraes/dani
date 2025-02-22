import Page from "@/components/Ppage/ppage";

export const metadata = {
  title: "Quem é a Dani?",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Page>{children}</Page>;
}
