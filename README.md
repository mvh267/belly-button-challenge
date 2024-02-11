# Belly Button Biodiversity Dashboard Project #
## Project Overview ##
In this project, titled "belly-button-challenge," I developed an interactive web dashboard to explore and visualize the Belly Button Biodiversity dataset. This dataset catalogs various microbes found in human navels.

## Key Accomplishments ##
### Interactive Dashboard Development ###
- Data Integration: Utilized the D3 library to read the samples.json file, containing extensive data on microbial species (OTUs) in human navels.
- Horizontal Bar Chart: Created an interactive bar chart to display the top 10 OTUs found in selected individuals. The chart features:
  - sample_values as bar lengths.
  - otu_ids as bar labels.
  - otu_labels as hovertext descriptions.
- Bubble Chart: Developed a bubble chart for each sample to dynamically represent microbial data.
  - X-axis: otu_ids.
  - Y-axis: sample_values.
  - Marker size and color dictated by sample_values and otu_ids, respectively.
  - Hovertext: otu_labels.
### Metadata Display and Dynamic Interactivity ###
- Sample Metadata: Implemented a section to display demographic information for each selected individual, using key-value pairs from the metadata JSON object.
- Responsive Updates: Ensured the dashboard updates all visualizations and metadata dynamically based on the user's sample selection.
## Technologies Used ##
- JavaScript (D3.js for data handling, plotting libraries for visualization)
- HTML and CSS for dashboard layout and styling.
## Deployment and Repository ## 
- Deployment: Launched the interactive dashboard on GitHub Pages, enabling public access and interaction.
- Version Control: Managed and documented the development process in a dedicated GitHub repository ('belly-button-challenge').