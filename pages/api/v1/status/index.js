function status(request, response) {
  response.status(200).json({ chave: "diego pipocado" });
}

export default status;
