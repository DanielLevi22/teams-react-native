import { useState } from 'react';
import { Container } from './styles';
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpety';
import { Button } from '@components/Button';



export  function Groups() {
const [groups, setGroups] = useState<string[]>([])


  return (
    <Container>
     <Header/>
     <Highlight title='Turmas' subtitle='Jogue com sua turma'/>

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <GroupCard 
          title={item} 
        />
        )}

        contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent = {() => 
          <ListEmpty 
            message="Qual tal cadastrar a primeira turma?"
          />}
      />
      <Button
        title='Criar Nova Turma'
      />
    </Container>
  );
}

