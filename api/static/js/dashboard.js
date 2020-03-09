var plot = [];

function init() {
    view1_chartjs_plot();
    view2_chartjs_plot();
    view3_chartjs_plot();
}

const loadData = async (endpoint) => {
    let headers = new Headers();
    
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        redirect: 'follow'
      }
    });
  
    if ( response.status !== 200) {
      throw new Error('Error loading data');
    };
  
    return await response.json();
}

function refresh(){
    init();
}

function view1_chartjs_plot() {

    loadData('/rnd_data/bar')
        .then(data => {           

            if (data['status'] === 0) {
                let canvas = document.querySelector(`#view1_chartjs_plot`).getContext('2d');

                if (plot[0]) plot[0].destroy();

                plot[0] = new Chart(canvas, {
                    type: 'bar',
                    data: {
                        labels: data['result']['label'],
                        datasets: [{
                            label: '# of Sample Data',
                            data: data['result']['data'],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 0.5
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });  
            } else {
                console.log(`message : ${data['message']} - status : ${data['status']}`);
            }
            
        
        })
        .catch(err => console.log(err));
}

function view2_chartjs_plot() {
    loadData('/rnd_data/bar')
        .then(data => {           

            if (data['status'] === 0) {
                let canvas = document.querySelector(`#view2_chartjs_plot`).getContext('2d');

                if (plot[1]) plot[1].destroy();

                plot[1] = new Chart(canvas, {
                    type: 'horizontalBar',
                    data: {
                        labels: data['result']['label'],
                        datasets: [{
                            label: '# of Sample Data',
                            data: data['result']['data'],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 0.5
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });  
            } else {
                console.log(`message : ${data['message']} - status : ${data['status']}`);
            }
            
        
        })
        .catch(err => console.log(err));    
}


function view3_chartjs_plot() {
    loadData('/rnd_data/line')
        .then(data => {           

            if (data['status'] === 0) {
                let canvas = document.querySelector(`#view3_chartjs_plot`).getContext('2d');

                if (plot[2]) plot[2].destroy();

                plot[2] = new Chart(canvas, {
                    type: 'line',
                    data: {
                        labels: data['result']['label'],
                        datasets : [{
                            label: 'label1',
                            backgroundColor: 'rgb(255, 99, 132, 0.2)',
                            borderColor: 'rgb(255, 99, 132, 0.2)',
                            fill : false,
                            data : data['result']['data'][0]
                        },
                        {
                            label: 'label2',
                            backgroundColor: 'rgb(255, 159, 64, 0.2)',
                            borderColor: 'rgb(255, 159, 64, 0.2)',
                            fill : false,
                            data : data['result']['data'][1]
                        }

                    ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio:false,

                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },                      


                        
                    }
                });  
            } else {
                console.log(`message : ${data['message']} - status : ${data['status']}`);
            }
            
        
        })
        .catch(err => console.log(err));    
}


$( document ).ready(() => {
    init();
});