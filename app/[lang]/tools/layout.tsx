import { Locale } from "@/i18n-config";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Tools Layout</h1>
      <div>{children}</div>
    </div>
  );
}
