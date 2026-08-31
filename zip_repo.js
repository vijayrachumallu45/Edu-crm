import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectDir = 'c:/Users/vjb12/OneDrive/Desktop/educrm';
const targetZip = 'c:/Users/vjb12/OneDrive/Desktop/EduFlow_CRM.zip';

// Write a temporary ps1 script to zip everything including hidden files (.git)
const psScript = `
$projectDir = "${projectDir}"
$zipPath = "${targetZip}"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

$items = Get-ChildItem -Path $projectDir -Force | Where-Object { $_.Name -ne "node_modules" -and $_.Name -ne "dist" -and $_.Name -ne "EduFlow_CRM.zip" -and $_.Name -ne "vitest.config.zip" }
Compress-Archive -Path $items.FullName -DestinationPath $zipPath -Force
Copy-Item $zipPath -Destination (Join-Path $projectDir "EduFlow_CRM.zip") -Force
Write-Host "Zip created successfully at $zipPath"
`;

const scriptPath = path.join(projectDir, 'pack.ps1');
fs.writeFileSync(scriptPath, psScript);

console.log('Running pack.ps1...');
const output = execSync('powershell -ExecutionPolicy Bypass -File pack.ps1', { cwd: projectDir, encoding: 'utf8' });
console.log(output);
