const transformData = (fetchedData) => {
  const dataSetCount = 15;
  let count = 0;
  const transformedData = {
    labels: [],
    datasets: [
      {
        label: "Population of 10 countries in 2018",
        data: [],
        backgroundColor: [],
        borderWidth: 1,
      },
    ],
  };
  console.log("######## Transforming data ###########");

  for (let item of fetchedData) {
    transformedData.labels.push(item.country);
    transformedData.datasets[0].data.push(item.populationCounts.value);
    count++;
  }
  console.log("######## Data Transformed ###########");

  return transformedData;
};

module.exports = transformData;
