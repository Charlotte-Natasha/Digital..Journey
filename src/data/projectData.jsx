export const projectsData = [
  {
    id: 1,
    title: "Aircraft Component Failure Prediction",
    subtitle: "Applying ML to optimize aerospace maintenance.",
    // Main content block for the display card
    description: "Developed a predictive model to forecast the remaining useful life (RUL) of critical aircraft components, leveraging historical sensor data and flight logs. This solution directly addresses maintenance optimization, a key application of data science in the aeronautics sector.",
    
    // 👇 CONCEPTS: These act as the 'Vector Tags' for RAG/Semantic Search
    keywords: ["Classification", "Regression", "scikit-learn", "Python", "Aeronautics", "Predictive Modeling", "Feature Engineering"],
    
    // 👇 APACHE/SCHEMA CONCEPT: Illustrates data type awareness
    input_data_schema: [
      { field: "Flight_Hours", type: "INT", format: "Parquet/Avro" },
      { field: "Sensor_Temp", type: "FLOAT", format: "Parquet/Avro" },
      { field: "Failure_Status", type: "BOOLEAN", format: "CSV" },
    ],
    
    // Optional: Visual data
    image: '/assets/prediction_chart.jpg',
  },
  {
    id: 2,
    title: "Portfolio Knowledge Search (RAG Demo)",
    subtitle: "Retrieving context-aware answers from project data.",
    description: "Designed a conceptual Retrieval-Augmented Generation (RAG) system using client-side JavaScript. This demonstrates the ability to ingest unstructured portfolio data, index it, and retrieve contextually relevant information based on a user query.",
    
    keywords: ["RAG", "LangChain-Concept", "Vector Search", "Indexing", "NLP", "JavaScript"],
    
    input_data_schema: [
      { field: "Query", type: "STRING", format: "JSON" },
      { field: "Response", type: "STRING", format: "JSON" },
    ],
    image: '/assets/rag_diagram.jpg',
  },
  // Add more projects here (e.g., Data Visualization, Deployment projects, etc.)
];