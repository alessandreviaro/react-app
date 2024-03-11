export const Users = [
    {
        id: "0",
        name: "Siri",
        description: "Siri é um assistente virtual inteligente para iOS, iPadOS, macOS, watchOS e tvOS, disponível para iPhone, iPad, iPod Touch, Apple Watch, Apple TV, HomePod, Mac. Sendo exclusivo da Apple e utilizando processamento de linguagem natural para responder perguntas, fazer recomendações e executar ações.",
        image: {
            alt: "Siri",
            src: "https://www.apple.com/v/siri/h/images/meta/siri__fsb5b98qe526_og.png?202310101431"
        }
    },
    {
        id: "1",
        name: "Alexa",
        description: "A Amazon Alexa, também conhecida como Alexa, é uma assistente virtual desenvolvida pela Amazon, utilizada pela primeira vez como sistema embarcado nos alto-falantes inteligentes Amazon Echo criados pelo Amazon Lab126.",
        image: {
            alt: "Alexa",
            src: "https://logosmarcas.net/wp-content/uploads/2021/04/Amazon-Alexa-Logo-650x366.png"
        }
    },
    {
        id: "2",
        name: "Google Assitent",
        description: "A Google Assistente ou Assistente Google é uma assistente pessoal virtual desenvolvida pela Google que pode realizar tarefas do dia-a-dia, como ligar para pessoas, mandar mensagens, pesquisar no Google, e ainda conversar com o usuário. Foi anunciada na sua conferência de programadores em maio de 2016.",
        image: {
            alt: "Google Ast",
            src: "data:image/png;base64,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"
        }
    }

];