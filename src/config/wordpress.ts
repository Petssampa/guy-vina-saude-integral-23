
// Configuração do WordPress
export const WORDPRESS_CONFIG = {
  // URL de produção do WordPress (atualize com sua URL real)
  API_BASE: process.env.NODE_ENV === 'production' 
    ? process.env.VITE_WORDPRESS_API_URL || 'https://seudominio.com/wp-json/wp/v2' // Substitua pela URL real
    : 'http://localhost/guyviana/wp-json/wp/v2', // XAMPP local
  
  // Configurações da API
  POSTS_PER_PAGE: 10,
  CACHE_TIME: 5 * 60 * 1000, // 5 minutos
  
  // Configurações de fallback
  USE_MOCK_DATA: process.env.NODE_ENV === 'production' ? false : true,
};

// INSTRUÇÕES IMPORTANTES:
// 1. Substitua 'https://seudominio.com' pela URL real do seu WordPress
// 2. Certifique-se de que a REST API está habilitada no WordPress
// 3. Teste a URL: https://seudominio.com/wp-json/wp/v2/posts

