import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostView } from "@/components/marketing/BlogPostView";
import { Button } from "@/components/ui/Button";
import { getActivePosts } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const res = await getActivePosts();
    if (res.status && res.data?.length) {
      return res.data.map((post) => ({ slug: post.slug }));
    }
  } catch {
    // ignore
  }
  return [{ slug: "_" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_") return { title: "Blog" };
  return { title: slug.replace(/-/g, " ") };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_") {
    return (
      <section className="ns-mesh ns-grain relative pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
        <div className="relative z-[2] container-ns max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Blog</p>
          <h1 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            No posts available yet
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Nothing was published at build time. Check back soon, or explore the rest of the site.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/blog/" variant="ghost" arrow={false}>
              Back to blog
            </Button>
            <Button href="/contact/">Contact us</Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Or{" "}
            <Link href="/services/" className="font-medium text-accent transition hover:text-accent-deep">
              browse services
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
      <div className="container-ns max-w-3xl">
        <BlogPostView slug={slug} />
      </div>
    </section>
  );
}
