import SpecificPost from "./specificPost";

export default function Page({ params }: { params: { slug: string[] } }) {
  return <SpecificPost params={params} />;
}