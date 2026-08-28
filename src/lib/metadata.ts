import type { Metadata } from 'next'
import { CMD_DOMAIN_URL, CMS_NAME } from './constants'

type Props = {
  og?: {
    url: string
    imageUrl: string
  }
  title: string
  description: string
}

export function buildMetadata({ og, title, description }: Props): Metadata {
  const metadata: Metadata = {
    title: `${title} | ${CMS_NAME}`,
    description,
  }

  if (og) {
    metadata.openGraph = {
      title: `${title} | ${CMS_NAME}`,
      description,
      url: `${CMD_DOMAIN_URL}${og.url}`,
      images: [`${CMD_DOMAIN_URL}${og.imageUrl}`],
      type: 'website',
    }
    metadata.twitter = {
      card: 'summary_large_image',
      title: `${title} | ${CMS_NAME}`,
      description,
      images: [`${CMD_DOMAIN_URL}${og.imageUrl}`],
    }
  }

  return metadata
}
