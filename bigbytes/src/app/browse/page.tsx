import { getAllCMSFileSlugs } from "@/lib/cms";
import Results from "./results";

export default async function Page() {
  const slugs = await getAllCMSFileSlugs();
  
  return <Results slugList={slugs} />
}
