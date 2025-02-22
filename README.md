# 📊 Custom Reports Dashboard  

### 🎮 Description  
The **Custom Reports Dashboard** allows users to select any number of metrics and generate custom reports. These reports can be:  
- Viewed on the dashboard with interactive graphs.  
- Exported as a CSV file with selected metrics as columns and dummy data.  
- Integrated with **Power BI** for advanced data visualization.  

---

### ✨ Features  
- **Custom Metric Selection:** Choose from a variety of metrics to create personalized reports.  
- **Interactive Graphs:** View reports with dynamic graphs powered by **Chart.js**.  
- **CSV Export:** Download reports as CSV files with the selected metrics as columns.  
- **Email Reports:** Send generated reports via email directly from the dashboard.  
- **Power BI Integration:** Seamlessly integrate reports with **Power BI** for advanced analytics.  
- **Responsive UI:** Built with **Tailwind CSS** for a clean and responsive user interface.  

---

### 🛠️ Tech Stack  
This project is built using:  
- **React**: For building the user interface.  
- **Tailwind CSS**: For responsive and modern styling.  
- **Chart.js** and **React-Chartjs-2**: For dynamic and interactive graphs.  
- **React-Csv**: For exporting reports as CSV files.  
- **Power BI Integration**: For advanced reporting and analytics.  

---

### 📦 Dependencies  
```json
"@tailwindcss/vite": "^4.0.7",
"chart.js": "^4.4.7",
"react": "^19.0.0",
"react-chartjs-2": "^5.3.0",
"react-csv": "^2.2.2",
"react-dom": "^19.0.0",
"tailwindcss": "^4.0.7"
```

---

### 🚀 Getting Started  
1. **Clone the repository:**  
    ```sh
    git clone https://github.com/engr-shubhampatidar/custom-reports.git
    cd custom-reports-dashboard
    ```

2. **Install Dependencies:**  
    ```sh
    npm install
    ```

3. **Start the Development Server:**  
    ```sh
    npm run dev
    ```

4. **Open in Browser:**  
    ```
    http://localhost:5173
    ```

---

### 🔧 Configuration  
- Update the **Power BI** integration settings in `src/config/powerbiConfig.js`.  
- Customize metric options in `src/data/metrics.js`.  

---

### 🎲 How to Use  
- **Select Metrics:** Choose the metrics you want to include in the report.  
- **Generate Report:** View the report with interactive graphs on the dashboard.  
- **Export as CSV:** Click on the **Export CSV** button to download the report.  
- **Email Report:** Send the generated report via email directly from the dashboard.  
- **View on Power BI:** Use the integration option to view detailed analytics on Power BI.  

---

### 📊 Graphs and Charts  
Powered by **Chart.js** and **React-Chartjs-2**:  
- Line Graphs, Bar Charts, and Pie Charts available for dynamic reporting.  
- Interactive tooltips and animations for better data visualization.  

---

### 📂 Project Structure  
```
src/
│   ├── components/         # Reusable UI components
│   ├── data/               # Metric options and dummy data
│   ├── pages/              # Main dashboard and report pages
│   ├── utils/              # Helper functions and utilities
│   └── App.js              # Main application component
└── tailwind.config.js      # Tailwind CSS configuration
```

---

### 🔗 Live Demo  
Check out the live version here: [Live Demo](https://custom-reports-three.vercel.app/)  

---

### 📜 License  
This project is licensed under the MIT License.  

---

### 🤝 Contributing  
Contributions are welcome!  
Feel free to open issues or submit pull requests to add new features or fix bugs.  
