// 视频模态框功能
function openVideoModal(videoSrc, title) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  const titleEl = document.getElementById('modalTitle');
  
  video.src = videoSrc;
  titleEl.textContent = title;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  
  video.pause();
  video.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ESC 键关闭
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeVideoModal();
});
