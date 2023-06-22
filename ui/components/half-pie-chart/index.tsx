"use client";
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


interface HalfPieChartProps {
    labels: Array<string>,
    data: Array<number>,
    label: string

}

export default function HalfPieChart(props: HalfPieChartProps){
    const data = {
        labels: props.labels,
        datasets: [{
            label: props.label,
            data: props.data,
            borderWidth: 1
        }]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <Pie
            options={options}
            data={data}
        />
        )


}