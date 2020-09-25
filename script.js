function billingFunction() {
    var form = {
        same: document.getElementById('same'),
        shippingInfo: {
            name: document.getElementById('shippingName'),
            zip: document.getElementById('shippingZip')
        },
        billingInfo: {
            name: document.getElementById('billingName'),
            zip: document.getElementById('billingZip')
        }
    };

    if (form.same.checked) {
        for (prop in form.shippingInfo) {
            if (form.shippingInfo.hasOwnProperty(prop)) {
                form.billingInfo[prop].value = form.shippingInfo[prop].value;
            }
        }
    } else {
        for (prop in form.billingInfo) {
            if (form.billingInfo.hasOwnProperty(prop)) {
                form.billingInfo[prop].value = "";
            }
        }
    }
};


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    if (this.value < 25)
        document.body.style.background = 'red'
    else if (this.value < 51)
        document.body.style.background = 'yellow'
    else if (this.value < 76)
        document.body.style.background = 'green'
    else
        document.body.style.background = 'cyan'
}


var x = rgb(slider.value, slider.value, 100)
document.body.style.background = x.toString()