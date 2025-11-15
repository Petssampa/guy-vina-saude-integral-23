// src/components/BlogPost.tsx
interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
}

const BlogPost = ({ title, date, author, content }: BlogPostProps) => {
  return (
    <article className="blog-post">
      <header className="entry-header">
        <h1 className="entry-title">{title}</h1>
        <div className="entry-meta">
          <time className="updated">{date}</time>
          <span className="byline">Por {author}</span>
        </div>
      </header>
      <div className="entry-content" dangerouslySetInnerHTML={{ __html: content }} />
      <footer className="entry-meta">
        <span className="cat-links">Categoria: Raças</span>
      </footer>
      <div className="author-profile">
        <div className="insights-author-info">
          <h2>Maya Arruda</h2>
          <p className="author-description">Apaixonada por felinos desde a infância...</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
