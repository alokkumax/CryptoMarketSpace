import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
export default function Graph() {

  useEffect(() => {
    const price = [];
    const time = [];
    axios
      .get("https://supermind-staging.vercel.app/api/test/graph#")
      .then((res) => {
        console.log(res);
        res.data.map(item =>{
            // console.log(item)    
            price.push(item.price)
            time.push((item.datetime).substring(11,15))
        })

        setState({
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: time,
            },
          },)

        setSeries([{
            name: "series-1",
            data: price,
          }])

        console.log(price,time)

      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
  });

  const [series, setSeries] = useState([{
    name: "series-1",
    data: [],
  }])

  return (
    <div className="container">
      <Chart
        options={state}
        series={series}
        type="line"
        width="100%"
      />
    </div>
  );
}
