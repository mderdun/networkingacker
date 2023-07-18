export type Tags = 'devblog' | 'criticism' | 'update' | 'misc'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    tags: Tags[]
    published: boolean
}