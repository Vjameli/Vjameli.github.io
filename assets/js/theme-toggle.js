/**
 * Dark Mode Theme Toggle
 * Handles theme switching with localStorage persistence and system preference detection
 */

(function() {
  'use strict';

  // Theme constants
  const THEME_KEY = 'theme-preference';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  /**
   * Get the user's theme preference
   * Priority: localStorage > system preference > default (light)
   */
  function getThemePreference() {
    // Check localStorage first
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) {
      return stored;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }

    // Default to light
    return THEME_LIGHT;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  /**
   * Save theme preference to localStorage
   */
  function saveThemePreference(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

    applyTheme(newTheme);
    saveThemePreference(newTheme);
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const theme = getThemePreference();
    applyTheme(theme);
  }

  /**
   * Setup theme toggle button click handler
   */
  function setupToggleButton() {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
    }
  }

  /**
   * Listen for system theme changes
   */
  function watchSystemTheme() {
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

      // Modern browsers
      if (darkModeQuery.addEventListener) {
        darkModeQuery.addEventListener('change', function(e) {
          // Only auto-switch if user hasn't set a preference
          if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
          }
        });
      }
      // Older browsers
      else if (darkModeQuery.addListener) {
        darkModeQuery.addListener(function(e) {
          if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
          }
        });
      }
    }
  }

  // Initialize theme immediately (before page renders)
  initTheme();

  // Setup toggle button and system watching when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setupToggleButton();
      watchSystemTheme();
    });
  } else {
    setupToggleButton();
    watchSystemTheme();
  }
})();
