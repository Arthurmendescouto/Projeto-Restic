import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, TaskText, TaskDone, TaskDelete } from './styles';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';

import{TaskProps, RootStackParamList} from "../../utils/types";
import {NativeStackScreenProps} from '@react-navigation/native-stack'


type Props={
  title: string;
  status: boolean;
  onCheck?:()=>void
  onRemove?:()=>void;
}

export function Task({ title,status,onCheck,onRemove }: Props) {



  return (
    <Container>
      <TaskDone onPress={onCheck} style={status?{backgroundColor:'#0E9577'}:{}}>
      {!status && <FontAwesome name="circle" size={28} color="white" />}
      {status && <FontAwesome name="circle" size={28} color="white"
      style={{ borderColor: 'white', 
        marginLeft:20}} />}


      </TaskDone>
      <TaskText>{title}</TaskText>
      <TaskDelete onPress={onRemove}>
        <Feather name='trash-2' size={24} color='white' />
      </TaskDelete>
    </Container>
  );
}