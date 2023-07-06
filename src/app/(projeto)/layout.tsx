export default function ProjetoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-8">
      <h1 className="uppercase __className_6a3ae9 text-8xl">Projetos</h1>
      {children}
    </main>
  );
}
