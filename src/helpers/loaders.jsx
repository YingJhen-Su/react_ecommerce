// data loader

// products/search page
export const productsLoader = async ({ request }) => {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
        throw Error("Could not fetch data.");
    }

    let data = await res.json();

    const url = new URL(request.url);
    if (url.searchParams.has("q")) {
        const query = url.searchParams.get("q");
        data = filterQuery(data, query);
    }

    return data;
};

// category page
export const categoryLoader = async ({ params }) => {
    const res = await fetch(
        "https://fakestoreapi.com/products/category/" + params.id
    );

    if (!res.ok) {
        throw Error("Could not fetch data.");
    }

    return res.json();
};

// product item page
export const productItemLoader = async ({ params }) => {
    const res = await fetch("https://fakestoreapi.com/products/" + params.id);

    if (!res.ok) {
        throw Error("Could not fetch data.");
    }

    return res.json();
};

// 過濾 search query
const filterQuery = (data, query) => {
    const queryArr = query.replace(/\s+/g, " ").split(" ");

    const newData = data.filter((item) => {
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

    return newData;
};
