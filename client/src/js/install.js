const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events
  window.deferredPrompt = event;
  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (promptEvent) {
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable as it can only be used once.
    window.deferredPrompt = null;
    //  Add the hidden class to the button
    butInstall.classList.toggle('hidden', true);
  } else {
    return;
  }
});

//  Reset the install prompt capability for future use
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
