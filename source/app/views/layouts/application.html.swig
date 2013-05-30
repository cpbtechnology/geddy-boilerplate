<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js"><!--<![endif]-->
	<head>
		<meta charset="utf-8" />
		<meta name="description" content="" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<meta property="og:site_name" content="" />
		<meta property="og:title" content="" />
		<meta property="og:description" content="" />
		<meta property="og:url" content="" />
		<meta property="og:image" content="" />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="en_US" />

		<title></title>

		<link rel="shortcut icon" href="images/favicon.png" />

		<!-- BEGIN:PROD
		<link rel="stylesheet" href="stylesheets/generated/app.min.css" />
		END:PROD -->

		<!-- BEGIN:DEV -->
		<link rel="stylesheet" href="stylesheets/generated/app.css" />
		<!-- END:DEV -->

		<!--[if IE 8]><script src="javascripts/lib/modernizr-2.6.2.min.js"></script><![endif]-->
	</head>
	<body>

		<!-- BEGIN: section-main -->
		<div id="main">
			<noscript>
				<p>Javascript is currently disabled. Please <a href="http://www.google.com/support/bin/answer.py?answer=23852" target="_blank">enable javascript</a> for the optimal experience!</p>
			</noscript>

			<header></header>

			<div id="content">
				{{ yield() }}
			</div>

			<footer></footer>
		</div>
		<!-- END: section-main -->

		<!-- BEGIN:PROD
		<script src="javascripts/lib/require.js" data-main="javascripts/generated/app.min"></script>
		<script>
			requirejs.config({
				//'urlArgs': '[?php echo CACHE_BUST; ?]'
			});
			define('settings', {
				'gaAccountId': 'GA_ACCOUNT_ID_HERE',
				'fbAccountId': 'FB_ACCOUNT_ID_HERE'
			});
		</script>
		END:PROD -->

		<!-- BEGIN:DEV -->
		<script src="javascripts/lib/require.js" data-main="javascripts/app/main"></script>
		<script>
			define('settings', {
				'gaAccountId': 'GA_ACCOUNT_ID_HERE',
				'fbAccountId': 'FB_ACCOUNT_ID_HERE'
			});
		</script>
		<!-- END:DEV -->

	</body>
</html>
