const button = document.getElementById('ping');
const result = document.getElementById('result');

const updateStatus = (text, isError = false) => {
  result.textContent = text;
  result.style.color = isError ? '#dc2626' : '#16a34a';
};

button.addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) {
      updateStatus('활성 탭을 찾을 수 없어요.', true);
      return;
    }
    await chrome.tabs.sendMessage(tab.id, { type: 'ACTION_CLICKED' });
    updateStatus('메시지를 전송했어요.');
  } catch (error) {
    console.error(error);
    updateStatus('메시지 전송에 실패했어요.', true);
  }
});
