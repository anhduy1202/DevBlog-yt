export interface BlogDetail {
  title: string
  bodyHTML: string
  createdAt: string
  author: {
    name: string
    avatar: string
    url: string
  }
}

export interface BlogPost {
  id?: number
  url?: string
  discussionUrl?: string
  title: string
  html?: string
  bodyText: string
  tags: string[]
  createdAt: string
  lastEdited?: string | null
  author: {
    name: string
    avatar: string
    url: string
  }
}
