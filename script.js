function toggleTheme() {
            if (document.body.style.getPropertyValue('--bg-color') === 'black') {
                document.body.style.setProperty('--bg-color', '#f4f4f4');
                document.body.style.setProperty('--text-color', '#333');
                document.body.style.setProperty('--container-bg', 'white');
            } else {
                document.body.style.setProperty('--bg-color', 'black');
                document.body.style.setProperty('--text-color', 'white');
                document.body.style.setProperty('--container-bg', '#222');
            }
        }
