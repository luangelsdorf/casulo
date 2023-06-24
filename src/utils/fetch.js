import { dataSrc, env } from "./env";

export default async function fetchAPI(endpoint = '', queryString = '', populateDeep = true, dataOnly = true) {
  let result;

  if (dataSrc === 'local') {
    result = require(`src/data/${endpoint}.json`);
  } else {
    const populate = populateDeep ? 'deep' : '*';
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?populate=${populate}${queryString}`);
    result = await response.json();

    // update local json data
    if (typeof window === 'undefined' && env === 'dev') {
      const fs = require('fs');
      fs.writeFile(`src/data/${endpoint}.json`, JSON.stringify(result), error => error && console.error(error));
    }
  }

  if (dataOnly) {
    if (result.data.attributes) {
      let { data: { attributes: data } } = result;
      return data;
    }
    else {
      let { data: data } = result;
      return data;
    }
  }

  else {
    return result;
  }
}

export async function getLayoutContent() {
  const footer = await fetchAPI('footer');

  const info = await fetchAPI('info');

  return { footer, info };
}