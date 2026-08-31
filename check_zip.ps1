
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("c:/Users/vjb12/OneDrive/Desktop/EduFlow_CRM.zip")
$gitEntries = $zip.Entries | Where-Object { $_.FullName -like ".git*" }
Write-Host "Total entries in zip: $($zip.Entries.Count)"
Write-Host "Total .git entries in zip: $($gitEntries.Count)"
$zip.Dispose()
