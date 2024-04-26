import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import "@/styles/ChartComponent.css";

const CSVChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [selectedExercise, setSelectedExercise] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchCSV() {
      const response = await fetch('/data/strong.csv');
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const uniqueExercises = Array.from(new Set(results.data.map(d => d['Exercise Name']))).sort();
          setExercises(uniqueExercises);
          if (uniqueExercises.length > 0) {
            setSelectedExercise(uniqueExercises[0]);
          }
        }
      });
    }
    fetchCSV();
  }, []);

  useEffect(() => {
    async function fetchCSV() {
      const response = await fetch('/data/strong.csv');
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const filteredData = results.data.filter(d => d['Exercise Name'] === selectedExercise);
          const groupedData = filteredData.reduce((acc, curr) => {
            const date = curr.Date.split(' ')[0]; // Splitting to get only the date part, ignoring time
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(parseFloat(curr.Weight));
            return acc;
          }, {});

          const dates = Object.keys(groupedData).sort(); // Sorting dates
          const weights = dates.map(date => {
            const weights = groupedData[date];
            return weights.reduce((a, b) => a + b, 0) / weights.length; // Average weight for the date
          });

          setChartData({
            labels: dates,
            datasets: [
              {
                label: `Average Weight per Day for ${selectedExercise}`,
                data: weights,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
              }
            ]
          });
        }
      });
    }

    if (selectedExercise) {
      fetchCSV();
    }
  }, [selectedExercise]);
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="exercise-select-label">Exercise</InputLabel>
        <Select
          labelId="exercise-select-label"
          id="exercise-select"
          value={selectedExercise}
          label="Exercise"
          onChange={(e) => setSelectedExercise(e.target.value)}
        >
          {exercises.map((exercise) => (
            <MenuItem key={exercise} value={exercise}>
              {exercise}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {chartData.labels.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default CSVChart;
