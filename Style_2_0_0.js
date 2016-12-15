body {
	background-color: #818180;						
}
p {    
	text-align: center;
	margin-top: 0;
	margin-bottom: 8px;
	margin-left: 0;
	margin-right: 0;
}
h2{
	text-align: center;
}
input{
	padding: 12px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	border: 2px solid black;
	border-radius: 4px;
}
#generalwrapper{
	position: relative;
	top: 4%;
	background-image :url('https://cdn.rawgit.com/yfoto/Battery-Monitor/master/header.png');
	background-repeat: no-repeat;
	background-position: center top;
	border-radius: 25px;
	margin: auto;
	min-width: 300px;
	width: 92vw;
	min-height: 300px;
	height: 92vh;
	background-color: white;	
	box-shadow: 0 0px 20px 15px rgba(0, 0, 0, 0.2);	
}
#content{
	position: absolute;
	top: 25%;
	left: 15%;
	border-radius: 25px;
	margin:auto;
	width: 70%;
	height: 70%;
	background-color: white;	
}
#Graph_Wrapper {
	position: relative;
	top: 4%;
	font-family:Arial,Helvetica,sans-serif;
	font-size: 12px;
	border-radius: 25px;
	margin: auto;
	min-width: 300px;
	width: 92vw;
	min-height: 300px;
	height: 92vh;
	background-color: white;	
	box-shadow: 0 0px 20px 15px rgba(0, 0, 0, 0.2);	
}

#Graph_Container {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 25px;
	margin:auto;
	width: 98%;
	height: 98%;
	background-color: white;			
}

#PDF_Button{
    position: absolute;
	width: 25px;
    bottom: 1.15%;
    left: 109px;
	background: #ddd;
	opacity: 1;
}

#Print_Button{
    position: absolute;
	width: 25px;
    bottom: 1.15%;
    left: 151px;
	background: #ddd;
	opacity: 1;
}

#Home_Button{
    position: absolute;
	width: 33px;
    bottom: 1.15%;
    right: 15px;
	background: #ddd;
	opacity: 1;
}

#Reset_Button{
    position: absolute;
	width: 32px;
    bottom: 1.15%;
    left: 194px;
	background: #ddd;
	opacity: 1;
}

#wrapper{
	width: 700px;
	margin: 50px auto;
}

a:link, a:visited{
	color: #004892;
	font-weight: bold;
	text-decoration: none;
}

a:visited{
	color: #1763b5;
}

a:focus, a:hover, a:active{
	color: #3c85d4;
	background-color: #b6d9ff;
}

#footer{
	margin: 30px 0;
	text-align:center;
}

iframe {
	border:2px solid #B6D9FF;
}

.flotr-datagrid-container {
  border-bottom: none;
  background: #fff;
}
.flotr-datagrid {
  position:absolute;
  width:100%;
  height:96.2%;
  border-collapse: collapse;
  border-spacing: 0;
}
.flotr-datagrid td, .flotr-datagrid th {
  border: 1px solid #ccc;
  padding: 1px 3px;
  min-width: 2em;
}
.flotr-datagrid tr:hover, .flotr-datagrid col.hover {
  background: #f3f3f3;
}
.flotr-datagrid tr:hover th, .flotr-datagrid th.hover {
  background: #999;
  color: #fff;
}
.flotr-datagrid th {
  text-align: center;
  background: #e3e3e3;
  border: 2px outset #fff;
}
.flotr-datagrid td {
  text-align: center;
}
.flotr-datagrid-toolbar {
  padding: 1px;
  border-bottom: 1px solid #ccc;
  background: #f9f9f9;
}
.flotr-datagrid td:hover {
  background: #ccc;
}
.flotr-datagrid .first-row th {
  text-align: center;
}
.flotr-canvas {
  margin-bottom: -3px;
  padding-bottom: 1px;
}
.flotr-tabs-group  {
	border-top: 1px solid #999;
}
.flotr-tab  {
  border: 1px solid #666;
  border-top: none;
  margin: 0 3px;
  padding: 1px 4px;
  cursor: pointer;
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-bottom-left-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  border-radius: 0 0 4px 4px;
  opacity: 0.5;
  -moz-opacity: 0.5;
}
.flotr-tab.selected {
  background: #ddd;
  opacity: 1;
  -moz-opacity: 1;
}
.flotr-tab:hover {
  background: #ccc;
}
.flotr-tab:active{ 
  background: #ddd;
  opacity: 1;
  -moz-opacity: 1;
}