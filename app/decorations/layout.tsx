import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Decorations | PlanWed",
  description: "Rahul Anand!",
};
export default function DecorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
