import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  section: string;
}

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        author
        siteUrl
        twitterUsername
      }
    }
  }
`;

export const SEO: React.FC<Props> = ({ section }) => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        image,
        author,
        siteUrl,
        twitterUsername,
      },
    },
  } = useStaticQuery(getData);

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${section} | ${title}`}>
      <meta name="description" content={description} />;
      <meta name="image" content={image} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};
