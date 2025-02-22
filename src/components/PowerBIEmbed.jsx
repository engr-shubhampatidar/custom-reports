const PowerBIEmbed = () => {
    return (
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Power BI Report</h2>
        <iframe
          title="Power BI Report"
          width="100%"
          height="500px"
          src="https://app.powerbi.com/view?r=YOUR_REPORT_ID"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default PowerBIEmbed;
  