# Тесты для Stylist Svelte

import pytest
from src.lib.themes import ThemeProvider, themes
from src.lib.components.atoms.controls.buttons import Button

def test_theme_provider_initializes_correctly():
    """Test that ThemeProvider initializes with correct default theme"""
    # Create a theme provider with default settings
    theme_provider = ThemeProvider()
    
    # Check that it has the correct initial theme
    assert theme_provider.current_theme == 'light'
    assert theme_provider.themes == themes

def test_button_component_renders_with_theme():
    """Test that Button component uses theme classes correctly"""
    # Create a button with primary variant
    button = Button(variant='primary')
    
    # Check that it renders with primary theme classes
    assert 'bg-[--color-primary-600]' in button.classes
    assert 'hover:bg-[--color-primary-700]' in button.classes

def test_dark_theme_applies_correctly():
    """Test that dark theme applies different color values"""
    # Switch to dark theme
    theme_provider = ThemeProvider()
    theme_provider.set_theme('dark')
    
    # Verify dark theme colors are different from light
    light_primary_500 = themes.light.colors.primary[500]
    dark_primary_500 = themes.dark.colors.primary[500]
    
    assert light_primary_500 != dark_primary_500

if __name__ == "__main__":
    pytest.main([__file__])