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
	title: '谷歌',
	parentId: 'search',
	id: 'google',
	contexts: ['all'],
});
const sendData = (data) => {
	chrome.tabs.query({active: true,currentWindow: true}).then(tabs=>{
		chrome.tabs.sendMessage(tabs[0].id, data)
	});
};
// 点击弹出菜单
chrome.contextMenus.onClicked.addListener(function(item, tab) {
	if(!tab.url.startsWith('chrome://')) sendData(item);
});
// 点击扩展图标
chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
	sendData(data);
});
