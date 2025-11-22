
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
      taxonomy: string;
    }>>;
  };
}

const BlogSection = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<WordPressPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      console.log('Tentando conectar ao WordPress...');
      
      const response = await fetch(
        'http://localhost/guyviana/wp-json/wp/v2/posts?_embed&per_page=10',
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Posts carregados com sucesso:', data.length);
      setPosts(data);
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar posts do WordPress:', err);
      setError('Erro ao carregar posts do blog');
      
      // Fallback com posts mock
      setPosts(getMockPosts());
    } finally {
      setLoading(false);
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getImageUrl = (post: WordPressPost) => {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return "https://images.unsplash.com/photo-1544551763-46a013bb2b58?q=80&w=400&h=250&auto=format&fit=crop";
  };

  const getCategory = (post: WordPressPost) => {
    if (post._embedded?.['wp:term']?.[0]?.[0]?.name) {
      return post._embedded['wp:term'][0][0].name;
    }
    return "Medicina Chinesa";
  };

  const openPostModal = (post: WordPressPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const getMockPosts = (): WordPressPost[] => [
    {
      id: 1,
      title: { rendered: "Os Fundamentos do Qi Gong: Uma Jornada de Autocura" },
      excerpt: { 
        rendered: "Descubra como esta prática milenar pode transformar sua energia vital e promover o equilíbrio entre corpo e mente."
      },
      content: { 
        rendered: "<p>O Qi Gong é uma prática ancestral chinesa que combina movimentos suaves, respiração controlada e meditação. Esta arte milenar oferece benefícios extraordinários para a saúde física, mental e espiritual.</p><p>Através da prática regular do Qi Gong, você pode experimentar maior equilíbrio energético, redução do estresse e melhora na qualidade de vida geral.</p>" 
      },
      date: "2025-01-15T10:00:00",
      featured_media: 0,
      _embedded: {
        'wp:featuredmedia': [{
          source_url: "https://images.unsplash.com/photo-1544551763-46a013bb2b58?q=80&w=400&h=250&auto=format&fit=crop",
          alt_text: "Prática de Qi Gong"
        }],
        'wp:term': [[{
          name: "Qi Gong",
          taxonomy: "category"
        }]]
      }
    },
    {
      id: 2,
      title: { rendered: "Acupuntura e Ansiedade: Como os Pontos Corretos Podem Trazer Alívio" },
      excerpt: { 
        rendered: "Entenda como a acupuntura pode ser uma ferramenta poderosa no tratamento da ansiedade e estresse."
      },
      content: { 
        rendered: "<p>A acupuntura oferece uma abordagem natural e eficaz para o tratamento da ansiedade, trabalhando com pontos específicos que regulam o sistema nervoso e promovem o relaxamento profundo.</p>" 
      },
      date: "2025-01-10T14:30:00",
      featured_media: 0,
      _embedded: {
        'wp:featuredmedia': [{
          source_url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&h=250&auto=format&fit=crop",
          alt_text: "Sessão de acupuntura"
        }],
        'wp:term': [[{
          name: "Acupuntura",
          taxonomy: "category"
        }]]
      }
    },
    {
      id: 3,
      title: { rendered: "Fitoterapia Chinesa: O Poder das Plantas Medicinais" },
      excerpt: { 
        rendered: "Conheça as principais plantas da Medicina Tradicional Chinesa e seus benefícios terapêuticos."
      },
      content: { 
        rendered: "<p>A fitoterapia chinesa utiliza plantas medicinais específicas para restaurar o equilíbrio energético do corpo, oferecendo tratamentos naturais para diversas condições de saúde.</p>" 
      },
      date: "2025-01-05T09:15:00",
      featured_media: 0,
      _embedded: {
        'wp:featuredmedia': [{
          source_url: "https://images.unsplash.com/photo-1596368962347-cfa5bc74c3d1?q=80&w=400&h=250&auto=format&fit=crop",
          alt_text: "Ervas medicinais chinesas"
        }],
        'wp:term': [[{
          name: "Fitoterapia",
          taxonomy: "category"
        }]]
      }
    }
  ];

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">Carregando posts do blog...</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredPosts = posts.slice(0, 3);
  const recentPosts = posts.slice(3, 9);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {error && (
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Conectando ao WordPress... Exibindo posts de exemplo.
                </p>
              </div>
            )}

            {/* Posts em Destaque */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">
                Posts em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => openPostModal(post)}
                  >
                    <img 
                      src={getImageUrl(post)}
                      alt={post.title.rendered}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-bronze text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {getCategory(post)}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-3 text-deep-blue line-clamp-2">
                        {stripHtml(post.title.rendered)}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {stripHtml(post.excerpt.rendered)}
                      </CardDescription>
                      <p className="text-xs text-gray-500 mb-4">
                        {formatDate(post.date)}
                      </p>
                      <Button className="bg-deep-blue hover:bg-blue-800 w-full">
                        Ler Mais
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Artigos Mais Recentes */}
            {recentPosts.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">
                  Artigos Mais Recentes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPosts.map((post) => (
                    <Card 
                      key={post.id} 
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => openPostModal(post)}
                    >
                      <img 
                        src={getImageUrl(post)}
                        alt={post.title.rendered}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="inline-block bg-bronze text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {getCategory(post)}
                          </span>
                        </div>
                        <CardTitle className="text-lg mb-2 text-deep-blue line-clamp-2">
                          {stripHtml(post.title.rendered)}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mb-3 text-sm line-clamp-2">
                          {stripHtml(post.excerpt.rendered)}
                        </CardDescription>
                        <p className="text-xs text-gray-500">
                          {formatDate(post.date)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal para Post Individual */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-deep-blue mb-4">
                  {stripHtml(selectedPost.title.rendered)}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <img 
                  src={getImageUrl(selectedPost)}
                  alt={selectedPost.title.rendered}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="bg-bronze text-white px-3 py-1 rounded-full">
                    {getCategory(selectedPost)}
                  </span>
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                
                <div 
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ 
                    __html: selectedPost.content.rendered 
                  }}
                />
                
                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={closeModal}
                    className="bg-deep-blue hover:bg-blue-800"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogSection;
