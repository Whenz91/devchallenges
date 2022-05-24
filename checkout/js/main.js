document.body.addEventListener("click", (e) => {
    if(!e.target.classList.contains("list-item__body__input-box__button")) return;

    Boolean(e.target.dataset.increase) ? increaseProductCount(e.target.previousElementSibling) : decreaseProductCount(e.target.nextElementSibling);

});


function increaseProductCount(input) {
    input.value++;
}
function decreaseProductCount(input) {
    if(input.value > 0) {
        input.value--;
    }
}

const orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Your order has been successfully submitted");
    e.target.reset();
});