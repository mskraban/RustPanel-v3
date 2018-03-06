var last_restart = Math.round(uptime/86400);
var server_status;

if (is_online == 0) {
    var server_status = "Up";
} else {
    var server_status = "Down";
}


var players_cur;
var stack = [];
stack.push(players_cur);

console.log(players_cur);
console.log(stack);


$( document ).ready(function() {
    var ctx = document.getElementById("myChart").getContext('2d');

    var val_one = 1;
    var val_two = 2;
    var val_three = 3;
    var val_four = 4;

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["7:00", "8:00", "9:00", "10:00", "11:00"],
            datasets: [{
                label: 'Players',
                data: [val_one, val_two, val_three, val_four, players_cur],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],

                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

/* Funkcija za posodabljanje vrednosti
    setInterval(function() {
        var data = chart.data.datasets[0].data;
        data.push(players_cur);    // add the new value to the right
        data.shift();        // remove the first left value
        chart.update();
    }, 1000);
*/

    if (is_online == 0) {
        $("#icon_status").toggleClass('fa fa-arrow-circle-up fa-2x');
    }
    else {
        $("#icon_status").toggleClass('fa fa-arrow-circle-down fa-2x');
    }
});
