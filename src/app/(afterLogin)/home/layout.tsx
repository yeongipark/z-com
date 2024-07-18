export default async function HomeLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <div>
      홈레이아웃
      {children}
    </div>
  );
}
