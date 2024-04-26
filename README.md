# WHOOP Data Visualizer

## Overview
This web application provides comprehensive analytics based on data from a workout tracking application. It allows users to visualize and analyze their workout progress over time, offering insights into workout intensity, frequency, and effectiveness.

## Features
- **Data Import**: Users can upload their workout data in CSV format directly into the web application.
- **Interactive Charts**: Displays workout data through interactive charts that track various metrics such as total weight lifted, repetitions, and workout frequency.
- **Performance Metrics**: Calculates and shows trends in workout performance, highlighting improvements and areas that need focus.
- **Customizable Views**: Users can customize data views to focus on specific exercises, dates, or workout types.

## Technology Stack
- **Frontend**: React.js, Chart.js for data visualization, JOI-UI for styling.
- **Backend**: Node.js with Express for handling API requests.
- **Deployment**: Deployed on Vercel for easy access.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- React
- TailwindCSS

### Installation

1. **Clone the repository**

   ```
   git clone git@github.com:dark-eraser/strong-data-visualizer.git
   cd strong-data-visualizer
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Start the server**

   ```
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

To use the app, navigate to `http://localhost:3000` on your web browser. Here’s how to proceed:

1. **Upload Data**: Click on the 'Upload' button to select and upload your workout CSV file.
2. **View Charts**: Once the data is uploaded, navigate to the 'Charts' section to see your workout data visualized.
3. **Analyze Trends**: Use the 'Analysis' section to view performance trends and insights.

## Status
- [x] if a .csv file is available in the data folder, then visualization is available
- [x] Visualization of weight over the time per exercise
- [x] Visualization of weight over time per workout
- [ ] Easy navigation
- [ ] File Upload
- [ ] More Graphs
- [ ] Insights & Trends

## Contributing

We welcome contributions to our project. If you have suggestions to improve this app, please fork the repository and create a pull request, or open an issue with the tags "enhancement". Don't forget to give the project a star! Thanks!

1. **Fork the Repository**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## License

Distributed under the MIT License. See `LICENSE` for more information.

