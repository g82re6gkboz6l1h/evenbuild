import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  date?: string;
  meta?: string;
  tags?: string[];
};

export function PostHeader({ title, date, meta, tags }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        {meta && (
          <div className="mb-4 text-lg text-gray-600 dark:text-gray-400">
            {meta}
          </div>
        )}
        {date && (
          <div className="mb-4 text-lg">
            <DateFormatter dateString={date} />
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
