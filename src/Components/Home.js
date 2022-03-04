import React from "react";
import { Bar } from 'react-chartjs-2';


function Home() {
    return (

        <div style={{height:"500px",width:"500px"}}>


            <h1>home</h1>

            <Bar

                data={{
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],

                    datasets: [{
                        label: 'My First Dataset',
                        data: [30, 50, 10],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        
                        
                    }]

                }}
                cx={20}
                cy={20}
                
            />




        </div>


    );
}

export default Home;