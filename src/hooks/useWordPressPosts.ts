
import { useQuery } from '@tanstack/react-query';
import { WORDPRESS_CONFIG } from '@/config/wordpress';

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
  categories: number[];
  tags: number[];
  link: string;
  slug: string;
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

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

export const useWordPressPosts = (limit: number = WORDPRESS_CONFIG.POSTS_PER_PAGE) => {
  return useQuery({
    queryKey: ['wordpress-posts', limit],
    queryFn: async (): Promise<WordPressPost[]> => {
      try {
        console.log('Conectando ao WordPress:', WORDPRESS_CONFIG.API_BASE);
        
        const response = await fetch(
          `http://localhost/guyviana/wp-json/wp/v2/posts?per_page=${limit}&_embed`,
          {
            headers: {
              'Accept': 'application/json',
            },
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        console.log('Posts carregados com sucesso do WordPress:', posts.length);
        return posts;
      } catch (error) {
        console.error('Erro ao buscar posts do WordPress:', error);
        
        if (WORDPRESS_CONFIG.USE_MOCK_DATA) {
          console.log('Usando dados mock como fallback');
          return getMockPosts();
        }
        
        throw error;
      }
    },
    staleTime: WORDPRESS_CONFIG.CACHE_TIME,
    retry: 1
  });
};

export const useWordPressCategories = () => {
  return useQuery({
    queryKey: ['wordpress-categories'],
    queryFn: async (): Promise<WordPressCategory[]> => {
      try {
        const response = await fetch(`http://localhost/guyviana/wp-json/wp/v2/categories`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const categories = await response.json();
        return categories;
      } catch (error) {
        console.error('Erro ao buscar categorias do WordPress:', error);
        return [];
      }
    },
    staleTime: WORDPRESS_CONFIG.CACHE_TIME * 2, // 10 minutos
    retry: 1
  });
};

// Posts mock para desenvolvimento/fallback
const getMockPosts = (): WordPressPost[] => [
  {
    id: 1,
    title: { rendered: "Os Fundamentos do Qi Gong: Uma Jornada de Autocura" },
    excerpt: { 
      rendered: "Descubra como esta prática milenar pode transformar sua energia vital e promover o equilíbrio entre corpo e mente."
    },
    content: { rendered: "" },
    date: "2025-01-15T10:00:00",
    featured_media: 0,
    categories: [1],
    tags: [],
    link: "",
    slug: "fundamentos-qi-gong",
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
    content: { rendered: "" },
    date: "2025-01-10T14:30:00",
    featured_media: 0,
    categories: [2],
    tags: [],
    link: "",
    slug: "acupuntura-ansiedade",
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
    content: { rendered: "" },
    date: "2025-01-05T09:15:00",
    featured_media: 0,
    categories: [3],
    tags: [],
    link: "",
    slug: "fitoterapia-chinesa",
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

export type { WordPressPost, WordPressCategory };
