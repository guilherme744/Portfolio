const NOTION_BLOG_ID = process.env.NEXT_PUBLIC_NOTION_BLOG_ID

export const getAllPosts = async () => {
    const res = await fetch(`https://worker-notion.fabioraminhuk.workers.dev/v1/table/${NOTION_BLOG_ID}`,
        { next: { revalidate: 6000 }}
    )

    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`)
    }

    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Invalid response format: Expected JSON but received ${contentType}`)
    }

    const posts = await res.json()
    return posts
}

export const getPosts = async (id: string) => {
    const res = await fetch(`https://worker-notion.fabioraminhuk.workers.dev/v1/page/${id}`,
        { next: { revalidate: 6000 } }
    )

    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`)
    }

    const contentType = res.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Invalid response format: Expected JSON but received ${contentType}`)
    }

    const post = await res.json()
    return post
}