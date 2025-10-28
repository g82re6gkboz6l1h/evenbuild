import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
};

export function PostPreview({ title, image, slug, meta }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={image} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed">{meta}</p>
    </div>
  );
}
