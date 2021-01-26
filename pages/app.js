import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import SideBar from '../src/components/SideBar';
import LogoSidebar from '../src/components/LogoSidebar';
import SemanaDiaMesAno from '../src/components/SemanaDiaMesAno';

export default function App() {
  const diaAtual = format(new Date(), "EEEE, dd 'de' MMMM yyy", {
    locale: ptBR,
  });
  return (
    <>
      <SideBar>
        <LogoSidebar>Soap</LogoSidebar>
        <SemanaDiaMesAno>{diaAtual}</SemanaDiaMesAno>
      </SideBar>
    </>
  );
}
