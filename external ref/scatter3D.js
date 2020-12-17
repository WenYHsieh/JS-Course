let specialist = document.getElementById('specialist');
let promiscuous = document.getElementById('promiscuous');
Plotly.d3.csv('./external ref/test_3d_FL.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
    { return row[key]; });}

let CuSpecialist = {
	x:unpack(rows, 'folChange_Cu_c'), y: unpack(rows, 'folChange_Au_c'), z: unpack(rows, 'folChange_Ag_c'),
	mode: 'markers',
	marker: {
		color: 'blue',
		size: 3,
		symbol: 'circle',

		opacity: 0.8},
    type: 'scatter3d'};

let AuSpecialist = {
	x:unpack(rows, 'folChange_Cu_u'), y: unpack(rows, 'folChange_Au_u'), z: unpack(rows, 'folChange_Ag_u'),
	mode: 'markers',
	marker: {
		color: '#fcb900',
		size: 3,
        symbol: 'circle',

		opacity: 0.3},
    type: 'scatter3d'};

let AgSpecialist = {
    x:unpack(rows, 'folChange_Cu_g'), y: unpack(rows, 'folChange_Au_g'), z: unpack(rows, 'folChange_Ag_g'),
    mode: 'markers',
    marker: {
        color: 'red',
        size: 3,
        symbol: 'circle',

        opacity: 0.5},
    type: 'scatter3d'};

let Promiscuous = {
    x:unpack(rows, 'folChange_Cu_p'), y: unpack(rows, 'folChange_Au_p'), z: unpack(rows, 'folChange_Ag_p'),
    mode: 'markers',
    marker: {
        color: 'gray',
        size: 3,
        line: {
            color: 'black',
            width: 0.001},
        symbol: 'circle',
        opacity: 0.3},
    type: 'scatter3d'};


let data = [CuSpecialist, AuSpecialist, AgSpecialist];

let data2 = [Promiscuous];



let layout = {
    title: 'simple example', 
    scene:{
    aspectmode: "manual",
    aspectratio: {
    x: 1, y: 1, z: 1},
    title: 'Scroll and Zoom',
    xaxis:{title:{text:'Cu',font:{size:20}} ,linewidth:5,gridwidth:3,tickfont:{size:15},range: [-0.5, 2.5],ticks:'outside'},
    yaxis:{title:{text:'Au',font:{size:20}},linewidth:5,gridwidth:3,tickfont:{size:15},range: [-0.5, 2.5],ticks:'outside'},
    zaxis:{title:{text:'Ag',font:{size:20}},linewidth:5,gridwidth:3,tickfont:{size:15},range: [-0.5, 2.5],ticks:'outside'}}
};
Plotly.newPlot('specialist', data, layout);
Plotly.newPlot('promiscuous', data2, layout);
});