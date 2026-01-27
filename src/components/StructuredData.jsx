import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.billcured.com'

// Organization schema - use on all pages
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BillCured',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: 'Helping you fight back against unfair medical bills with proven negotiation scripts and templates.',
    sameAs: [],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

// Product schema - use on Product page
export function ProductSchema({
  name = 'Bill Cured Blueprint',
  description = 'Complete guide to negotiating medical bills with word-for-word scripts, letter templates, and step-by-step action plans.',
  price = '49.99',
  currency = 'USD',
  image = `${SITE_URL}/images/blueprint-cover.jpg`,
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Organization',
      name: 'BillCured',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/product`,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

// FAQPage schema - use on FAQ page
export function FAQPageSchema({ faqs }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

// Article schema - use on blog posts
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = 'BillCured Team',
  url,
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image || `${SITE_URL}/images/og-image.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BillCured',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

// BreadcrumbList schema - use on inner pages
export function BreadcrumbSchema({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

// WebSite schema with search - use on homepage
export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BillCured',
    url: SITE_URL,
    description: 'Cut your medical bills by 30-70% with proven negotiation scripts and templates.',
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export default {
  OrganizationSchema,
  ProductSchema,
  FAQPageSchema,
  ArticleSchema,
  BreadcrumbSchema,
  WebSiteSchema,
}
