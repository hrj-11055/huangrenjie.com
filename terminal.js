(function() {
    const terminalOutput = [
        "[SYSTEM] Initializing node v22.1.0...",
        "[SYSTEM] Loading neural modules...",
        "[SYSTEM] Connected to GPU cluster...",
        "[SYSTEM] Memory: 32GB/64GB available",
        "[SYSTEM] Security protocol: ACTIVE",
        "[SYSTEM] Ready for task processing."
    ];

    const terminalElement = document.getElementById('terminal-output');
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId = null;

    function typeWriter() {
        if (!terminalElement) return;

        if (lineIndex < terminalOutput.length) {
            const line = terminalOutput[lineIndex];
            if (charIndex < line.length) {
                terminalElement.innerHTML += line.charAt(charIndex);
                charIndex++;
                timeoutId = setTimeout(typeWriter, 30);
            } else {
                terminalElement.innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
                timeoutId = setTimeout(typeWriter, 500);
            }
        } else {
            // Loop
            lineIndex = 0;
            charIndex = 0;
            terminalElement.innerHTML = "";
            timeoutId = setTimeout(typeWriter, 500);
        }
    }

    document.addEventListener('DOMContentLoaded', typeWriter);

    // Cleanup function if needed
    window.addEventListener('unload', () => {
        if (timeoutId) clearTimeout(timeoutId);
    });
})();
