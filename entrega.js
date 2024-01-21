class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProduct(title) {
        return this.products.find(product => product.title === title) || null;
    }

    getProductById(productCode) {
        return this.products.find(product => product.code === productCode) || null;
    }
}


const product1 = new Product("Smartphone", "Potente teléfono inteligente con cámara de alta resolución", 599.999, "smartphone.jpg", "P001", 50);
const product2 = new Product("Laptop", "Notebook ligera y potente para trabajo y entretenimiento", 1299999.99, "laptop.jpg", "P002", 30);

const productManager = new ProductManager();

productManager.addProduct(product1);
productManager.addProduct(product2);

const searchedProduct = productManager.getProduct("Smartphone");
if (searchedProduct) {
    console.log("Producto encontrado:", searchedProduct.title);
    console.log("Descripción:", searchedProduct.description);
    console.log("Precio:", searchedProduct.price);
    console.log("Stock disponible:", searchedProduct.stock);
} else {
    console.log("Producto no encontrado.");
}

const productById = productManager.getProductById("P002");
if (productById) {
    console.log("Producto encontrado por ID:", productById.title);
    console.log("Descripción:", productById.description);
    console.log("Precio:", productById.price);
    console.log("Stock disponible:", productById.stock);
} else {
    console.log("Producto no encontrado por ID.");
}
