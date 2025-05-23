import { groq } from "next-sanity";

export const searchSectionQuery = groq`
  title,
  searchPlaceholder,
  banks[]
`;
