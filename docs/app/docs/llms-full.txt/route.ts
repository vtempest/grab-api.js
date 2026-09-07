import { source } from "@/lib/fumadocs/source";
import { getLLMText } from "@/lib/fumadocs/source";

export const revalidate = false;

export async function GET() {
  const scanned = await Promise.all(
    source.getPages().map(async (page) => getLLMText(page)),
  );

  return new Response(scanned.join("\n\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
