const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//toggle button visibility
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

//reset prompt when clicked
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

//clear prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
