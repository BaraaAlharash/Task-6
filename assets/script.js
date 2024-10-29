// // book list
// fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// //book detail
// fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
//     .then(res=>res.json())  
//     .then(json=>console.log(json))
fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then(response => response.json())
    .then(data => {
        const Books = data.slice(-4);
        let bookJS = "";
        for (let i = 0; i < Books.length; i++) {
        bookJS += `
            <div class="col-md-3 mb-4">
                <div class="text-center">
                    <div class="cart-1 bg-main2 mb-4">
                        <img src="${Books[i].simple_thumb}" class="card-img w-75 my-2" alt="cover">
                        <button class="cart btn bg-black text-white w-100 rounded-0">add to cart</button> 
                    </div>
                    <div class="card-body">
                        <h5 class="card-title custom-featured-book-title fs-2 fw-normal">${Books[i].title}</h5>
                        <p class="card-text custom-featured-book-author fs-6 fw-lighter">${Books[i].author}</p>
                    </div>
                </div>
            </div>
        `;
        document.querySelector(".bookDiv").innerHTML = bookJS;
        }
    })
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
    .then(best => best.json())
    .then(best => {
        let img_best = document.querySelector(".img_best") ;
        img_best.innerHTML = `
        <img src="${best.simple_thumb}" class="card-img w-75 my-2" alt="cover">
        `
        let info_best = document.querySelector(".info_best")
        info_best.innerHTML = `
        <p class = "custom-color-gray">By ${best.authors[0].name} </p>
        <h3 class = "mb-5 fw-bold" >${best.title}</h3>
        ${best.fragment_data.html}
        `
    })
    fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then(response => response.json())
    .then(data => {
        const Books = data.slice(0, 8);
        let bookJS = "";
        for (let i = 0; i < Books.length; i++) {
        bookJS += `
            <div class="col-md-3 mb-4">
                <div class="text-center">
                    <div class="cart-1 bg-main2 mb-4">
                        <img src="${Books[i].simple_thumb}" class="card-img w-75 my-2" alt="cover">
                        <button class="cart btn bg-black text-white w-100 rounded-0">add to cart</button> 
                    </div>
                    <div class="card-body">
                        <h5 class="card-title custom-featured-book-title fs-2 fw-normal">${Books[i].title}</h5>
                        <p class="card-text custom-featured-book-author fs-6 fw-lighter">${Books[i].author}</p>
                    </div>
                </div>
            </div>
        `;
        document.querySelector(".popular_book").innerHTML = bookJS;
        }
    })