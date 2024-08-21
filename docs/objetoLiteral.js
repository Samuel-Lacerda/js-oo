const user = {
    nome: 'Fulano',
    email: 'fulaninho@gmail.com',
    nascimento: '2022-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email)
    }
}

user.exibirInfos()