import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const zipPath = 'c:/Users/vjb12/OneDrive/Desktop/EduFlow_CRM.zip';

// Use powershell to list zip entries cleanly
const psCheck = `
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("${zipPath}")
$gitEntries = $zip.Entries | Where-Object { $_.FullName -like ".git*" }
Write-Host "Total entries in zip: $($zip.Entries.Count)"
Write-Host "Total .git entries in zip: $($gitEntries.Count)"
$zip.Dispose()
`;

fs.writeFileSync('check_zip.ps1', psCheck);
const res = execSync('powershell -ExecutionPolicy Bypass -File check_zip.ps1', { encoding: 'utf8' });
console.log(res);
