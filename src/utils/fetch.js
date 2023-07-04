export default async function fetchAPI(endpoint = '', queryString = '', populate = 'deep', dataOnly = true) {
  let result;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?${queryString}${populate ? `&populate=${populate}` : ''}`, {
    headers: {
      Authorization: `bearer ${process.env.API_TOKEN}`,
    }
  });
  result = await response.json();

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