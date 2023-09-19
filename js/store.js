let totalCost = 0
let numberOfItems = 0;


function placeOrder(){
    alert('Success! Your order has been placed.')
}

function addToCart(title, price){
    let cartItems = document.getElementById('cart-items');

    let newItem = document.createElement('div');
    newItem.classList.add('row');
    newItem.innerHTML = `
        <div class="col-6">
        
            <p>${title}</p>
        
        </div>

        <div class="col-6">
            <p style="text-align: right; margin-right: 0px;">₱${price}</p>
        </div>

    
    `
   
    cartItems.appendChild(newItem);

    totalCost = totalCost + price;
    
    console.log(totalCost);

    //NUMBER OF ITEMS

    numberOfItems +=1;

    document.getElementById('itemCount').innerText = "Items" + "(" + numberOfItems + "):";

    //COST OF ITEMS BEFORE TAX

    document.getElementById('costItems').innerText = `₱${totalCost}`;
    
    //TAX COMPUTATION

    document.getElementById('taxPercent').innerText = `₱${totalCost * 0.04}`;

    //GRAND TOTAL

    document.getElementById('totalCost').innerText = "₱" + (totalCost + (totalCost * 0.04));
}

