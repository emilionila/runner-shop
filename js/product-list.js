class ProductList{
    constructor() {
        this.container = document.querySelector('.cards-container');
        this.productsService = new ProductsService();
        this.renderProducts();
    }
    async renderProducts(){
        let productListDomString = '';
        const products = await this.productsService.getProducts();
        products.forEach(product => {
            productListDomString += this.createProductDomString(product);
        });
        this.container.innerHTML = productListDomString;
    }
    createProductDomString(product){
       return `<article class="card">
            <div class="card-image-container">
            <img src="images/${product.image}" alt="" class="card-img">
            <div class="card-img-hover">
            <p class="card-hover-discount">${product.discount}</p>
            <p class="card-hover-prev-price">${product.prevPrice}</p>
</div>
</div>
            
                <div class="card-body">
                    <h5 class="card-title"><a href="product.html">${product.title}</a><br>
                        <span class="card-price">${product.price}$</span>
                    </h5>
                    <p class="card-text">${product.available}</p>
                </div>
        </article>`;
    }
}

new ProductList();