interface DocsPageProps {
  params: { slug: string[] };
}

export default function DocsPage({ params }: DocsPageProps) {
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug: {params.slug.join(" / ")}</p>
    </div>
  );
}
