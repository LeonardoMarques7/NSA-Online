const popup = document.getElementById('popup');

const alunos = [
    { rm: '121212', senha: '131313', etec: '016', nome: 'Leonardo Marques', cpf: '10'},
    { rm: '131313', senha: '141414', etec: '016', nome: 'Natalia Hidemi' , cpf: '9'},
    { rm: '141414', senha: '151515', etec: '016', nome: 'Geovanna Terra' , cpf: '8'},
    { rm: '151515', senha: '161616', etec: '016', nome: 'Isbella dos Anjos' , cpf: '7'},
    { rm: '161616', senha: '171717', etec: '016', nome: 'Gabriel Annunciato' , cpf: '5'},
    { rm: '171717', senha: '181818', etec: '016', nome: 'Lucas Tiago' , cpf: '6'},
    { rm: '181818', senha: '191919', etec: '016', nome: 'Matteus Guilherme' , cpf: '1'},
    { rm: '191919', senha: '202020', etec: '016', nome: 'Kamilly Barbosa' , cpf: '2'},
    { rm: '202020', senha: '212121', etec: '016', nome: 'Manoela Xisto' , cpf: '3'}
  ];
  
const professores = [
    { login: 'AndersonRoque@etec016', senha: '5421', etec: '016', nome: 'Anderson Roque', cpf: '11' },
    { login: 'CarlosEduardo@etec016', senha: '3214', etec: '016', nome: 'Carlos Eduardo', cpf: '12' },
    { login: 'DiegoFrancisco@etec016', senha: '9467', etec: '016', nome: 'Diego Francisco', cpf: '13' },
    { login: 'HeitorMoniva@etec016', senha: '1639', etec: '016', nome: 'Heitor Moniva', cpf: '14' },
    { login: 'JoaoBatista@etec016', senha: '2052', etec: '016', nome: 'Joao Batista', cpf: '15' },
    { login: 'JoiraConceicao@etec016', senha: '2012', etec: '016', nome: 'Joira Conceicao', cpf: '16' },
    { login: 'JoseFrancisco@etec016', senha: '5873', etec: '016', nome: 'Jose Francisco', cpf: '17' },
    { login: 'LeilaCanaveze@etec016', senha: '1125', etec: '016', nome: 'Leila Canaveze', cpf: '18' },
    { login: 'LuizFlavio@etec016', senha: '5542', etec: '016', nome: 'Luiz Flavio', cpf: '19' }
];

const responsaveis = [
    { login: '121212', senha: '11082006', etec: '016', nome: 'Belina Marques', cpf: '20' },
    { login: '131313', senha: '24022006', etec: '016', nome: 'Tainá Hidemi', cpf: '21' },
    { login: '141414', senha: '29012006', etec: '016', nome: 'Lorenzo Terra', cpf: '22' },
    { login: '151515', senha: '16032006', etec: '016', nome: 'Larissa dos Anjos', cpf: '23' },
    { login: '161616', senha: '30112006', etec: '016', nome: 'Matheus Annunciato', cpf: '24' },
    { login: '171717', senha: '21092006', etec: '016', nome: 'Manoel Tiago', cpf: '25' },
    { login: '181818', senha: '07052006', etec: '016', nome: 'Claudio Guilherme', cpf: '26' },
    { login: '171717', senha: '13042006', etec: '016', nome: 'Maria Barbosa', cpf: '27' },
    { login: '171717', senha: '22122006', etec: '016', nome: 'Fabio Xisto', cpf: '28' }
];

function AbrirSites (localDoSite) {
    window.location.href = localDoSite;
}

function PoupErro () {
    popup.style.display = 'block';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000);
}

function validarNovaSenhaAluno() { 
    const cpf = document.getElementById('cpf').value;
    const etec = document.getElementById('etec').value;
  
    // Cirando a variável usuarioEncontrado e vendo se a um usuario com o mesmo rm e senha dentro do Array!
    const cadastroEncontrado = alunos.find(aluno => aluno.cpf === cpf && aluno.etec === etec); 
  
    if (cadastroEncontrado) { // Usuário encontrado
        alert(`Enviando Mensagem para ${cadastroEncontrado.nome}!!`);
        AbrirSites('enviando.html');
    } 
    else 
      PoupErro();
}

function validarNovaSenhaProfessor() { 
    const cpf = document.getElementById('cpf').value;
    const etec = document.getElementById('etec').value;
  
    // Cirando a variável usuarioEncontrado e vendo se a um usuario com o mesmo rm e senha dentro do Array!
    const cadastroEncontrado2 = professores.find(professor => professor.cpf === cpf && professor.etec === etec);
  
    if (cadastroEncontrado2) { // Usuário encontrado
        alert(`Enviando Mensagem para ${cadastroEncontrado2.nome}!!`);
        AbrirSites('enviando.html');
    } 
    else 
      PoupErro();
}

function validarNovaSenhaResponsavel() { 
    const cpf = document.getElementById('cpf').value;
    const etec = document.getElementById('etec').value;
  
    // Cirando a variável usuarioEncontrado e vendo se a um usuario com o mesmo rm e senha dentro do Array!
    const cadastroEncontrado3 = responsaveis.find(responsavel => responsavel.cpf === cpf && responsavel.etec === etec);
  
    if (cadastroEncontrado3) { // Usuário encontrado
        alert(`Enviando Mensagem para ${cadastroEncontrado3.nome}!!`);
        AbrirSites('enviando.html');
    } 
    else 
      PoupErro();
}


document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const tipoUsuario = document.getElementById('tipo-usuario').value; // Recebendo o valor do input 
    
    // Validando Alunos, Etecs, Professores, Responsáveis, Supervisores.
    if (tipoUsuario === 'aluno') { 
        validarNovaSenhaAluno();
      } else if (tipoUsuario === 'professor') {
        validarNovaSenhaProfessor();
      } else if (tipoUsuario === 'responsavel') {
        validarNovaSenhaResponsavel();
      } 
});