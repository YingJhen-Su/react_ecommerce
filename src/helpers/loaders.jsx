// data loader

// latest 5 products
export const latestLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");

    return res.json();
};

// products/search page
export const productsLoader = async ({ request }) => {
    const res = await fetch("https://fakestoreapi.com/products");
    let response = await res.json();

    const url = new URL(request.url);
    if (url.searchParams.has("q")) {
        const query = url.searchParams.get("q");
        response = filterQuery(response, query);
    }

    return response;
};

// category page
export const categoryLoadder = async ({ params }) => {
    const res = await fetch(
        "https://fakestoreapi.com/products/category/" + params.id
    );

    return res.json();
};

// 過濾 search query
const filterQuery = (response, query) => {
    const queryArr = query.replace(/\s+/g, " ").split(" ");

    const newResponse = response.filter((item) => {
        const title = item.title.toLowerCase();

        let flag = true;
        for (let i = 0; i < queryArr.length; i++) {
            // if title 不包含 query
            if (title.indexOf(queryArr[i].toLowerCase()) === -1) {
                flag = false;
                break;
            }
        }

        return flag;
    });

    return newResponse;
};
