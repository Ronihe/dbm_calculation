/*function dbm_calculation()
{
    var tech_fee = document.getElementById("tech").value //float
    var media_cost = document.getElementById("media").value;
    var data_fee = document.getElementById("data").value;
    var service_fee = document.getElementById("service").value; //float

    console.log("tech: "+tech_fee+" media: "+media_cost+" data: "+data_fee+" other: "+service_fee)
    try {
            media_invoice = (parseFloat(media_cost)*parseFloat(tech_fee)+parseFloat(data_fee)) * parseFloat(service_fee)
            console.log("Media Invoice is:" +media_invoice)
            document.getElementById("result").innerText = "The invoice about is: $"+media_invoice
        }
    catch(err) {
        document.getElementById("result").innerText = "Make sure you have entered the correct amounts as numbers";
        }
    return false
}*/
document.querySelector('#submit').addEventListener("click", function(event) {
    var tech_fee = document.getElementById("tech").value //float
    var media_cost = document.getElementById("media").value;
    var data_fee = document.getElementById("data").value;
    var service_fee = document.getElementById("service").value; //float
    tech_fee = parseFloat(1+(tech_fee/100))
    service_fee = parseFloat(1+(service_fee/100))
    media_cost = parseFloat(media_cost)
    data_fee = parseFloat(data_fee)

    try {
            media_invoice = (((media_cost*tech_fee)+data_fee)* service_fee).toFixed(2)
            document.getElementById("calculation").innerText = "Invoice Amount = (("+media_cost+" * "+tech_fee+"%) + "+data_fee+") * "+service_fee+"% = "+media_invoice
            min_con = (media_invoice-(media_cost+data_fee)).toFixed(2)
            document.getElementById("min_contribution").innerText = "Minimum Contribution = "+media_invoice+" - ("+media_cost+"+"+data_fee+") = "+min_con
        }
    catch(err) {
        document.getElementById("result").innerText = "Make sure you have entered the correct amounts as numbers";
        }
    event.preventDefault();
}, false);
/*document.getElementById('submit').addEventListener('click', dbm_calculation);
*/
