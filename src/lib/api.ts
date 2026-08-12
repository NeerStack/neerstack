export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://codinmage-server.onrender.com";

export type BlogImage = { url?: string; public_id?: string };
export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  tags?: string[];
  content?: string;
  htmlContent?: string;
  draft?: boolean;
  archived?: boolean;
  image?: BlogImage;
  createdAt?: string;
  updatedAt?: string;
};

type ApiResponse<T> = { status: boolean; message?: string; data?: T };

function authHeaders(token?: string | null): HeadersInit {
  const headers: HeadersInit = { Accept: "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function parseJson<T>(res: Response): Promise<ApiResponse<T>> {
  try {
    return (await res.json()) as ApiResponse<T>;
  } catch {
    return { status: false, message: "Invalid server response" };
  }
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return parseJson<{ token: string; user?: unknown }>(res);
}

export async function getActivePosts() {
  const res = await fetch(`${API_URL}/blog/get-active-blogs`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  return parseJson<BlogPost[]>(res);
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/blog/get-blog-by-slug/${slug}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  return parseJson<BlogPost>(res);
}

export async function getAllPosts(token: string) {
  const res = await fetch(`${API_URL}/blog/get-all-blogs`, {
    method: "GET",
    headers: authHeaders(token),
  });
  return parseJson<BlogPost[]>(res);
}

export async function getDraftPosts(token: string) {
  const res = await fetch(`${API_URL}/blog/get-draft-blogs`, {
    method: "GET",
    headers: authHeaders(token),
  });
  return parseJson<BlogPost[]>(res);
}

export async function getPostById(id: string, token: string) {
  const res = await fetch(`${API_URL}/blog/get-blog/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeaders(token) },
  });
  return parseJson<BlogPost>(res);
}

export async function createPost(token: string, form: FormData) {
  const res = await fetch(`${API_URL}/blog/create`, {
    method: "POST",
    headers: authHeaders(token),
    body: form,
  });
  return parseJson<BlogPost>(res);
}

export async function updatePost(
  id: string,
  token: string,
  body: {
    title: string;
    tags: string[];
    content: string;
    htmlContent: string;
    draft: boolean;
  },
) {
  const res = await fetch(`${API_URL}/blog/update-blog/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders(token) },
    body: JSON.stringify(body),
  });
  return parseJson<BlogPost>(res);
}

export async function deletePost(id: string, token: string) {
  const res = await fetch(`${API_URL}/blog/delete-blog/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeaders(token) },
  });
  return parseJson<unknown>(res);
}

export async function setDraft(id: string, token: string, draft: boolean) {
  const res = await fetch(`${API_URL}/blog/draft-blog/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders(token) },
    body: JSON.stringify({ draft }),
  });
  return parseJson<unknown>(res);
}

export async function setArchived(id: string, token: string, archived: boolean) {
  const res = await fetch(`${API_URL}/blog/archive-blog/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders(token) },
    body: JSON.stringify({ archived }),
  });
  return parseJson<unknown>(res);
}

export async function changeImage(id: string, token: string, image: File) {
  const form = new FormData();
  form.append("image", image);
  const res = await fetch(`${API_URL}/blog/change-image/${id}`, {
    method: "PUT",
    headers: authHeaders(token),
    body: form,
  });
  return parseJson<BlogPost>(res);
}

export async function removeImage(id: string, token: string) {
  const res = await fetch(`${API_URL}/blog/remove-image/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeaders(token) },
  });
  return parseJson<unknown>(res);
}

export async function sendQuote(payload: {
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/quote`, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseJson<unknown>(res);
}

export async function sendContact(payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseJson<unknown>(res);
}
