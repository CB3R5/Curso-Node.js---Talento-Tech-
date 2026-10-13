const BASE_URL = "https://fakestoreapi.com";

// Get command-line arguments
const [method, resource, ...args] = process.argv.slice(2);


/**
 * Get all products from the API.
 */
async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    const products = await response.json();

    console.log(products);
}


/**
 * Get a product by its ID.
 */
async function getProductById(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const product = await response.json();

    console.log(product);
}


/**
 * Create a new product.
 */
async function createProduct(title, price, category) {
    const product = {
        title,
        price: Number(price),
        category
    };

    const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    const result = await response.json();

    console.log(result);
}


/**
 * Delete a product by its ID.
 */
async function deleteProduct(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE"
    });

    const result = await response.json();

    console.log(result);
}


/**
 * Execute the command entered by the user.
 */
async function main() {
    const [entity, id] = (resource || "").split("/");

    if (method === "GET" && entity === "products" && !id) {
        await getAllProducts();

    } else if (method === "GET" && entity === "products" && id) {
        await getProductById(id);

    } else if (method === "POST" && entity === "products") {
        const [title, price, category] = args;
        await createProduct(title, price, category);

    } else if (method === "DELETE" && entity === "products" && id) {
        await deleteProduct(id);

    } else {
        console.log("Invalid command.");
    }
}

// Start the application
main();
