const colors = {
  black: '#1D1D1D', red: '#FF2D00', green: '#00FF7F', yellow: '#FFFF00',
  blue: '#00BFFF', magenta: '#FF1F78', cyan: '#00FFFF', white: '#FFFFFF',
  lightBlack: '#4D4D4D', lightRed: '#FF4F4F', lightGreen: '#7FFF00',
  lightYellow: '#FFFF55', lightBlue: '#5C6BC0', lightMagenta: '#FF5F8C',
  lightCyan: '#5CFBFF', lightWhite: '#F2F2F2', limeGreen: '#32CD32',
  lightCoral: '#FF7F50'
};

module.exports = {
  decorateConfig: config => ({
    ...config,
    fontSize: 11,
    fontFamily: 'Consolas, "Courier New", "Lucida Console", monospace',
    cursorColor: '#FFD300',
    cursorShape: 'BLOCK',
    cursorBlink: false,
    foregroundColor: '#FF1DCE',
    backgroundColor: '#3A0A65',
    selectionColor: 'rgba(0, 255, 255, 0.3)',
    borderColor: '#FDB232',
    colors,
    css: `
      ${config.css || ''}
      .header_windowHeaderWithBorder { border: none !important; }
      .header_header {
        color: #FFF;
        text-shadow: 0 0 5px rgba(255,255,0,0.8), 0 0 10px rgba(255,255,0,0.6),
                     0 0 15px rgba(255,215,0,0.8), 0 0 20px rgba(255,215,0,0.6);
      }
      .tab_tab { border: none !important; }
    `
  }),
  onWindow: (function() {
    const windows = new Set();
    const setOpacity = win => !win.isDestroyed() && win.setOpacity(0.9);
    
    return win => {
      windows.add(win);
      setOpacity(win);
    };
  })()
};
