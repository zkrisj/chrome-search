// 监听 background 传来的 数据 可对页面dom操作
chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
	if (data.menuItemId) {
		switch (data.menuItemId) {
			case 'bing':
				url = 'https://cn.bing.com/search?q=';
				break;
			case '360':
				url = 'https://www.so.com/s?q=';
				break;
			case 'sogou':
				url = 'https://sogou.com/web?query=';
				break;
			case 'google':
				url = 'https://www.google.com/search?q=';
				break;
			default:
				url = 'https://www.baidu.com/s?wd=';
		}
		window.open(data.selectionText ? url + data.selectionText : new URL(url).origin);
	}
});
