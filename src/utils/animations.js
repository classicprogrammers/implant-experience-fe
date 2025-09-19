/**
 * Animation utility functions for smooth transitions
 */

/**
 * Add a temporary animation class to an element
 * @param {HTMLElement} element - The element to animate
 * @param {string} animationClass - The CSS animation class to add
 * @param {number} duration - Duration in milliseconds (default: 600)
 */
export const animateElement = (element, animationClass, duration = 600) => {
  if (!element) return;
  
  // Remove any existing animation classes
  element.classList.remove('changing', 'pulse', 'bounce', 'shake', 'glow');
  
  // Add the new animation class
  element.classList.add(animationClass);
  
  // Remove the class after animation completes
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, duration);
};

/**
 * Animate a number change with counter effect
 * @param {HTMLElement} element - The element containing the number
 * @param {number} newValue - The new number value
 * @param {number} duration - Animation duration in milliseconds (default: 1000)
 */
export const animateNumberChange = (element, newValue, duration = 1000) => {
  if (!element) return;
  
  const startValue = parseInt(element.textContent) || 0;
  const increment = (newValue - startValue) / (duration / 16); // 60fps
  let currentValue = startValue;
  
  // Add changing animation
  animateElement(element, 'changing');
  
  const timer = setInterval(() => {
    currentValue += increment;
    
    if ((increment > 0 && currentValue >= newValue) || 
        (increment < 0 && currentValue <= newValue)) {
      currentValue = newValue;
      clearInterval(timer);
    }
    
    element.textContent = Math.round(currentValue);
  }, 16);
};

/**
 * Animate text content change
 * @param {HTMLElement} element - The element containing the text
 * @param {string} newText - The new text content
 * @param {string} animationType - Type of animation ('fade', 'slide', 'pulse')
 */
export const animateTextChange = (element, newText, animationType = 'fade') => {
  if (!element) return;
  
  const animationClass = animationType === 'fade' ? 'fade-in-fast' : 
                        animationType === 'slide' ? 'slide-in-up' : 'pulse';
  
  // Add animation class
  animateElement(element, animationClass);
  
  // Update text content
  element.textContent = newText;
};

/**
 * Animate a card or container update
 * @param {HTMLElement} element - The card/container element
 */
export const animateCardUpdate = (element) => {
  if (!element) return;
  animateElement(element, 'updating', 500);
};

/**
 * Animate form input change
 * @param {HTMLElement} input - The input element
 */
export const animateInputChange = (input) => {
  if (!input) return;
  animateElement(input, 'changing', 400);
};

/**
 * Animate page title change
 * @param {HTMLElement} title - The title element
 */
export const animateTitleChange = (title) => {
  if (!title) return;
  animateElement(title, 'changing', 600);
};

/**
 * Add staggered animation to a list of elements
 * @param {HTMLElement[]} elements - Array of elements to animate
 * @param {string} animationClass - The animation class to apply
 * @param {number} staggerDelay - Delay between each element in milliseconds
 */
export const animateStaggered = (elements, animationClass, staggerDelay = 100) => {
  elements.forEach((element, index) => {
    if (!element) return;
    
    setTimeout(() => {
      animateElement(element, animationClass);
    }, index * staggerDelay);
  });
};

/**
 * Animate success state
 * @param {HTMLElement} element - The element to animate
 */
export const animateSuccess = (element) => {
  if (!element) return;
  animateElement(element, 'bounce', 600);
};

/**
 * Animate error state
 * @param {HTMLElement} element - The element to animate
 */
export const animateError = (element) => {
  if (!element) return;
  animateElement(element, 'shake', 500);
};

/**
 * Animate loading state
 * @param {HTMLElement} element - The element to animate
 */
export const animateLoading = (element) => {
  if (!element) return;
  animateElement(element, 'pulse', 1000);
};

/**
 * Animate focus state
 * @param {HTMLElement} element - The element to animate
 */
export const animateFocus = (element) => {
  if (!element) return;
  animateElement(element, 'glow', 2000);
};

// Example usage in React components:
/*
import { animateNumberChange, animateTextChange, animateCardUpdate } from '../utils/animations';

// In your component:
const handleNumberUpdate = (newValue) => {
  const element = document.querySelector('.stat-number');
  animateNumberChange(element, newValue);
};

const handleTextUpdate = (newText) => {
  const element = document.querySelector('.page-title');
  animateTextChange(element, newText, 'slide');
};

const handleCardUpdate = () => {
  const element = document.querySelector('.stat-card');
  animateCardUpdate(element);
};
*/
