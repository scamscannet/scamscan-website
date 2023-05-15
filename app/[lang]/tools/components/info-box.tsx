export default function InfoBox({
  text,
  title,
}: {
  text: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col">
      <h1 className="flex-auto">{title}</h1>
      <div className="flex-auto">{text}</div>
    </div>
  );
}
