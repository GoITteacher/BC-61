export class NewsApi {
  constructor() {
    this.pageSize = 20;
    this.page = 1;
    this.query = 'Elon Musk';
    this.maxPage = 1;
  }

  fetchArticles() {
    const BASE_URL = 'https://newsapi.org';
    const ENDPOINT = '/v2/everything';

    const PARAMS = new URLSearchParams({
      q: this.query,
      page: this.page,
      pageSize: this.pageSize,
    });

    const url = `${BASE_URL}${ENDPOINT}?${PARAMS}`;

    const options = {
      headers: {
        'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
      },
    };

    return fetch(url, options).then(res => res.json());
  }
}
