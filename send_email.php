<?php
// Vérifiez si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $objet = htmlspecialchars($_POST['objet']);
    $message = htmlspecialchars($_POST['message']);

    // L'adresse email à laquelle envoyer le message
    $destinataire = "attrap13nuisibles@gmail.com"; // Remplacez par votre adresse email
    $sujet = "Nouveau message de contact: " . $objet;

    // Composition du message
    $contenu = "Vous avez reçu un nouveau message de contact.\n\n";
    $contenu .= "Nom: " . $nom . "\n";
    $contenu .= "Prénom: " . $prenom . "\n";
    $contenu .= "Email: " . $email . "\n";
    $contenu .= "Téléphone: " . $telephone . "\n\n";
    $contenu .= "Message:\n" . $message . "\n";

    // En-têtes de l'email
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

     // Envoyer l'email
     if (mail($destinataire, $sujet, $contenu, $headers)) {
        // Redirection vers une page de confirmation après envoi réussi
        header("Location: merci.html"); // Remplacez par l'URL de votre page de confirmation
        exit; // Assurez-vous d'utiliser exit() pour arrêter le script après la redirection
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
