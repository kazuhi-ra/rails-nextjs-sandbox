import { Posts } from "./_components/posts";

export default function Home() {
  return (
    <div className="w-full flex h-screen bg-sky-50">
      <Posts />
    </div>
  );
}

export const dynamic = "force-dynamic";
