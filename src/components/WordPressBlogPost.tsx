
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WordPressPost } from '@/hooks/useWordPressPosts';

interface WordPressBlogPostProps {
  post: WordPressPost;
  featured?: boolean;
}

const WordPressBlogPost = ({ post, featured = false }: WordPressBlogPostProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getImageUrl = () => {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    // Imagem padrão caso não tenha featured image
    return "https://images.unsplash.com/photo-1544551763-46a013bb2b58?q=80&w=400&h=250&auto=format&fit=crop";
  };

  const getCategory = () => {
    if (post._embedded?.['wp:term']?.[0]?.[0]?.name) {
      return post._embedded['wp:term'][0][0].name;
    }
    return "Medicina Chinesa";
  };

  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img 
            src={getImageUrl()}
            alt={post.title.rendered}
            className="w-full h-64 lg:h-full object-cover"
          />
          <CardContent className="p-8 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-gold text-deep-blue px-3 py-1 rounded-full text-sm font-semibold">
                {getCategory()}
              </span>
            </div>
            <CardTitle className="text-2xl mb-4 text-deep-blue">
              {post.title.rendered}
            </CardTitle>
            <CardDescription className="text-gray-600 mb-4 text-base">
              {stripHtml(post.excerpt.rendered)}
            </CardDescription>
            <p className="text-sm text-gray-500 mb-6">{formatDate(post.date)}</p>
            <Button className="bg-deep-blue hover:bg-blue-800 w-fit">
              Ler Mais
            </Button>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={getImageUrl()}
        alt={post.title.rendered}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-gold text-deep-blue px-2 py-1 rounded-full text-xs font-semibold">
            {getCategory()}
          </span>
        </div>
        <CardTitle className="text-xl mb-3 text-deep-blue line-clamp-2">
          {post.title.rendered}
        </CardTitle>
        <CardDescription className="text-gray-600 mb-3 text-sm line-clamp-3">
          {stripHtml(post.excerpt.rendered)}
        </CardDescription>
        <p className="text-xs text-gray-500 mb-4">{formatDate(post.date)}</p>
        <Button className="bg-deep-blue hover:bg-blue-800 w-full" size="sm">
          Ler Mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default WordPressBlogPost;
