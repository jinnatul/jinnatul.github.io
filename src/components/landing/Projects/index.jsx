import React from 'react';
import { Container, Card, TitleWrap } from '../../common';
import Star from '../../common/Icons/Star';
import Fork from '../../common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {  
  const edges = [
    {
      id: 1,
      name: 'first',
      url: "https://ant.design/components/form/",
      description: "abc",
      stargazers: {
        totalCount: 10
      },
      forkCount: 2,
      languages: [
        {
          id: 1,
          name: "Node"
        },
        {
          id: 2,
          name: "React"
        }
      ]
    }
  ];

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map((node) => (
          <Item key={node.id} rel="noopener noreferrer" theme={"light"}>
            <Card theme={"light"}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={"light"}>
                  <div>
                    <Star color={"#000"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={"#000"} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={"light"}>
                  <Languages>
                    {
                      node.languages.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
