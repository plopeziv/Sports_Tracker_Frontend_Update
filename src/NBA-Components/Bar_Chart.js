import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const FirstPlot = ({player}) => {
  const [contractItems, setContractItems] = useState([]);

  useEffect( () => {
    fetch("http://127.0.0.1:8000//NBA/Contracts/?format=json")
    .then(response => response.json())
    .then(json => {
      setContractItems(json)
      })
  }, []);

  var contract = contractItems.filter(function(item){
    return item.player === player
  })[0];

  if (contract !== undefined) {
    var scale = 1000000
    var ylist = [contract.number_2022_23/scale, contract.number_2023_24/scale,
          contract.number_2024_25/scale, contract.number_2025_26/scale,
          contract.number_2026_27/scale, contract.number_2027_28/scale];
    } else {
      ylist = [];
    }


    return(
      <div className="Contract-data" style={{
        width: "75%",
        height: "90%",
        transform:"translate(0%,5%)",
        background:"white",
      }}>
        <ReactEcharts

        style= {{
          height: "100%",
          width: "100%",
        }}

        option={{
          title: {
            text: player + "'s Contract Obligations",
            left:"center",
            top: "3%"
            },

          series:[{
            data: ylist,
            type: "bar"
            }],

          xAxis: {
            type: "category",
            data: ["2023", "2024", "2025", "2026", "2027", "2028"],
            name: "Year",
            nameLocation: "middle",
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: "15",
            },
            nameGap: "25",
          },

          yAxis:{
            type: "value",
            min: "0",
            max:"50",
            name: "Salary in Millions",
            nameLocation: "middle",
            nameTextStyle: {
              fontWeight: "bold",
              fontSize:"15",
              padding: [0,0,20,0],
              },
          },

          tooltip:{
            show: "true",
            formatter: "{c}"
          }

        }} />
      </div>
    )
}


export default FirstPlot;
