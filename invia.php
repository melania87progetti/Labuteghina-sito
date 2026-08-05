<?php

$destinatario = "info@labuteghina.it";
$oggetto = "Nuova richiesta confezione natalizia";

$messaggio = "";

foreach ($_POST as $chiave => $valore) {

    if (is_array($valore)) {
        $valore = implode(", ", $valore);
    }

    $messaggio .= strtoupper($chiave) . ": " . $valore . "\n\n";
}

$headers = "From: info@labuteghina.it\r\n";
$headers .= "Reply-To: " . $_POST['email'] . "\r\n";

mail($destinatario, $oggetto, $messaggio, $headers);

header("Location: grazie.html");
exit();

?>