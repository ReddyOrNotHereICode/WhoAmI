# pre-commit.ps1
# Run all checks before allowing a commit (PowerShell version)

$ErrorActionPreference = 'Stop'

# Format code
npm run format
if ($LASTEXITCODE -ne 0) { exit 1 }

# Lint
npm run lint
if ($LASTEXITCODE -ne 0) { exit 1 }

# Type check
npm run type-check
if ($LASTEXITCODE -ne 0) { npm run tsc --noEmit; if ($LASTEXITCODE -ne 0) { exit 1 } }

# Run tests with coverage
npm run test:coverage
if ($LASTEXITCODE -ne 0) { exit 1 }

# Check if coverage has dropped (fail if below threshold)
$coverageFile = "coverage/coverage-final.json"
$minCoverage = 100
if (Test-Path $coverageFile) {
    $coverageJson = Get-Content $coverageFile -Raw | ConvertFrom-Json
    $total = 0; $covered = 0
    foreach ($file in $coverageJson.PSObject.Properties.Value) {
        foreach ($count in $file.s.PSObject.Properties.Value) {
            $total += 1
            if ($count -gt 0) { $covered += 1 }
        }
    }
    $actualCoverage = if ($total -gt 0) { [math]::Round(($covered / $total) * 100) } else { 0 }
    Write-Host "Coverage: $actualCoverage%"
    if ($actualCoverage -lt $minCoverage) {
        Write-Host "ERROR: Coverage dropped below $minCoverage%. Commit aborted."
        exit 1
    }
} else {
    Write-Host "ERROR: Coverage file not found. Commit aborted."
    exit 1
}

exit 0
