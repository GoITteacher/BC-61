export class NewsApi {
  constructor() {
    this.query = '';
    this.page = 1;
    this.pageSize = 20;
  }

  fetchArticles() {
    const BASE_URl = 'https://free-news.p.rapidapi.com';
    const END_POINT = '/v1/search';
    const PARAMS = new URLSearchParams({
      q: this.query,
      page: this.page,
      page_size: this.pageSize,
    });

    const url = `${BASE_URl}${END_POINT}?${PARAMS}`;
    const options = {
      headers: {
        'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      },
    };

    return fetch(url, options).then(res => res.json());
  }
}
