// chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		title: '搜索',
		id: 'search',
		type: 'normal',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '百度',
		parentId: 'search',
		id: 'baidu',
		type: 'normal',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '必应',
		parentId: 'search',
		id: 'bing',
		type: 'normal',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '360',
		parentId: 'search',
		id: '360',
		type: 'normal',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '搜狗',
		parentId: 'search',
		id: 'sogou',
		type: 'normal',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '维基百科',
		parentId: 'search',
		id: 'wiki',
		type: 'normal',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '谷歌',
		parentId: 'search',
		id: 'google',
		type: 'normal',
		contexts: ['all'],
	});
// });
// 点击弹出菜单
chrome.contextMenus.onClicked.addListener(function(item, tab) {
	console.log(1);
	chrome.tabs.sendMessage(tab.id, item, function() {
		console.log(arguments, chrome.runtime.lastError);
	});
});
