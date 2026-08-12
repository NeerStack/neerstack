"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
  type QueryClient,
} from "@tanstack/react-query";
import {
  changeImage,
  createPost,
  deletePost,
  getActivePosts,
  getAllPosts,
  getDraftPosts,
  getPostById,
  getPostBySlug,
  removeImage,
  setArchived,
  setDraft,
  updatePost,
} from "@/lib/api";
import { getToken } from "@/lib/auth";

type ApiEnvelope<T> = { status: boolean; message?: string; data?: T };

export const blogKeys = {
  all: ["blogs"] as const,
  active: () => [...blogKeys.all, "active"] as const,
  bySlug: (slug: string) => [...blogKeys.all, "slug", slug] as const,
  adminAll: () => [...blogKeys.all, "admin", "all"] as const,
  drafts: () => [...blogKeys.all, "admin", "drafts"] as const,
  byId: (id: string) => [...blogKeys.all, "admin", "id", id] as const,
};

async function unwrap<T>(
  promise: Promise<ApiEnvelope<T>>,
  fallback: string,
): Promise<T> {
  const res = await promise;
  if (!res.status || res.data === undefined) {
    throw new Error(res.message || fallback);
  }
  return res.data;
}

async function assertOk(
  promise: Promise<ApiEnvelope<unknown>>,
  fallback: string,
): Promise<void> {
  const res = await promise;
  if (!res.status) throw new Error(res.message || fallback);
}

function requireToken(): string {
  const token = getToken();
  if (!token) throw new Error("Not authenticated");
  return token;
}

export function invalidateBlogQueries(queryClient: QueryClient) {
  return queryClient.invalidateQueries({ queryKey: blogKeys.all });
}

export function useActivePostsQuery() {
  return useQuery({
    queryKey: blogKeys.active(),
    queryFn: () => unwrap(getActivePosts(), "Unable to load posts."),
  });
}

export function usePostBySlugQuery(slug: string) {
  return useQuery({
    queryKey: blogKeys.bySlug(slug),
    queryFn: () => unwrap(getPostBySlug(slug), "Post not found."),
    enabled: Boolean(slug) && slug !== "_",
  });
}

export function useAdminPostsQuery() {
  return useQuery({
    queryKey: blogKeys.adminAll(),
    queryFn: () => unwrap(getAllPosts(requireToken()), "Failed to load posts"),
  });
}

export function useDraftPostsQuery() {
  return useQuery({
    queryKey: blogKeys.drafts(),
    queryFn: () => unwrap(getDraftPosts(requireToken()), "Failed to load drafts"),
  });
}

export function usePostByIdQuery(id: string | undefined, enabled = true) {
  return useQuery({
    queryKey: blogKeys.byId(id ?? ""),
    queryFn: () => unwrap(getPostById(id!, requireToken()), "Unable to load post"),
    enabled: Boolean(id) && enabled,
  });
}

export function useCreatePostMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (form: FormData) => {
      await assertOk(createPost(requireToken(), form), "Create failed");
    },
    onSuccess: () => invalidateBlogQueries(queryClient),
  });
}

export function useUpdatePostMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: {
      id: string;
      body: {
        title: string;
        tags: string[];
        content: string;
        htmlContent: string;
        draft: boolean;
      };
    }) => {
      const res = await updatePost(args.id, requireToken(), args.body);
      if (!res.status) throw new Error(res.message || "Update failed");
      return res.data;
    },
    onSuccess: (post, vars) => {
      if (post) {
        queryClient.setQueryData(blogKeys.byId(post._id), post);
        if (post.slug) queryClient.setQueryData(blogKeys.bySlug(post.slug), post);
      } else {
        queryClient.removeQueries({ queryKey: blogKeys.byId(vars.id) });
      }
      return invalidateBlogQueries(queryClient);
    },
  });
}

export function useDeletePostMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await assertOk(deletePost(id, requireToken()), "Delete failed");
    },
    onSuccess: (_data, id) => {
      queryClient.removeQueries({ queryKey: blogKeys.byId(id) });
      return invalidateBlogQueries(queryClient);
    },
  });
}

export function useSetDraftMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, draft }: { id: string; draft: boolean }) => {
      await assertOk(
        setDraft(id, requireToken(), draft),
        "Failed to update draft status",
      );
    },
    onSuccess: (_data, vars) => {
      queryClient.removeQueries({ queryKey: blogKeys.byId(vars.id) });
      return invalidateBlogQueries(queryClient);
    },
  });
}

export function useSetArchivedMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, archived }: { id: string; archived: boolean }) => {
      await assertOk(
        setArchived(id, requireToken(), archived),
        "Failed to update archive status",
      );
    },
    onSuccess: (_data, vars) => {
      queryClient.removeQueries({ queryKey: blogKeys.byId(vars.id) });
      return invalidateBlogQueries(queryClient);
    },
  });
}

export function useChangeImageMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, image }: { id: string; image: File }) =>
      unwrap(changeImage(id, requireToken(), image), "Image update failed"),
    onSuccess: (post) => {
      if (post) {
        queryClient.setQueryData(blogKeys.byId(post._id), post);
        if (post.slug) queryClient.setQueryData(blogKeys.bySlug(post.slug), post);
      }
      return invalidateBlogQueries(queryClient);
    },
  });
}

export function useRemoveImageMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await assertOk(removeImage(id, requireToken()), "Image remove failed");
    },
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: blogKeys.byId(id) });
      return invalidateBlogQueries(queryClient);
    },
  });
}
