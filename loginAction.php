<?php

// Inicie a sessão
session_start();

// Verifique se a requisição foi feita usando o método POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recupere os dados do formulário
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    //requisita conexão com BD
    Require 'ConectBD.php';

    // Consulte o banco de dados para verificar o email e a senha
    $cliente = "SELECT * FROM cliente WHERE email = '$email' AND senha = '$senha'";
    $resultado = $conn->query($cliente);

    // Verifica se a consulta retornou algum resultado
    if ($resultado->num_rows === 1) {
        // Email e senha válidos

        // Inicie a sessão e armazene o id do cliente
        $_SESSION["idCliente"] = $idCliente;

        // Redireciona para a página de index logado
        header("Location: index-logado.php");
        exit(); // Certifique-se de sair do script após o redirecionamento
    } else {
        // Email ou senha inválidos
        echo "Email e/ou Senha inválidos";
    }

    // Feche a conexão com o banco de dados
    $conn->close();
}

?>
