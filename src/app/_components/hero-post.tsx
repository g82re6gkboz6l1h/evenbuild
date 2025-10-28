import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
};

export function HeroPost({ title, image, slug, meta }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={image} slug={slug} />
      </div>
      <div className="mb-20 md:mb-28">
        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-lg leading-relaxed">{meta}</p>
      </div>
    </section>
  );
}
