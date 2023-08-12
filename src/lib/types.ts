export type Tags = 'devblog' | 'criticism' | 'update' | 'misc' | 'notebook'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    tags: Tags[]
    published: boolean
}