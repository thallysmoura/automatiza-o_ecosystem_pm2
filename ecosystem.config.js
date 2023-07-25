
// Defina o diretório onde está localizado as API's
var _DIRETORIO = {
  PATH: 'J:\\SERVER\\'
};

/*  ____________________________________________________________________________
*  |             INICIALIZAÇÃO AUTOMATIZADA DE API's                            |
*  | script => Nome do arquivo .js onde é responsável pela aplicação da API.    |
*  | cwd    => Diretório onde está a API.                                       |
*  | name   => Nome da aplicação                                                |
*  |____________________________________________________________________________|
*/

module.exports = {

  apps: [
    {
      name: "3135_API_APPCC",
      cwd: _DIRETORIO.PATH + "api-centro-cirurgico-reactjs",
      script: "app.js"
    },
    {
      name: "1927_API_PEND_AUDIT",
      cwd: _DIRETORIO.PATH + "api-pendencia-auditorio",
      script: "app.js"
    },
    {
      name: "3203_API_CHBOT_OFC",
      cwd: _DIRETORIO.PATH + "api_chatbot_oficial",
      script: "app.js"
    },
    {
      name: "3139_API_FACE_RKG",
      cwd: _DIRETORIO.PATH + "api_face_rekognition_s3",
      script: "app.js"
    },
    {
      name: "3011_API_MALA_CARTAS",
      cwd: _DIRETORIO.PATH + "maladiretacartasgarantia_api",
      script: "app.js"
    },
    {
      name: "3004_API_MILV",
      cwd: _DIRETORIO.PATH + "api_milvus",
      script: "app.js"
    },
    {
      name: "3021_API_PORTAL_MEDICOS",
      cwd: _DIRETORIO.PATH + "API_PORTAL_MEDICO",
      script: "app.js"
    },
    {
      name: "3012_API_PROT_CONV",
      cwd: _DIRETORIO.PATH + "api-protocolo-convenio",
      script: "app.js"
    },
    {
      name: "3020_API_SATI",
      cwd: _DIRETORIO.PATH + "api-sati",
      script: "app.js"
    },
    {
      name: "3005_API_TELEGRAM",
      cwd: _DIRETORIO.PATH + "api_chatbot_telegram_gestora_virtual",
      script: "app.js"
    },
    {
      name: "1888_API_REBRANDLY",
      cwd: _DIRETORIO.PATH + "api_rebrandly",
      script: "app.js"
    },
	  {
      name: "3322_API_CHATBOT_EVA_OFC",
      cwd: _DIRETORIO.PATH + "api_eva_chatbot_oficial",
      script: "index.js"
    },
    {
      name: "3340_API_CHATBOT_MKT",
      cwd: _DIRETORIO.PATH + "api_chatbot_marketing",
      script: "app.js"
    },
     {
      name: "3010_API_PAINEIS",
      cwd: _DIRETORIO.PATH + "api_painel_ham",
      script: "app.js"
    },
  ]
}
