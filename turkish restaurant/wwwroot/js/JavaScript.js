function items() {

    var cheesepizza = document.getElementById(" item1 ");
    var maxicanpizza = document.getElementById(" item2 ");
    var orangejuice = document.getElementById(" item3 ");
    var turkishkebab = document.getElementById(" item4 ");
    var waterbottle = document.getElementById(" item5 ");
    var sum = parseInt(item1.value) + parseInt(item2.value) + parseInt(item3.value) + parseInt(item4.value) + parseInt(item5.value);
    document.getElementById("Results").value = sum;
    var avg = sum / 5;
    document.getElementById("average").value = avg;
    var tax = 0.17 * sum;
    document.getElementById("Tax").value = tax;
}
