import docgo from "docgo-sdk";

interface ExtrairDadosParams {
  parametro: string;
  filtro?: string;
}

async function extrairDados(params: ExtrairDadosParams): Promise<void> {
  try {
    // Normalizar parâmetros
    if (Array.isArray(params) && params.length === 1 && typeof params[0] === 'object') {
      params = params[0];
    }

    // Validação de entrada
    if (!params.parametro) {
      console.log(docgo.result(false, null, "É necessário informar o parâmetro"));
      return;
    }

    // Obter credenciais via com o app-whom passando token e extension-id
    if (!docgo.getEnv("whomToken") || !docgo.getEnv("whomExtensionId")) {
      console.log(docgo.result(false, null, "Credenciais do Whom não configuradas"));
      return;
    }

    // obter sessao do whom
    const session = true;
    if (!session) {
      console.log(docgo.result(false, null, "Não foi possível obter sessão do Whom"));
      return;
    }
    
    // Simular execução da função
    console.log(`Executando extrairDados com parametro=${params.parametro}...`);
    
    // Simular tempo de resposta
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Dados simulados de resposta
    const resultado = {
      parametro: params.parametro,
      timestamp: new Date().toISOString(),
      status: "sucesso",
      mensagem: "Extrai dados estruturados de documento concluído com sucesso",
      resultado: {
        id: "doc-" + Math.floor(Math.random() * 1000000),
        data: new Date().toISOString(),
        conteudo: `Resultado processado para: ${params.parametro}`
      }
    };

    console.log(docgo.result(true, resultado));
  } catch (err: any) {
    console.log(docgo.result(false, null, err.message));
  }
}

export default extrairDados;
