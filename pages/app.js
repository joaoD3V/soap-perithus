import { ptBR } from 'date-fns/locale';
import { format, startOfHour, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import SideBar from '../src/components/SideBar';
import LogoSidebar from '../src/components/LogoSidebar';
import SemanaDiaMesAno from '../src/components/SemanaDiaMesAno';
import styled from 'styled-components';
import Menu from '../src/components/Menu';
import NomeBackground from '../src/components/NomeBackground';
import BackgroundApp from '../src/components/BackgroundApp';
import NomeApresentacao from '../src/components/NomeApresentacao';

export const DivLucroAtual = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const LucroAtual = styled.h1`
  color: #000;
  font-size: 50px;
  font-weight: 400;
`;

export const ResultadoLucroAtual = styled.div`
  background-color: #0008;
  width: 200px;
  height: 200px;
`;

export default function App() {
  const diaAtual = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyy", {
    locale: ptBR,
  });
  const router = useRouter();
  const { name } = router.query;

  function getPeriodo(){
    const periodoDia = format(new Date(), "b..bbb");
    let cumprimento;
    if(periodoDia === 'AM'){
      cumprimento = 'Bom dia,';
    } else if(periodoDia === 'PM'){
      cumprimento = 'Boa tarde,'
    } else if(periodoDia === 'noon'){
      cumprimento = 'Boa noite,'
    } else{
      cumprimento = 'Boa noite,'
    }
    return cumprimento;
  }





  return (
    <>
      <BackgroundApp>
        <SideBar>
        <LogoSidebar>Soap</LogoSidebar>
        <SemanaDiaMesAno>{diaAtual}</SemanaDiaMesAno>
        <NomeApresentacao>
        {getPeriodo()} {''} {name}!
        </NomeApresentacao>
        <Menu>Resumo</Menu>
        <Menu>Registrar Sabonetes</Menu>
        <Menu>Consultar por Mês e Ano</Menu>
        <Menu>Listar Valores</Menu>
        </SideBar>
        <DivLucroAtual>
          <LucroAtual>Lucro Atual</LucroAtual>
          <ResultadoLucroAtual />
        </DivLucroAtual>
      </BackgroundApp>
    </>
    );
  }
