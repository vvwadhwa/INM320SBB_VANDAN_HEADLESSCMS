document.addEventListener("DOMContentLoaded", function () {
    const overviewCardsWrapper = document.getElementById('overviewData');
    const graphDataWrapper = document.getElementById('graphInfo');
    const statusInfoWrapper = document.getElementById('bottomGraphData');

    async function fetchJSON() {
        try {
            const response = await fetch('../../data/objects.json');
            const webData = await response.json();

            webData.overview.forEach((item) => {
                overviewCardsWrapper.innerHTML += `
            <div class="col">
            <h6>${item.text}</h6>
            <p>${item.number}</p>
            </div>`
            });

            webData.graphdata.forEach((item) => {
                graphInfo.innerHTML += `
                    <div class="col2"> 
                        <h6>${item.text}</h6>
                        <p>${item.number}</p>
                    </div>`
            });

            const bottomgraphInfo = webData.botomgraph1;
            bottomGraphData.innerHTML += `
                     <div class="header1">
                        <h6>${bottomgraphInfo.heading}</h6>
                        <p>${bottomgraphInfo.bluetext}</p>
                    </div>
                    `
            bottomGraphData.innerHTML += `<p>Group: <span>${bottomgraphInfo.subheading}</span></p>`
            const tableWrapper = document.createElement('div');
            tableWrapper.classList.add('row', 'row-cols-2')

            bottomgraphInfo.data.forEach((item) => {
                tableWrapper.innerHTML += `<div class="col">${item.text}</div>
                    <div class="col">${item.number}</div>`
            })
            bottomGraphData.appendChild(tableWrapper);
        }
        catch (err) {
            console.log('Error:', err);
        }
    }

    fetchJSON();
})