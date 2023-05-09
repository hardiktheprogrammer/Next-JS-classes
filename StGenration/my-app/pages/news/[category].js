function ArticleListByCategory() {
  export default ArticleListByCategory;
  export async function getServerSideProps(context) {
    const { params } = context;
    const { category } = params;
     
    const response = await fetch(`https://localhost:4000/news?category=${category}`)
    
    const
  }


