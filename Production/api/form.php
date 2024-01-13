<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    /* 
        Récupération des données du playload envoyés par la requête post
    */
    $firstName = $_POST["firstName"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];
    $participants = $_POST["participants"];
    $message = $_POST["message"];
    $society = $_POST["society"];

    $finalDate = DateTime::createFromFormat('Y-m-d\TH:i', $date);

    /* 
        Initialisation du header
    */
    $headers = "From: bedrinedev@contact.fr" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    /* 
        Contenu de l'e-mail 
    */
    $subject = 'Nouveau message de contact';
    $content = "Nom: $firstName $name\nEmail: $email\ntéléphone: $phone\ndate: $finalDate\nNombre de participant: $participants\nMessage: $message\nsociety: $society";

    /* 
        Envoie l'e-mail en utilisant la fonction mail() 
    */
    if (mail('bedrinedev@contact.fr', $subject, $content, $headers)) {
        echo "L'e-mail a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de l'e-mail.";
    }
}
?>