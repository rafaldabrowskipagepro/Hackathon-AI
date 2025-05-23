import { heroSectionQuery } from "@/components/HeroSection/query";
import { searchSectionQuery } from "@/components/SearchSection";
import { groq } from "next-sanity";

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    sections[]{
      _type,
      _key,
      _type == "heroSection" => {
        ${heroSectionQuery}
      },
      _type == "searchSection" => {
        ${searchSectionQuery}
      }
    }
  }
`;
