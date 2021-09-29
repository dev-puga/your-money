import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransaction: () => void;
}

export function Header({ onOpenNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ymoney" />
        <button onClick={onOpenNewTransaction} type="button">
          New transaction
        </button>
      </Content>
    </Container>
  );
}
