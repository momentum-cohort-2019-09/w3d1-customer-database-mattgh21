function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function customerToHtml(customer) {

    return `
    <div class="customer">
        <img src="${customer.picture.large}">
        <div class="customer_name ">${capitalize(customer.name.first)} ${capitalize(customer.name.last)}</div>
        <div class="customer_email">${customer.email}</div>
        <div class="customer_info">
        <div class="customer_address1">${customer.location.street + ". "}</div> 
        <div class="customer_address2">${customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode}</div>
        <div class="customer_phone">${customer.phone}</div>
        <div class="customer_dob">DOB: ${moment(customer.dob).format('MMM do YYYY')}</div>
        <div class="customer_registered">Customer Since: ${moment(customer.registered).format('MMM do YYYY')}</div>
        </div>
    </div>    
    `
}

// for (let customer of customers) {
//     customerToHtml(customer)
//     console.log(customerToHtml(customer))
// }
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#customer').innerHTML = customers.map(customerToHtml).join('\n')
})