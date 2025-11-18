chrome.runtime.onInstalled.addListener(() => {
  console.log('Bubble Quick Actions 확장 프로그램이 설치되었습니다.');
});

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  await chrome.tabs.sendMessage(tab.id, { type: 'ACTION_CLICKED' });
});
