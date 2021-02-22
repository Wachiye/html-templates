$(document).ready(function(){
    //get products
    function getProducts() {
        $.get("http://localhost/e-commerce/api/product/read.php")
        .then(res=>{
            // if(res.records.length > 0){
            //     $('.products').html("");
            //     $('.products').append(`<div class="col-12 col-sm-6 col-md-4 col-lg-3 product">
            //     <div class="card">
            //         <div class="card-img-top">
            //             <img src="./images/products/shoes/converse_yellow.png" alt="">
            //         </div>
            //         <div class="card-body">
            //             <h5 class="card-title">${res.records[0].name}</h5>
            //             <ul class="list-inline">
            //                 <li class="list-inline-item text-warning"><i class="fa fa-star"></i></li>
            //                 <li class="list-inline-item text-warning"><i class="fa fa-star"></i></li>
            //                 <li class="list-inline-item text-warning"><i class="fa fa-star"></i></li>
            //                 <li class="list-inline-item text-warning"><i class="fa fa-star"></i></li>
            //                 <li class="list-inline-item "><i class="fa fa-star text-black-50"></i></li>
            //             </ul>
            //             <div class="price-list">
            //                 <span class="price">Ksh ${res.records[0].price}</span>
            //             </div>
            //             <div class="actions">
            //                 <a href="#" class="add-to-cart">
            //                     <i class="fa fa-plus"></i>
            //                 </a>
            //                 <a href="#">More</a>
            //             </div>
            //         </div>
            //     </div>
            // </div>`)
            // }
        });
    }
    //show oe hide search form
    $('#search-toggle').on('click', ()=>{
        $('.search').toggleClass('d-none');
    });
    $('#filter-toggle').on('click',()=>{
        $('.navigation').toggleClass('active');
    });

    getProducts();
});