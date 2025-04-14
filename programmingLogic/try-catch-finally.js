const userName = 2;

// O bloco try vai tentar executar o seu código
// Se o código tem algum erro ele cai no catch
// Finally sempre é executado
// O throw ele lança erros

try {
  if (typeof userName !== "string") {
    throw new TypeError("Tipo Inválido!");
  }
  console.log(`Seja bem-vindo ${userName}`);
} catch (err) {
  console.log("Error", err);
} finally {
  console.log("Progama Finalizado!");
}
