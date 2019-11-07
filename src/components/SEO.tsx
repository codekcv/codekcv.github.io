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
      siteMetadata: { title, description, author, siteUrl, twitterUsername },
    },
  } = useStaticQuery(getData);

  console.log(twitterUsername);

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${section} | ${title}`}>
      <meta name="description" content={description} />;
      {/* <meta name="image" content= */}
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:description" content={description} /> */}
    </Helmet>
  );
};
