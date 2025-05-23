import { groq } from "next-sanity";

export const headerQuery = groq`
  *[_type == "siteHeader"][0]{
    logo{
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    navigationLinks[]{
      label,
      link{
        type,
        type == "internal" => {
          resource->{
            title,
            slug
          }
        },
        type == "external" => {
          url
        }
      }
    },
    ctaButton{
      label,
      link{
        type,
        type == "internal" => {
          resource->{
            title,
            slug
          }
        },
        type == "external" => {
          url
        }
      }
    }
  }
`;
