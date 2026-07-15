 /* Get data from the FakeStore API (Fetch or Axios the data)
Have an eChart bar for each category
Show how many items are listed under each category  */ 

      let options = {
        title: { text: "Fake Store Categories" },
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            name: "# products",
            type: "bar",
            data: [],
          },
        ],
      }; 
      
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => {

const mensCount = json.filter(
product => product.category === "men's clothing"
).length;

const womensCount = json.filter(
    product => product.category === "women's clothing"
).length;

const electronicsCount = json.filter(
    product => product.category === "electronics"
).length;

const jeweleryCount = json.filter(
    product => product.category === "jewelery"
).length;

    options.xAxis.data = [
      "Men's Clothing",
      "Women's Clothing",
      "Electronics",
      "Jewelery"
    ];

    options.series[0].data = [
      mensCount,
      womensCount,
      electronicsCount,
      jeweleryCount
    ];
        })
        .then(() => {

          myChart.setOption(options);
        });
      // Initialize the echarts instance based on the prepared div
      let myChart = echarts.init(document.getElementById("main"));