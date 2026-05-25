const dataManagerInstance = {
    version: "1.0.183",
    registry: [21, 1161, 3, 1990, 1666, 5, 1139, 1343],
    init: function() {
        const nodes = this.registry.filter(x => x > 453);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataManagerInstance.init();
});