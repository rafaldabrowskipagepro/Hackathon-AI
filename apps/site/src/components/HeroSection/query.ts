import { groq } from "next-sanity";

export const heroSectionQuery = groq`
  title,
  description,
  cta{
    text,
    link{
      type,
      type == "internal" => {
        resource->{
          title,
          slug
        }
      },
      type == "external" => {
        url,
        openInNewTab
      }
    }
  },
  image{
    asset->{
      _id,
      url
    },
    alt,
    caption
  }
`;
