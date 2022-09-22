import React, { useEffect, useState } from 'react';
import {
  Ul,
  Li,
  Url,
  Content,
  Container,
  Created_at,
  TitleProject,
} from './styles';

interface IProjectProps {
  id: number;
  url: string;
  name: string;
  created_at: string;
}

interface IResponseProps {
  ok: boolean;
  status: number;
  json: Function;
}

export default function Projects() {
  const [itemsApi, setItemsApi] = useState<Array<IProjectProps>>([]);

  useEffect(() => {
    let abortController = new AbortController();
    function getGitHubAPI() {
      fetch('https://api.github.com/users/matheuscarvalho17/repos')
        .then(async (res: IResponseProps) => {
          if (!res.ok) {
            throw new Error(res.status.toString());
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((err) => console.log(err));
    }
    getGitHubAPI();
    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item: IProjectProps) => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <Url>{`URL: ${item.url}`}</Url>
              <Created_at>
                {`Created at:
                ${Intl.DateTimeFormat('en-US').format(
                  new Date(item.created_at),
                )}`}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
