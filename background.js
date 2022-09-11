chrome.contextMenus.removeAll(() => {
	chrome.contextMenus.create({
		title: '搜索',
		id: 'search',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '百度',
		parentId: 'search',
		id: 'baidu',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '必应',
		parentId: 'search',
		id: 'bing',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '360',
		parentId: 'search',
		id: '360',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '搜狗',
		parentId: 'search',
		id: 'sogou',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '维基百科',
		parentId: 'search',
		id: 'wiki',
		contexts: ['all'],
	});
	chrome.contextMenus.create({
		title: '谷歌',
		parentId: 'search',
		id: 'google',
		contexts: ['all'],
	});
});
// 点击弹出菜单
chrome.contextMenus.onClicked.addListener(function(item, tab) {
	chrome.tabs.sendMessage(tab.id, item, () => chrome.runtime.lastError);
});
