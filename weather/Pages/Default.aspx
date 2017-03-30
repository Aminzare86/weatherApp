<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
		<script type="text/javascript" src="../Scripts/jquery-3.1.1.min.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />
    <!-- Add your CSS styles to the following file -->
	<link href="../Content/bootstrap.min.css" rel="stylesheet" />
	<link href="../Content/App.css" rel="stylesheet" />
    <!-- Add your JavaScript to the following file -->
	<script src="../Scripts/jquery-3.1.1.min.js"></script>
	<script src="../Scripts/jQueryUI.js"></script>
	<script src="../Scripts/jquery.dataTables.min.js"></script>
	<script src="../Scripts/moment.min.js"></script>
	<script src="../Scripts/moment-with-locales.min.js"></script>
	<script src="../Scripts/moment-with-locales.js"></script>
	<script src="../Scripts/bootstrap.min.js"></script>
	<script src="../Scripts/skycons.js"></script>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
<script type="text/javascript">
	var hostweburl;
	var appweburl;
	$(document).ready(function () {
		//Get the URI decoded URLs.
		hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
		appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
		// resources are in URLs in the form: web_url/_layouts/15/resource
		var scriptbase = hostweburl + "/_layouts/15/";
		// Load the js files and continue to the successHandler
		$.getScript(scriptbase + "SP.RequestExecutor.js", execCrossDomainRequest);
		//link to costum list for all users
		$("#linktolist").attr("href", hostweburl + "/weather/Lists/Quotes/AllItems.aspx");
	});
	// Function to prepare and issue the request to get SharePoint data
	function execCrossDomainRequest() {
		// executor: The RequestExecutor object Initialize the RequestExecutor with the app web URL.
		var executor = new SP.RequestExecutor(appweburl);
		// Deals with the issue the call against the app web.
		executor.executeAsync({
			url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('AppEvents')/items?@target='" + hostweburl + "'&$top=5",
			method: "GET",
			headers: { "Accept": "application/json; odata=verbose" },
			success: successHandler,
			error: errorHandler
		}
		);
	}

	// Function to handle the success event. Prints the data to the page.
	function successHandler(data) {
		var jsonObject = JSON.parse(data.body);
		var items = [];
		var results = jsonObject.d.results;
		items.push("<ul id='" + "kulist" + "'>");

		$(results).each(function () {
			var formattedEventDate = moment(this.EventDate).format("MMM DD");
			items.push('<li id="' + 'klist' + '">' +
				// this.Title +
				"<div id='" + "kdate" + "' href=\"" + hostweburl + "/blog/Lists/Posts/Post.aspx?ID=" + this.ID + "\" target=\"_blank\">" + formattedEventDate + "</div>" +
				"<div id='" + "kDes" + "' href=\"" + hostweburl + "/blog/Lists/Posts/Post.aspx?ID=" + this.ID + "\" target=\"_blank\">" + this.Description + "</div>" +

				'</li>');			
		});
		items.push("</ul");
		$("#listResult").html(items.join(''))
	}
	// Function to handle the error event. Prints the error message to the page.
	function errorHandler(data, errorCode, errorMessage) {
		document.getElementById("internal").innerText = "Could not complete cross-domain call: " + errorMessage;
	}
	// Function to retrieve a query string value.
	function getQueryStringParameter(paramToRetrieve) {
		var params =
			document.URL.split("?")[1].split("&");
		var strParams = "";
		for (var i = 0; i < params.length; i = i + 1) {
			var singleParam = params[i].split("=");
			if (singleParam[0] == paramToRetrieve)
				return singleParam[1];
		}
	}
    </script>
	<div class="container ">
  <div class="row ">
    <div class="col-sm-2">
		<h4 id="toMar"></h4>
      <h3> <canvas id="dicon0" width="60" height="60"></canvas></h3>
		<p id="dmTempo0"></p>
      <p id="dminTempo0"></p>
      <p id="dsumaRy0"></p>
    </div>
    <div class="col-sm-2">
		<h4 id="otoMar"></h4>
      <h3> <canvas id="dicon1" width="60" height="60"></canvas></h3>
		<p id="dmTempo1"></p>
      <p id="dminTempo1"></p>
      <p id="dsumaRy1"></p>
    </div>
    <div class="col-sm-2 ">
		<h4 id="totoMar"></h4>
      <h3> <canvas id="dicon2" width="60" height="60"></canvas></h3>
		<p id="dmTempo2"></p>
      <p id="dminTempo2"></p>
      <p id="dsumaRy2"></p>
    </div>
	   <div class="col-sm-2 ">
		   <h4 id="tretoMar"></h4>
	  <h3> <canvas id="dicon3" width="60" height="60"></canvas></h3>
		<p id="dmTempo3"></p>
      <p id="dminTempo3"></p>
      <p id="dsumaRy3"></p>
    </div>
  </div>
</div>
	      
	  <div><strong>Latest blog posts</strong></div>
      <div id="listResult"></div>
	  <a id="linktolist" href="#">Link to list</a>


	<%-- link to custom list with  my privet link and you have for every users in start of code
	<a  href="https://ecusolna-8d428fa9a2d287.sharepoint.com/sites/amzaspo16-dev/weather/Lists/Quotes/AllItems.aspx" target=" _blank" >Gå till lista</a>--%>

		<script src="../Scripts/App.js"></script>
	
</asp:Content>
