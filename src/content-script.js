const bubbleId = 'bubble-quick-actions-indicator';

const createIndicator = () => {
  if (document.getElementById(bubbleId)) return;
  const bubble = document.createElement('div');
  bubble.id = bubbleId;
  bubble.textContent = 'Bubble Ready';
  Object.assign(bubble.style, {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    padding: '8px 12px',
    background: '#111827',
    color: '#f9fafb',
    borderRadius: '999px',
    fontSize: '12px',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.35)',
    zIndex: 2147483647,
  });
  document.body.appendChild(bubble);
};

createIndicator();

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'ACTION_CLICKED') {
    alert('Bubble 확장 프로그램이 작동 중입니다!');
  }
});
