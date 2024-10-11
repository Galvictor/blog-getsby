// Função para gerar posts mocados
const generatePosts = (num: number) => {
    const posts = [];

    for (let i = 1; i <= num; i++) {
        posts.push({
            id: i,
            title: `Post ${i}`,
            body: `Este é o corpo completo do post ${i}. Aqui você encontra o conteúdo completo do post número ${i}.`,
            summary: `Este é um resumo do post ${i}.`,
            image: `https://placehold.co/300x200?text=Post+${i}&font=roboto`
        });
    }

    return posts;
};

// Gerar 30 posts
export const posts = generatePosts(30);
