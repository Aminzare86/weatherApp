<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />
<html>
<head>
	<title></title>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link href="../Content/App.css" rel="stylesheet" />
	<script src="../Scripts/jquery-3.1.1.min.js"></script>
	<script src="../Scripts/jQueryUI.js"></script>
	<script src="../Scripts/jquery.dataTables.min.js"></script>
	<script src="../Scripts/momentTimeZone.js"></script>
	<script src="../Scripts/moment.min.js"></script>
	<script src="../Scripts/moment-with-locales.min.js"></script>
	<script src="../Scripts/moment-with-locales.js"></script>

	<script src="../Scripts/skycons.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

	
</head>
<body>
	<div class="weatherWrapper">
					<div class="weatherTop">
						<div id="yourLocation"></div>
						<div id="toDay"></div>
						<div id="timeNow"></div>
						<div> <canvas id="weatherIcon" width="120" height="120"></canvas></div>
						<div id="summaryToday"></div>
						<div id="currentTemp"></div>
						<div id="windSpeed"></div>
						<div id="weatherHumiditi"></div>
						<a id="default_page_link" href="Default.aspx" target="_blank">Reminder</a>
						
					</div>
				</div>


	<script src="../Scripts/App.js"></script>
</body>
</html>
