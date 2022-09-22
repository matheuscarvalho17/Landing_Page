import React from 'react';
import { IconType } from 'react-icons/lib';
import { Item, Icon, Text, Button } from './styles';

interface IItemContactProps {
  id: string;
  IconFa: IconType;
  isEmail?: boolean;
  LinkContact: string;
  onClick?: () => void;
}

export default function ItemContact(props: IItemContactProps) {
  return (
    <Item id={props.id}>
      <Icon>
        <props.IconFa />
      </Icon>
      {props.isEmail ? (
        <Button onClick={props.onClick}>
          <Text>{props.LinkContact}</Text>
        </Button>
      ) : (
        <Text
          target="_blank"
          href={props.LinkContact}
          rel="noopener noreferrer"
        >
          {props.LinkContact}
        </Text>
      )}
    </Item>
  );
}
