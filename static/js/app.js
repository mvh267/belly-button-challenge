function init() {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
        var names = data.names;
        names.forEach(name => {
            d3.select("#selDataset").append("option").text(name);
        });
        updatePlots(names[0]);
        updateMetadata(names[0]);
    });
}

function updatePlots(sample) {
    // Code for updating plots goes here
}

function updateMetadata(sample) {
    // Code for updating metadata goes here
}

init();

function updatePlots(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sample);
        var result = resultArray[0];

        var barData = [{
            x: result.sample_values.slice(0, 10).reverse(),
            y: result.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            text: result.otu_labels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h'
        }];

        Plotly.newPlot('bar', barData);

        var bubbleData = [{
            x: result.otu_ids,
            y: result.sample_values,
            text: result.otu_labels,
            mode: 'markers',
            marker: {
                size: result.sample_values,
                color: result.otu_ids,
                colorscale: "Earth"
            }
        }];

        Plotly.newPlot('bubble', bubbleData);
    });
}

function updateMetadata(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
        var metadata = data.metadata;
        var result = metadata.filter(meta => meta.id.toString() === sample)[0];
        var panel = d3.select("#sample-metadata");
        panel.html(""); // Clear any existing metadata
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

d3.selectAll("#selDataset").on("change", handleChange);

function handleChange() {
    var newSample = d3.select(this).property("value");
    updatePlots(newSample);
    updateMetadata(newSample);
}
