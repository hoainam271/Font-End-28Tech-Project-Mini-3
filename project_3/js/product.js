import {
    drawProduct
} from "./drawProduct.js";
import {
    buttonSearch,
    filter,
    inputSearch,
    pagiNext,
    pagiNumber,
    pagiPrev,
    params
} from "./variable.js";


drawProduct();

// Search

const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function () {
    search();
});
inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search();
    }
});
//end Search


//Filter
filter.addEventListener("change", function (e) {

    switch (e.target.value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc";
            break;
        case "gia-thap-den-cao":
            params.sort = "discountPercentage";
            params.order = "asc";
            break;
        default:
            break;
    }
    drawProduct();
})



//end Filter

// pagination


pagiNext.addEventListener("click", function () {
    params.page = params.page + 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
});
pagiPrev.addEventListener("click", function () {
    if (params.page > 1) {
        params.page = params.page - 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
});
// end pagination