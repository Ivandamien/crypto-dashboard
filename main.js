const chart = document.querySelector("#chart").getContext("2d");
// create a new chart instance
new Chart(chart, {
    type: "line",
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [

            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 3994, 48847, 48116, 61004, 78555],
                borderColor: 'red',
                borderWidth: 2

            },
            {
                label: 'ETH',
                data: [31500, 41000, 49631, 88095, 26000, 46000, 32698, 5000, 3000, 18832, 26298, 36500],
                borderColor: 'blue',
                borderWidth: 2

            },
        ]
    },
    options: {
        responsive: true
    }
})