const apiKey = process.env.NEWS_API_KEY;
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayNews(data.articles);
    } catch (error) {
      console.error(error);
    }
  }
  
  function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    newsDiv.innerHTML = '';

    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    newsDiv.appendChild(gridContainer);

    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        const publishedAt = document.createElement('h4');
        publishedAt.textContent = article.publishedAt;
        articleDiv.appendChild(publishedAt);

        const title = document.createElement('h3');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    
        const description = document.createElement('h5');
        description.textContent = article.description;
        articleDiv.appendChild(description);
  
        const link = document.createElement('a');
        link.href = article.url;
        link.target = '_blank';
        link.textContent = "Click to read more";
        articleDiv.appendChild(link);

        gridContainer.appendChild(articleDiv);
    }
}

  fetchNews();