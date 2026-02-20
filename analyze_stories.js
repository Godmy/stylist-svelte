#!/usr/bin/env node

// Скрипт для анализа story-файлов в библиотеке stylist-svelte
// Определяет компоненты, которые требуют доработки в части документации и примеров использования

import fs from 'fs';
import path from 'path';

// Папка с компонентами
const componentsDir = 'D:/2026/code/template/stylist-svelte/src/lib/components';

// Результаты анализа
const results = [];

// Рекурсивный поиск всех .story.svelte файлов
function findStoryFiles(dir) {
  let results = [];
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(findStoryFiles(fullPath));
    } else if (item.endsWith('.story.svelte')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Анализ содержимого story-файла
function analyzeStoryFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Проверяем наличие различных элементов
  const hasInteractiveControls = 
    content.includes('bind:value') || 
    content.includes('bind:checked') || 
    content.includes('select') || 
    content.includes('input');
  
  const hasMultipleVariants = 
    content.includes('All Variants') || 
    content.includes('All Sizes') || 
    content.includes('Variations') ||
    content.match(/variant/gi)?.length > 1;
  
  const hasComprehensiveDocumentation = 
    content.includes('controls = [') || 
    content.includes('ControlConfig');
  
  // Определяем имя компонента из пути
  const componentName = filePath.split('/').slice(-3, -1).join('/');
  
  // Определяем, требует ли файл доработки
  const needsImprovement = !hasInteractiveControls || !hasMultipleVariants;
  
  return {
    filePath,
    componentName,
    hasInteractiveControls,
    hasMultipleVariants,
    hasComprehensiveDocumentation,
    needsImprovement
  };
}

// Находим все story-файлы
console.log('Поиск story-файлов...');
const storyFiles = findStoryFiles(componentsDir);
console.log(`Найдено ${storyFiles.length} story-файлов`);

// Анализируем каждый файл
console.log('Анализ story-файлов...');
for (const file of storyFiles) {
  const analysis = analyzeStoryFile(file);
  results.push(analysis);
}

// Фильтруем файлы, требующие доработки
const filesNeedingImprovement = results.filter(r => r.needsImprovement);

// Создаем отчет
let report = 'Отчет об анализе story-файлов в библиотеке stylist-svelte\n';
report += '=========================================================\n\n';
report += 'Цель: Определить компоненты, которые требуют доработки в части документации и примеров использования.\n\n';
report += 'Критерии оценки:\n';
report += '1. Отсутствие интерактивных элементов управления\n';
report += '2. Отсутствие демонстрации всех вариантов компонента\n';
report += '3. Отсутствие демонстрации всех размеров компонента\n';
report += '4. Неполная документация пропсов\n';
report += '5. Отсутствие примеров использования\n\n';

report += `Всего проанализировано файлов: ${results.length}\n`;
report += `Файлов, требующих доработки: ${filesNeedingImprovement.length}\n\n`;

report += 'Файлы, требующие доработки:\n';
report += '----------------------------\n';

for (const file of filesNeedingImprovement) {
  report += `- ${file.filePath}\n`;
  report += `  Компонент: ${file.componentName}\n`;
  report += `  Причины: `;
  if (!file.hasInteractiveControls) report += 'отсутствуют интерактивные элементы, ';
  if (!file.hasMultipleVariants) report += 'отсутствуют варианты/размеры, ';
  report = report.slice(0, -2); // Удаляем последнюю запятую
  report += '\n\n';
}

// Сохраняем отчет
const reportPath = 'D:/2026/code/template/stylist-svelte/story_analysis_report.txt';
fs.writeFileSync(reportPath, report);
console.log(`Отчет сохранен в ${reportPath}`);

// Также создаем сводку по категориям
const categories = {};
for (const file of filesNeedingImprovement) {
  const category = file.filePath.split('/')[7]; // atom/molecule/organism
  if (!categories[category]) {
    categories[category] = [];
  }
  categories[category].push(file);
}

console.log('\nСводка по категориям:');
for (const [category, files] of Object.entries(categories)) {
  console.log(`${category}: ${files.length} файлов`);
}