<template>
    <v-card class="pa-2 ma-2" variant="outlined">
        <v-card-text>
            <v-timeline align="start">
                <v-timeline-item
                    v-for="(post, i) in posts"
                    :key="i"
                    dot-color="blue-lighten-4"
                    icon="mdi-forum"
                    fill-dot
                >
                    <v-card variant="tonal">
                        <v-card-title :class="['text-h6', `indigo-lighten-2`]">
                            {{ post.title }}
                        </v-card-title>
                        <v-card-text class="bg-white text--primary">
                            <p>
                                {{ post.body }}
                            </p>                
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>
<script setup>
    import { usePostStore } from '@/stores/posts'
    import { onMounted } from 'vue';
    const posts = ref([]);

    const usePost = usePostStore();
    
    async function getPosts() {
        await usePost.fetchPosts();        
        posts.value = usePost.getPosts;        
    }
    
    onMounted(getPosts);
</script>
