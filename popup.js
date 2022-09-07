document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#getAppInfo").onclick = function() {
		const app = chrome.runtime.getManifest();
		console.log(app);
		chrome.notifications.create({
			type: 'basic',
			iconUrl: 'img/icon.png',
			title: '获取 manifest.json 内容',
			message: JSON.stringify(app)
		}, function(notificationId) {
			setTimeout(function() {
				chrome.notifications.clear(notificationId);
			}, 5000);
		});
	};
});
