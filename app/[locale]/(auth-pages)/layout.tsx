import React from "react";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen flex flex-col gap-12 items-start">{children}</div>
  );
}
