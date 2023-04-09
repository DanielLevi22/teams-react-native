import { ButtonIcon } from "@components/ButtonIcon";
import { Container,Icon,Name } from "./styles";

type Props = {
  name: string,
  onRomove: () => void,
}

export function PlayerCard({name, onRomove}:Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>

      <ButtonIcon
       icon="close"
        type="SECONDARY"
        onPress={onRomove}
        />
    </Container>
  );
}