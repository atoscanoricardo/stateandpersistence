interface Post {
    userId: string,
    id: number,
    title: string,
    body: string
}

export const usePost = ()=>{
    const posts = ref<Post[]>([]);

    const fetchPosts = async ()=>{
        try{
            const  data  = await $fetch('/api/posts/findAll');            
            posts.value = data.posts;
        } catch(error){
            console.log(error);
        }
    }
    
    return { posts, fetchPosts }
}
