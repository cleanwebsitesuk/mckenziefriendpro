import { isPlaceholder } from "@/lib/site";

/** Shows text normally, or as a clearly marked gap if it is still a [PLACEHOLDER]. */
export function Text({ children }: { children: string }) {
  if (!isPlaceholder(children)) return <>{children}</>;
  return <mark className="placeholder">{children}</mark>;
}
