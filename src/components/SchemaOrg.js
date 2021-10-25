import React from "react"
import Helmet from "react-helmet"

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    logo,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "BarOrPub",
        "@id": "https://948brewing.ca/",
        name: "948 Brewing Company",
        alternateName: "948 Brewing Company",
        logo: logo,
        telephone: "(403) 948-2337",
        email: "info@948brewing.ca",
        sameAs: [
          "https://www.instagram.com/948brewing/",
          "https://www.facebook.com/948Brewing/",
          "https://twitter.com/948brewing",
        ],
        url: "https://948brewing.ca/",
        image: image,
        priceRange: "$$",
        description: description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "541 Kingsview Way SE Unit 104",
          addressLocality: "Airdrie",
          addressRegion: "Alberta",
          postalCode: "T4A 0C9",
          addressCountry: "CA",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday"],
            opens: "3:00pm",
            closes: "7:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "3:00pm",
            closes: "7:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "3:00pm",
            closes: "9:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "12:00pm",
            closes: "9:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "12:00pm",
            closes: "5:00pm",
          },
        ],
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
