﻿<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
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
    <div class="weatherWrapper timerweather">
        <div class="hour-box">
            <div>
                <canvas id="oh" width="30" height="30"></canvas>
            </div>
            <div id="oht"></div>
        </div>

        <div class="hour-box">
            <div>
                <canvas id="th" width="30" height="30"></canvas>
            </div>
            <div id="tht"></div>
        </div>

        <div class="hour-box">

            <div>
                <div class="hour-box">

                    <canvas id="trh" width="30" height="30"></canvas>
                </div>
            </div>

            <div id="trht"></div>
        </div>
        <div class="hour-box">
            <div>
                <canvas id="fh" width="30" height="30"></canvas>
            </div>
            <div id="fht"></div>
        </div>
    </div>
    <script src="../Scripts/App.js"></script>
      <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHDokDpqX1-oVCxmdWMSMT0lCWXbMAMNU&callback=initMap">
    </script>
</body>
</html>
