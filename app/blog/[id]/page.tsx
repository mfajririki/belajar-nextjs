interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog ID: {params.id}</h1>
      <p className="mt-2">
        Ini adalah halaman detail blog dengan ID {params.id}
      </p>
    </div>
  );
}
