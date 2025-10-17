document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded successfully');
    
    const appContent = document.getElementById('app-content');
    if (appContent) {
        appContent.innerHTML = '<p>App is ready!</p>';
    }
});