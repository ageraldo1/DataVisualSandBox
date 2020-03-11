var plot = [];

function init() {
    view1_chartjs_plot();
    view2_chartjs_plot();
    view3_chartjs_plot();
    view4_chartjs_plot();
    view5_chartjs_plot();
    view6_chartjs_plot();
    view7_chartjs_plot();
    view8_chartjs_plot();
    view9_chartjs_plot();
    view10_chartjs_plot();
    view11_chartjs_plot();
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

function view4_chartjs_plot() {

    loadData('/rnd_data/bar')
        .then(data => {           

            if (data['status'] === 0) {
                let canvas = document.querySelector(`#view4_chartjs_plot`).getContext('2d');

                if (plot[3]) plot[3].destroy();

                plot[3] = new Chart(canvas, {
                    type: 'pie',
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
                        }]
                    },
                    options: {
						responsive: true
                    }
                });  
                

            } else {
                console.log(`message : ${data['message']} - status : ${data['status']}`);
            }
       
        })
        .catch(err => console.log(err));
}

function view5_chartjs_plot() {

    let canvas = document.querySelector(`#view5_chartjs_plot`).getContext('2d');
    const samples = this.Samples.utils;

    if (plot[4]) plot[4].destroy();

    // sample 1
    /*
    record = {
        min: -111.96094206,
        q1: -103.3077247,
        median: 12.07022623,
        q3: 50.16658523,
        max: 50.74278888,
        outliers: [-163.31074724, -158.47020663, -137.41263501, 100.08162191, 229.0154389]
    }

    p_data = [record]
    */

    const boxplotData = {
        labels: samples.months({count: 7}),
        datasets: [{
            label : "Dataset 1",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: samples.boxplots({count: 7}),
            outlierColor: '#999999'
        },
        ]
    };

    const options = {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Box Plot Chart'
        },
        scales: {
          yAxes: [{
            ticks: {
              minStats: 'min',
              maxStats: 'max'
            }
          }]
        }
    };


    plot[4] = new Chart(canvas, {
        type: 'boxplot',
        data: boxplotData,
        options: options
    });


}

function view6_chartjs_plot() {
    let chart = am4core.create("view6_chartjs_plot", am4charts.SankeyDiagram);

    chart.data = [
        { "from": "A", "to": "D", "value": 10 },
        { "from": "B", "to": "D", "value": 8 },
        { "from": "B", "to": "E", "value": 4 },
        { "from": "C", "to": "E", "value": 3 },
        { "from": "D", "to": "G", "value": 5 },
        { "from": "D", "to": "I", "value": 2 },
        { "from": "D", "to": "H", "value": 3 },
        { "from": "E", "to": "H", "value": 6 },
        { "from": "G", "to": "J", "value": 5 },
        { "from": "I", "to": "J", "value": 1 },
        { "from": "H", "to": "J", "value": 9 }
      ];

      chart.dataFields.fromName = "from";
      chart.dataFields.toName = "to";
      chart.dataFields.value = "value";

      let nodeTemplate = chart.nodes.template;
      
      nodeTemplate.width = 30;
      nodeTemplate.stroke = am4core.color("#fff");
      nodeTemplate.strokeWidth = 2;
      nodeTemplate.nameLabel.locationX = 0.2;
      nodeTemplate.nameLabel.label.fill = am4core.color("#fff");
      nodeTemplate.nameLabel.label.fontWeight = "bold";      

}

function view7_chartjs_plot() {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("view7_chartjs_plot", am4charts.ChordDiagram);

    chart.data = [
        { "from": "A", "to": "D", "value": 10 },
        { "from": "B", "to": "D", "value": 8 },
        { "from": "B", "to": "E", "value": 4 },
        { "from": "B", "to": "C", "value": 2 },
        { "from": "C", "to": "E", "value": 14 },
        { "from": "E", "to": "D", "value": 8 },
        { "from": "C", "to": "A", "value": 4 },
        { "from": "G", "to": "A", "value": 7 },
        { "from": "D", "to": "B", "value": 1 }
      ];
      
      chart.dataFields.fromName = "from";
      chart.dataFields.toName = "to";
      chart.dataFields.value = "value";

}

function view8_chartjs_plot() {

    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_animated);
    
    let chart = am4core.create("view8_chartjs_plot", am4plugins_wordCloud.WordCloud);
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    
    series.text = "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as 'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barr'd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother's death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not fail'd to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew's purpose,--to suppress His further gait herein; in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway; Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty. Tis sweet and commendable in your nature, Hamlet,To give these mourning duties to your father: But, you must know, your father lost a father; That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness; 'tis unmanly grief; It shows a will most incorrect to heaven, A heart unfortified, a mind impatient, An understanding simple and unschool'd: For what we know must be and is as common As any the most vulgar thing to sense, Why should we in our peevish opposition Take it to heart? Fie! 'tis a fault to heaven, A fault against the dead, a fault to nature, To reason most absurd: whose common theme Is death of fathers, and who still hath cried, From the first corse till he that died to-day, 'This must be so.' We pray you, throw to earth This unprevailing woe, and think of us As of a father: for let the world take note, You are the most immediate to our throne; And with no less nobility of love Than that which dearest father bears his son, Do I impart toward you. For your intent In going back to school in Wittenberg, It is most retrograde to our desire: And we beseech you, bend you to remain Here, in the cheer and comfort of our eye, Our chiefest courtier, cousin, and our son.";     

}

function view9_chartjs_plot() {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("view9_chartjs_plot", am4plugins_forceDirected.ForceDirectedTree);
    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    series.data = [{
        "name": "First",
        "children": [{
          "name": "A1", "value": 100
        }, {
          "name": "A2", "value": 60
        }, {
          "name": "A3", "value": 30
        }]
      }, {
        "name": "Second",
        "children": [{
          "name": "B1", "value": 135
        }, {
          "name": "B2", "value": 98
        }, {
          "name": "B3", "value": 56
        }]
      }, {
        "name": "Third",
        "children": [{
          "name": "C1", "value": 335
        }, {
          "name": "C2", "value": 148
        }, {
          "name": "C3", "value": 126
        }, {
          "name": "C4", "value": 26
        }]
      }, {
        "name": "Fourth",
        "children": [{
          "name": "D1", "value": 415
        }, {
          "name": "D2", "value": 148
        }, {
          "name": "D3", "value": 89
        }, {
          "name": "D4", "value": 64
        }, {
          "name": "D5", "value": 16
        }]
      }, {
        "name": "Fifth",
        "children": [{
          "name": "E1", "value": 687
        }, {
          "name": "E2", "value": 148
        }]
      }];
      
      // Set up data fields
      series.dataFields.value = "value";
      series.dataFields.name = "name";
      series.dataFields.children = "children";
      
      // Add labels
      series.nodes.template.label.text = "{name}";
      series.fontSize = 10;
      series.minRadius = 15;
      series.maxRadius = 40;
      
      series.centerStrength = 0.5;    


}

function view10_chartjs_plot() {

    if (plot[9]) plot[9].destroy();
    if (plot[10]) plot[10].destroy();
    if (plot[11]) plot[11].destroy();
    
    plot[9] = new ApexCharts(document.querySelector("#view10_chartjs_plot"), {
            chart: {
                type: 'radialBar',
            },
            series: [Math.round(Math.random() * 100)],
            labels: ['Progress'],
    });

    plot[9].render();      


    plot[10] = new ApexCharts(document.querySelector("#view11_chartjs_plot"), {
            chart: {
                type: 'radialBar',
            },
            series: [Math.round(Math.random() * 100)],

            plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 15,
                    size: "70%"
                  },
                 
                  dataLabels: {
                    showOn: "always",
                    name: {
                      offsetY: -10,
                      show: true,
                      color: "#888",
                      fontSize: "13px"
                    },
                    value: {
                      color: "#111",
                      fontSize: "30px",
                      show: true
                    }
                  }
                }
              },
            
              stroke: {
                lineCap: "round",
              },
            
            labels: ['Progress'],
    });
    plot[10].render();      


    plot[11] = new ApexCharts(document.querySelector("#view12_chartjs_plot"),{
        chart: {
            type: "radialBar",
        },
        series: [Math.round(Math.random() * 100)],
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#293450"
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
              }
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#fff",
                fontSize: "13px"
              },
              value: {
                color: "#fff",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Progress"]     

    });

    plot[11].render();      


}

function view11_chartjs_plot() {

    if (plot[12]) plot[12].destroy();
    
    plot[12] = new ApexCharts(document.querySelector("#view13_chartjs_plot"),{
        series: [
            {
                name: 'Metric1',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric2',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric3',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric4',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric5',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric6',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric7',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric8',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            

            {
                name: 'Metric9',
                data: Array.from({length: 18}, (v, i) => { return { 'x' : 'w'+i, 'y' : Math.floor(Math.random() * 90)};}),
            },            
            

        ],
        chart: {
            type: 'heatmap'
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        title: {
            text: 'HeatMap Chart (Single color)'
        }
    });
    
    plot[12].render();      

}


function randomValues(count, min, max) {
    const delta = max - min;
   
    return Array.from({length: count}).map(() => Math.random() * delta + min);
}



$( document ).ready(() => {
    init();
});