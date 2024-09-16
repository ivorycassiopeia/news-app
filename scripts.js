const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        const publishedAt = document.createElement('h4');
        publishedAt.textContent = article.publishedAt;
        articleDiv.appendChild(publishedAt);

        const title = document.createElement('h3');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    
        const description = document.createElement('h5');
        description.textContent = article.description;
        articleDiv.appendChild(description);
  
        const url = document.createElement('h6');
        url.textContent = article.url;
        articleDiv.appendChild(url);

        newsDiv.appendChild(articleDiv);
    }
}

  fetchNews();