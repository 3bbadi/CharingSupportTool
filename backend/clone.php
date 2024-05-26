<?php
// clone.php

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set CORS headers if necessary
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Define a custom log file path
$logFile = '/var/log/php_custom_errors.log';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve variables from POST request
    $var1 = escapeshellarg($_POST['var1']);
    $var2 = escapeshellarg($_POST['var2']);

    // Log received variables
    error_log("Received var1: $var1, var2: $var2", 3, $logFile);

    // Build the SSH command
    $sshCommand = "ssh root@10.21.201.18 '/charging-ops/AllScripts/AIR_UCIP_Charging/clone_profile.sh $var1 $var2'";

    // Log the SSH command
    error_log("Executing SSH command: $sshCommand", 3, $logFile);

    // Execute the command
    $output = shell_exec($sshCommand);

    // Log the output
    error_log("SSH command output: $output", 3, $logFile);

    // Output the result
    if ($output === null) {
        http_response_code(500);
        echo "Error executing command.";
    } else {
        echo "Production number: " . htmlspecialchars($_POST['var1']) . ", Test Number: " . htmlspecialchars($_POST['var2']);
        echo "<br>Command Output: <pre>" . htmlspecialchars($output) . "</pre>";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>
