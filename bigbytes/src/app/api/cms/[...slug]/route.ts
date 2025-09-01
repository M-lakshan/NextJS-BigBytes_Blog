import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { getCMSContentBySlug } from "@/lib/cms";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug?: string[] } }
) {
  if (!params.slug || !Array.isArray(params.slug)) {
    console.error("Missing or invalid 'slug' in params:", params.slug);
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const CMS_CONTENT_PATH = path.join(process.cwd(), ".leadcms", "content");
  const slug = params.slug.join("/");

  const data = await getCMSContentBySlug(slug, CMS_CONTENT_PATH);

  if (data) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}