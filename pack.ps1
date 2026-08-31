
$projectDir = "c:/Users/vjb12/OneDrive/Desktop/educrm"
$zipPath = "c:/Users/vjb12/OneDrive/Desktop/EduFlow_CRM.zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

$items = Get-ChildItem -Path $projectDir -Force | Where-Object { $_.Name -ne "node_modules" -and $_.Name -ne "dist" -and $_.Name -ne "EduFlow_CRM.zip" -and $_.Name -ne "vitest.config.zip" }
Compress-Archive -Path $items.FullName -DestinationPath $zipPath -Force
Copy-Item $zipPath -Destination (Join-Path $projectDir "EduFlow_CRM.zip") -Force
Write-Host "Zip created successfully at $zipPath"
