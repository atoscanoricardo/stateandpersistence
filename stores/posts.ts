import { defineStore } from 'pinia'
import { usePost } from "~/composables/usePosts";

interface Post {
  userId: string,
  id: number,
  title: string,
  body: string
}

export const usePostStore = defineStore({
    id:'posts',
    state: () => ({ 
        posts: [] as Post[],    
    }),       
    persist: {
        storage: persistedState.localStorage,
    },
    getters: {
      getPosts: (state) => state.posts,
    },
    actions: {
      async fetchPosts() {
        let { posts, fetchPosts } = usePost();
        await fetchPosts();
        this.posts = posts.value;
      },
    },
  })
    