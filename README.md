<h1>Projeto - Barros - Labenu-System1 🏦</h1>
<h2>Este projeto visa apresentar um sistema que represente o básico da uma organização.</h2>


Ele deve possuir ao menos 3 entidades importantes que devem existir no código como Classes:

  
  <h2><strong>Turma</strong></h2>
  
  >Toda turma é composta pelas seguintes características:

        ✅id--identificador único gerado pela própria aplicação;

        ✅nome--Nome da turma;

        ✅docentes--lista de ids de docentes dessa turma;
          🔑essas ids devem existir na tabela de docentes.

        ✅estudantes-- lista de ids de estudantes dessa turma;
          🔑essas ids devem existir na tabela de estudantes

        ✅modulo--módulo atual da turma;
          🔑pode assumir um valor entre 1 a 6 nas turmas ativas, 
          ou 0, indicando que as aulas dessa turma ainda não começaram
          
          🔑deve iniciar como 0


<h2><strong>Estudante</strong></h2>

>Representa estudantes da nossa instituição. Cada estudante deve possuir uma, e somente uma turma por vez. Estudantes com cadastro novo começam sem alocação em nenhuma turma.

>Deve Possuir: 

        ✅id--identificador único gerado pela própria aplicação

        ✅nome--nome da pessoa

        ✅email da pessoa

        ✅data_nasc--data de nascimento no formato DD/MM/AAAA
            💡exemplo: 21/03/1999
  
        ✅turma_id--id da turma da pessoa
            🔑esse id deve existir na *tabela de turmas*

        ✅hobbies--uma lista de hobbies relacionados à pessoa (passatempos)
            🔑esses hobbies devem existir na *tabela de hobbies*
            🔑caso não exista, deve ser adicionado à *tabela de hobbies* automaticamente
            
            💡exemplo:
              ["assistir séries de tv", "jogar videogames", "passear de bike"]


<h2><strong>Docente</strong></h2>

>Representa docentes da nossa instituição.  Cada docente deve possuir uma, e somente uma turma por vez. Docentes com cadastro novo começam sem alocação em nenhuma turma.

> Deve Possuir:

        ✅id--identificador único gerado pela própria aplicação

        ✅nome--nome da pessoa

        ✅email da pessoa

        ✅data_nasc--data de nascimento no formato DD/MM/AAAA
            💡exemplo: 21/03/1999
  
        ✅turma_id--id da turma da pessoa
            🔑esse id deve existir na *tabela de turmas*

        ✅especialidades--uma lista de especialidades relacionadas à pessoa
            🔑essas especialidades devem existir na *tabela de especialidades*

            🔑deve iniciar com pelo menos uma das especialidades pré-definidas
         
            🔑existem 5 especialidades fixas:
                📌JS
                📌CSS
                📌React
                📌Typescript
                📌POO (Programação Orientada a Objetos)


<h2><strong>Funcionalidades básicas</strong></h2>

><h3><strong>Criar Turma</strong></h3>
  >Para criar uma turma, os dados enviados ao banco precisam ser uma instância de classe Turma

><h3><strong>Buscar Turmas Ativas</strong></h3>

><h3><strong>Mudar Turma de Modulo</strong></h3>

><h3><strong>Criar Estudante</strong></h3>
  >Para criar um estudante, os dados enviados ao banco precisam ser uma instância de classe Estudante;


><h3><strong>Buscar estudantes através do nome</strong></h3>

><h3><strong>Mudar Docente de Turma</strong></h3>

<h2><strong>Instruções</strong></h2>

  1 - Deve haver no seu banco: duas turmas, dois alunos e dois professores. Adicione as pessoas às turmas da forma como achar mais pertinente, seja manualmente pelo banco de dados, seja pela aplicação através de um endpoint.

  2 - Você deve salvar as informações das turmas em tabelas TURMA, estudantes em ESTUDANTE e docentes em DOCENTE
